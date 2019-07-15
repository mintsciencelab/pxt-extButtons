/*！
 * @file ExtButtons/main.ts
 * @brief Extend button functionality to buttons attached externally.
 *
 * @copyright [MiNT Science Lab] (https://www.mintsciencelab.com), 2019)
 * @copyright	[DFRobot](http://www.dfrobot.com), 2016
 * @copyright	GNU Lesser General Public License
 *
 * @author [email](mintsciencelab@gmail.com)
 * @version  V1.0
 * @date  2019-07-07
 */

/**
 * User Buttons for DFRobot gamer:bit Players.
 */
//%
enum GamerBitPin {
    //% block="P0"
    P0 = <number>DAL.MICROBIT_ID_IO_P0,
    //% block="P1"
    P1 = <number>DAL.MICROBIT_ID_IO_P1,
    //% block="P2"
    P2 = <number>DAL.MICROBIT_ID_IO_P2,
    //% block="P8"
    P8 = <number>DAL.MICROBIT_ID_IO_P8,
    //% block="P12"
    P13 = <number>DAL.MICROBIT_ID_IO_P12,
    //% block="P13"
    P13 = <number>DAL.MICROBIT_ID_IO_P13,
    //% block="P14"
    P14 = <number>DAL.MICROBIT_ID_IO_P14,
}

/**
 * Trigger Events Proposed by DFRobot gamer:bit Players.
 */
//%
enum GamerBitEvent {
    //% block="pressed"
    Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
    //% block="released"
    Up = DAL.MICROBIT_BUTTON_EVT_UP,
    //% block="click"
    Click = DAL.MICROBIT_BUTTON_EVT_CLICK,
}

/**
 * Functions for DFRobot gamer:bit Players.
 */
//% weight=10 color=#429E9D icon="\uf11b" block="ExtButtons"
namespace gamePad {
    let PIN_INIT = 0;

    //% shim=gamerpad::init
    function init(): void {
        return;
    }

    function PinInit(): void {
        pins.setPull(DigitalPin.P0, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P1, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P2, PinPullMode.PullNone);
        //pins.setPull(DigitalPin.P3, PinPullMode.PullNone);
        //pins.setPull(DigitalPin.P4, PinPullMode.PullNone);
        //pins.setPull(DigitalPin.P5, PinPullMode.PullNone);
        //pins.setPull(DigitalPin.P6, PinPullMode.PullNone);
        //pins.setPull(DigitalPin.P7, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P8, PinPullMode.PullNone);
        //pins.setPull(DigitalPin.P9, PinPullMode.PullNone);
        //pins.setPull(DigitalPin.P10, PinPullMode.PullNone);
        //pins.setPull(DigitalPin.P11, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P12, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P13, PinPullMode.PullNone);
        pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
        //pins.setPull(DigitalPin.P15, PinPullMode.PullNone);
        //pins.setPull(DigitalPin.P16, PinPullMode.PullNone);
        //pins.setPull(DigitalPin.P20, PinPullMode.PullNone);
        PIN_INIT = 1;
        return;
    }

    /**
     * To scan a button whether be triggered : return '1' if pressed; return'0' if not.
     */
    //% weight=70
    //% blockId=gamePad_keyState block="button|%button|is pressed"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    export function keyState(button: GamerBitPin): boolean {
        if (!PIN_INIT) {
            PinInit();
        }
        let num = false;
        if (0 == pins.digitalReadPin(<number>button)) {
            num = true;
        }
        return num;
    }

    /**
     * Registers code to run when a DFRobot gamer:bit event is detected.
     */
    //% weight=60
    //% blockGap=50
    //% blockId=gamePad_onEvent block="on button|%button|is %event"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% event.fieldEditor="gridpicker" event.fieldOptions.columns=3
    export function onEvent(button: GamerBitPin, event: GamerBitEvent, handler: Action) {
        init();
        if (!PIN_INIT) {
            PinInit();
        }
        control.onEvent(<number>button, <number>event, handler); // register handler
    }
}
