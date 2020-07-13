/* eslint-disable max-len */
/**
* MIT License
*
* Copyright (c) 2020 Bureau Moeilijke Dingen
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

/*
 * Set of functions for creating a makefile based on STM32
 * makefile info and the Src, Inc and Lib folders
 * Created by Jort Band - Bureau Moeilijke Dingen
*/

import 'process';

import * as _ from 'lodash';

import MakeInfo from './types/MakeInfo';
import getTargetConfig from './OpenOcdTargetFiles';

const { platform } = process;

/**
 * @description formats an array of string into one string with line endings per array entry.
 * @param {string[]} arr
 */
export function createStringList(arr: string[]): string {
  let output = '';
  const sortedArray = _.uniq(arr).sort();
  _.map(sortedArray, (entry: string, ind: number) => {
    output += `${entry}`;
    if (ind < sortedArray.length - 1) {
      output += ' \\';
    }
    output += '\n';
  });

  return output;
}

export default function createMakefile(makeInfo: MakeInfo): string {
  // NOTE: check for the correct info needs to be given beforehand
  const makeFile = `##########################################################################################################################
# File automatically-generated by STM32forVSCode
##########################################################################################################################

# ------------------------------------------------
# Generic Makefile (based on gcc)
#
# ChangeLog :
#\t2017-02-10 - Several enhancements + project update mode
#   2015-07-22 - first version
# ------------------------------------------------

######################################
# target
######################################
TARGET = ${makeInfo.target}


######################################
# building variables
######################################
# debug build?
DEBUG = 1
# optimization
OPT = -Og


#######################################
# paths
#######################################
# Build path
BUILD_DIR = build

######################################
# source
######################################
# C sources
C_SOURCES =  ${'\\'}
${createStringList(makeInfo.cSources)}

CPP_SOURCES = ${'\\'}
${createStringList(makeInfo.cxxSources)}

# ASM sources
ASM_SOURCES =  ${'\\'}
${createStringList(makeInfo.asmSources)}


#######################################
# binaries
#######################################
PREFIX = arm-none-eabi-
# The gcc compiler bin path can be either defined in make command via GCC_PATH variable (> make GCC_PATH=xxx)
# either it can be added to the PATH environment variable.
${makeInfo.tools.armToolchain ? `GCC_PATH=${makeInfo.tools.armToolchain}` : ''}
ifdef GCC_PATH
CXX = $(GCC_PATH)/$(PREFIX)g++
CC = $(GCC_PATH)/$(PREFIX)gcc
AS = $(GCC_PATH)/$(PREFIX)gcc -x assembler-with-cpp
CP = $(GCC_PATH)/$(PREFIX)objcopy
SZ = $(GCC_PATH)/$(PREFIX)size
else
CXX = $(PREFIX)g++
CC = $(PREFIX)gcc
AS = $(PREFIX)gcc -x assembler-with-cpp
CP = $(PREFIX)objcopy
SZ = $(PREFIX)size
endif
HEX = $(CP) -O ihex
BIN = $(CP) -O binary -S

#######################################
# CFLAGS
#######################################
# cpu
CPU = ${makeInfo.cpu}

# fpu
FPU = ${makeInfo.fpu}

# float-abi
FLOAT-ABI = ${makeInfo.floatAbi}

# mcu
MCU = ${makeInfo.mcu}

# macros for gcc
# AS defines
AS_DEFS = 

# C defines
C_DEFS =  ${'\\'}
${createStringList(makeInfo.cDefs)}

# AS includes
AS_INCLUDES = ${'\\'}

# C includes
C_INCLUDES =  ${'\\'}
${createStringList(makeInfo.cIncludes)}


# compile gcc flags
ASFLAGS = $(MCU) $(AS_DEFS) $(AS_INCLUDES) $(OPT) -Wall -fdata-sections -ffunction-sections

CFLAGS = $(MCU) $(C_DEFS) $(C_INCLUDES) $(OPT) -Wall -fdata-sections -ffunction-sections

ifeq ($(DEBUG), 1)
CFLAGS += -g -gdwarf-2
endif


# Generate dependency information
CFLAGS += -MMD -MP -MF"$(@:%.o=%.d)"

CXXFLAGS?=
CXXFLAGS += -feliminate-unused-debug-types

#######################################
# LDFLAGS
#######################################
# link script
LDSCRIPT = ${makeInfo.ldscript}

# libraries
LIBS = -lc -lm -lnosys 
LIBDIR = 
LDFLAGS = $(MCU) -specs=nosys.specs -T$(LDSCRIPT) $(LIBDIR) $(LIBS) -Wl,-Map=$(BUILD_DIR)/$(TARGET).map,--cref -Wl,--gc-sections

# default action: build all
all: $(BUILD_DIR)/$(TARGET).elf $(BUILD_DIR)/$(TARGET).hex $(BUILD_DIR)/$(TARGET).bin


#######################################
# build the application
#######################################
# list of cpp program objects
OBJECTS = $(addprefix $(BUILD_DIR)/,$(notdir $(CPP_SOURCES:.cpp=.o)))
vpath %.cpp $(sort $(dir $(CPP_SOURCES)))
# list of C objects
OBJECTS += $(addprefix $(BUILD_DIR)/,$(notdir $(C_SOURCES:.c=.o)))
vpath %.c $(sort $(dir $(C_SOURCES)))
# list of ASM program objects
OBJECTS += $(addprefix $(BUILD_DIR)/,$(notdir $(ASM_SOURCES:.s=.o)))
vpath %.s $(sort $(dir $(ASM_SOURCES)))

$(BUILD_DIR)/%.o: %.cpp Makefile | $(BUILD_DIR) 
\t$(CXX) -c $(CXXFLAGS) $(CFLAGS) -Wa,-a,-ad,-alms=$(BUILD_DIR)/$(notdir $(<:.cpp=.lst)) $< -o $@

$(BUILD_DIR)/%.o: %.c Makefile | $(BUILD_DIR) 
\t$(CC) -c $(CFLAGS) -Wa,-a,-ad,-alms=$(BUILD_DIR)/$(notdir $(<:.c=.lst)) $< -o $@

$(BUILD_DIR)/%.o: %.s Makefile | $(BUILD_DIR)
\t$(AS) -c $(CFLAGS) $< -o $@

$(BUILD_DIR)/$(TARGET).elf: $(OBJECTS) Makefile
\t$(CC) $(OBJECTS) $(LDFLAGS) -o $@
\t$(SZ) $@

$(BUILD_DIR)/%.hex: $(BUILD_DIR)/%.elf | $(BUILD_DIR)
\t$(HEX) $< $@

$(BUILD_DIR)/%.bin: $(BUILD_DIR)/%.elf | $(BUILD_DIR)
\t$(BIN) $< $@

$(BUILD_DIR):
\tmkdir $@

#######################################
# flash
#######################################
flash: $(BUILD_DIR)/$(TARGET).elf
\t${makeInfo.tools.openOCD ? makeInfo.tools.openOCD : 'openocd'} -f interface/stlink.cfg  -f target/${getTargetConfig(makeInfo.targetMCU)} -c "program $(BUILD_DIR)/$(TARGET).elf verify reset exit"

#######################################
# erase
#######################################
erase: $(BUILD_DIR)/$(TARGET).elf
\t${makeInfo.tools.openOCD ? makeInfo.tools.openOCD : 'openocd'} -f interface/stlink.cfg -f target/${getTargetConfig(makeInfo.targetMCU)} -c "init; reset halt; ${makeInfo.targetMCU} mass_erase 0; exit"

#######################################
# clean up
#######################################
clean:
\t${platform === 'win32' ? 'cmd //C rm -fR another-delete-test' : '-rm -fR'} $(BUILD_DIR)
	
#######################################
# dependencies
#######################################
-include $(wildcard $(BUILD_DIR)/*.d)

# *** EOF ***`;

  return makeFile;
}

// export default function createMakefile(info: MakeInfo): string {
//   return convertTemplate(info);
// }
