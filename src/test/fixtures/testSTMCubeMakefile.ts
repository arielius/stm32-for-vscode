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

/**
 * This is a test makefile which is generated from a clean STM32CubeMX project for a STM32H7
 * It also has all the information that should be extracted from it extracted as testMakefileInfo
 */

import MakeInfo, { ToolChain } from '../../types/MakeInfo';

const testMakefile = "##########################################################################################################################\n# File automatically-generated by tool: [projectgenerator] version: [3.3.0] date: [Mon Sep 09 15:06:00 CEST 2019]\n##########################################################################################################################\n\n# ------------------------------------------------\n# Generic Makefile (based on gcc)\n#\n# ChangeLog :\n#\t2017-02-10 - Several enhancements + project update mode\n#   2015-07-22 - first version\n# ------------------------------------------------\n\n######################################\n# target\n######################################\nTARGET = Clean_project_h7\n\n\n######################################\n# building variables\n######################################\n# debug build?\nDEBUG = 1\n# optimization\nOPT = -Og\n\n\n#######################################\n# paths\n#######################################\n# Build path\nBUILD_DIR = build\n\n######################################\n# source\n######################################\n# C sources\nC_SOURCES =  \\\nSrc/main.c \\\nSrc/stm32h7xx_it.c \\\nSrc/stm32h7xx_hal_msp.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_cortex.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_eth.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_eth_ex.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_tim.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_tim_ex.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_uart.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_uart_ex.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_pcd.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_pcd_ex.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_ll_usb.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_rcc.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_rcc_ex.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_flash.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_flash_ex.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_gpio.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_hsem.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_dma.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_dma_ex.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_mdma.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_pwr.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_pwr_ex.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_i2c.c \\\nDrivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_i2c_ex.c \\\nSrc/system_stm32h7xx.c  \n\n# ASM sources\nASM_SOURCES =  \\\nstartup_stm32h743xx.s\n\n\n#######################################\n# binaries\n#######################################\nPREFIX = arm-none-eabi-\n# The gcc compiler bin path can be either defined in make command via GCC_PATH variable (> make GCC_PATH=xxx)\n# either it can be added to the PATH environment variable.\nifdef GCC_PATH\nCC = $(GCC_PATH)/$(PREFIX)gcc\nAS = $(GCC_PATH)/$(PREFIX)gcc -x assembler-with-cpp\nCP = $(GCC_PATH)/$(PREFIX)objcopy\nSZ = $(GCC_PATH)/$(PREFIX)size\nelse\nCC = $(PREFIX)gcc\nAS = $(PREFIX)gcc -x assembler-with-cpp\nCP = $(PREFIX)objcopy\nSZ = $(PREFIX)size\nendif\nHEX = $(CP) -O ihex\nBIN = $(CP) -O binary -S\n \n#######################################\n# CFLAGS\n#######################################\n# cpu\nCPU = -mcpu=cortex-m7\n\n# fpu\nFPU = -mfpu=fpv5-d16\n\n# float-abi\nFLOAT-ABI = -mfloat-abi=hard\n\n# mcu\nMCU = $(CPU) -mthumb $(FPU) $(FLOAT-ABI)\n\n# macros for gcc\n# AS defines\nAS_DEFS = \n\n# C defines\nC_DEFS =  \\\n-DUSE_HAL_DRIVER \\\n-DSTM32H743xx \\\n-DUSE_HAL_DRIVER \\\n-DSTM32H743xx\n\n\n# AS includes\nAS_INCLUDES = \n\n# C includes\nC_INCLUDES =  \\\n-IInc \\\n-IDrivers/STM32H7xx_HAL_Driver/Inc \\\n-IDrivers/STM32H7xx_HAL_Driver/Inc/Legacy \\\n-IDrivers/CMSIS/Device/ST/STM32H7xx/Include \\\n-IDrivers/CMSIS/Include \\\n-IDrivers/CMSIS/Include\n\n\n# compile gcc flags\nASFLAGS = $(MCU) $(AS_DEFS) $(AS_INCLUDES) $(OPT) -Wall -fdata-sections -ffunction-sections\n\nCFLAGS = $(MCU) $(C_DEFS) $(C_INCLUDES) $(OPT) -Wall -fdata-sections -ffunction-sections\n\nifeq ($(DEBUG), 1)\nCFLAGS += -g -gdwarf-2\nendif\n\n\n# Generate dependency information\nCFLAGS += -MMD -MP -MF\"$(@:%.o=%.d)\"\n\n\n#######################################\n# LDFLAGS\n#######################################\n# link script\nLDSCRIPT = STM32H743ZITx_FLASH.ld\n\n# libraries\nLIBS = -lc -lm -lnosys\nLIBDIR = \nLDFLAGS = $(MCU) -specs=nano.specs -T$(LDSCRIPT) $(LIBDIR) $(LIBS) -Wl,-Map=$(BUILD_DIR)/$(TARGET).map,--cref -Wl,--gc-sections\n\n# default action: build all\nall: $(BUILD_DIR)/$(TARGET).elf $(BUILD_DIR)/$(TARGET).hex $(BUILD_DIR)/$(TARGET).bin\n\n\n#######################################\n# build the application\n#######################################\n# list of objects\nOBJECTS = $(addprefix $(BUILD_DIR)/,$(notdir $(C_SOURCES:.c=.o)))\nvpath %.c $(sort $(dir $(C_SOURCES)))\n# list of ASM program objects\nOBJECTS += $(addprefix $(BUILD_DIR)/,$(notdir $(ASM_SOURCES:.s=.o)))\nvpath %.s $(sort $(dir $(ASM_SOURCES)))\n\n$(BUILD_DIR)/%.o: %.c Makefile | $(BUILD_DIR) \n\t$(CC) -c $(CFLAGS) -Wa,-a,-ad,-alms=$(BUILD_DIR)/$(notdir $(<:.c=.lst)) $< -o $@\n\n$(BUILD_DIR)/%.o: %.s Makefile | $(BUILD_DIR)\n\t$(AS) -c $(CFLAGS) $< -o $@\n\n$(BUILD_DIR)/$(TARGET).elf: $(OBJECTS) Makefile\n\t$(CC) $(OBJECTS) $(LDFLAGS) -o $@\n\t$(SZ) $@\n\n$(BUILD_DIR)/%.hex: $(BUILD_DIR)/%.elf | $(BUILD_DIR)\n\t$(HEX) $< $@\n\t\n$(BUILD_DIR)/%.bin: $(BUILD_DIR)/%.elf | $(BUILD_DIR)\n\t$(BIN) $< $@\t\n\t\n$(BUILD_DIR):\n\tmkdir $@\t\t\n\n#######################################\n# clean up\n#######################################\nclean:\n\t-rm -fR $(BUILD_DIR)\n  \n#######################################\n# dependencies\n#######################################\n-include $(wildcard $(BUILD_DIR)/*.d)\n\n# *** EOF ***";
export default testMakefile;



