#include "pxt.h"

using namespace pxt;
namespace gamerpad {
    bool initialized = false;

    //%
    void init() {
        if (initialized) return;

    // mount buttons on the pins with a pullup mode
    // TODO: fix this issue in the DAL itself
#define ALLOC_PIN_BUTTON(id) new MicroBitButton(getPin(id)->name, id, MICROBIT_BUTTON_ALL_EVENTS, PullDown);
    ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P0)
    ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P1)
    ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P2)
    //ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P3)
    //ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P4)
    //ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P5)
    //ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P6)
    //ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P7)
    ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P8)
    //ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P9)
    //ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P10)
    //ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P11)
    ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P12)
    ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P13)
    ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P14)
    //ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P15)
    //ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P16)
    //ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P20)
#undef ALLOC_PIN_BUTTON

        initialized = true;
    }
}