const cSources = [
  'Src/main.c',
  'Src/stm32h7xx_it.c',
  'Src/stm32h7xx_hal_msp.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_cortex.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_eth.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_eth_ex.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_tim.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_tim_ex.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_uart.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_uart_ex.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_pcd.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_pcd_ex.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_ll_usb.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_rcc.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_rcc_ex.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_flash.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_flash_ex.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_gpio.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_hsem.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_dma.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_dma_ex.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_mdma.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_pwr.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_pwr_ex.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_i2c.c',
  'Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_i2c_ex.c',
  'Src/system_stm32h7xx.c',
];
const cDefs = ['-DUSE_HAL_DRIVER', '-DSTM32H743xx', '-DUSE_HAL_DRIVER', '-DSTM32H743xx'];
const cIncludes = [
  '-IInc',
  '-IDrivers/STM32H7xx_HAL_Driver/Inc',
  '-IDrivers/STM32H7xx_HAL_Driver/Inc/Legacy',
  '-IDrivers/CMSIS/Device/ST/STM32H7xx/Include',
  '-IDrivers/CMSIS/Include',
  '-IDrivers/CMSIS/Include',
];

const asmSources = ['startup_stm32h743xx.s'];
const floatAbi = '-mfloat-abi=hard';
const fpu = '-mfpu=fpv5-d16';
const libs = ['-lc', '-lm', '-lnosys'];

export const testMakefileInfo: MakeInfo = {
  cDefs,
  cxxDefs: [],
  asDefs: [],
  cIncludes,
  cSources: cSources,
  cxxSources: [],
  asmSources,
  target: 'Clean_project_h7',
  cpu: '-mcpu=cortex-m7',
  fpu,
  mcu: '$(CPU) -mthumb $(FPU) $(FLOAT-ABI)',
  floatAbi,
  tools: {} as ToolChain,
  ldscript: 'STM32H743ZITx_FLASH.ld',
  targetMCU: 'stm32h7x',
  libs,
  libDirs: [],
};

export const stm32ForVSCodeResult = `##########################################################################################################################
# File automatically-generated by STM32forVSCode
##########################################################################################################################

# ------------------------------------------------
# Generic Makefile (based on gcc)
#
# ChangeLog :
#	2017-02-10 - Several enhancements + project update mode
#   2015-07-22 - first version
# ------------------------------------------------

######################################
# target
######################################
TARGET = Clean_project_h7


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
C_SOURCES =  \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_cortex.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_dma.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_dma_ex.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_eth.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_eth_ex.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_flash.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_flash_ex.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_gpio.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_hsem.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_i2c.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_i2c_ex.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_mdma.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_pcd.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_pcd_ex.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_pwr.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_pwr_ex.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_rcc.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_rcc_ex.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_tim.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_tim_ex.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_uart.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_hal_uart_ex.c \\
Drivers/STM32H7xx_HAL_Driver/Src/stm32h7xx_ll_usb.c \\
Src/main.c \\
Src/stm32h7xx_hal_msp.c \\
Src/stm32h7xx_it.c \\
Src/system_stm32h7xx.c


CPP_SOURCES = \\


# ASM sources
ASM_SOURCES =  \\
startup_stm32h743xx.s



#######################################
# binaries
#######################################
PREFIX = arm-none-eabi-
# The gcc compiler bin path can be either defined in make command via GCC_PATH variable (> make GCC_PATH=xxx)
# either it can be added to the PATH environment variable.

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
CPU = -mcpu=cortex-m7

# fpu
FPU = -mfpu=fpv5-d16

# float-abi
FLOAT-ABI = -mfloat-abi=hard

# mcu
MCU = $(CPU) -mthumb $(FPU) $(FLOAT-ABI)

# macros for gcc
# AS defines
AS_DEFS = 

# C defines
C_DEFS =  \\
-DSTM32H743xx \\
-DUSE_HAL_DRIVER


# AS includes
AS_INCLUDES = \\

# C includes
C_INCLUDES =  \\
-IDrivers/CMSIS/Device/ST/STM32H7xx/Include \\
-IDrivers/CMSIS/Include \\
-IDrivers/STM32H7xx_HAL_Driver/Inc \\
-IDrivers/STM32H7xx_HAL_Driver/Inc/Legacy \\
-IInc



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
LDSCRIPT = STM32H743ZITx_FLASH.ld

# libraries
LIBS = -lc -lm -lnosys 
LIBDIR = \\


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
	$(CXX) -c $(CXXFLAGS) $(CFLAGS) -Wa,-a,-ad,-alms=$(BUILD_DIR)/$(notdir $(<:.cpp=.lst)) $< -o $@

$(BUILD_DIR)/%.o: %.c Makefile | $(BUILD_DIR) 
	$(CC) -c $(CFLAGS) -Wa,-a,-ad,-alms=$(BUILD_DIR)/$(notdir $(<:.c=.lst)) $< -o $@

$(BUILD_DIR)/%.o: %.s Makefile | $(BUILD_DIR)
	$(AS) -c $(CFLAGS) $< -o $@

$(BUILD_DIR)/$(TARGET).elf: $(OBJECTS) Makefile
	$(CC) $(OBJECTS) $(LDFLAGS) -o $@
	$(SZ) $@

$(BUILD_DIR)/%.hex: $(BUILD_DIR)/%.elf | $(BUILD_DIR)
	$(HEX) $< $@

$(BUILD_DIR)/%.bin: $(BUILD_DIR)/%.elf | $(BUILD_DIR)
	$(BIN) $< $@

$(BUILD_DIR):
	mkdir $@

#######################################
# flash
#######################################
flash: $(BUILD_DIR)/$(TARGET).elf
	openocd -f interface/stlink.cfg  -f target/stm32h7x.cfg -c "program $(BUILD_DIR)/$(TARGET).elf verify reset exit"

#######################################
# erase
#######################################
erase: $(BUILD_DIR)/$(TARGET).elf
	openocd -f interface/stlink.cfg -f target/stm32h7x.cfg -c "init; reset halt; stm32h7x mass_erase 0; exit"

#######################################
# clean up
#######################################
clean:
	-rm -fR $(BUILD_DIR)
	
#######################################
# dependencies
#######################################
-include $(wildcard $(BUILD_DIR)/*.d)

# *** EOF ***`;