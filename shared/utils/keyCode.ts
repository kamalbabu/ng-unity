/**
 * Checks whether a key event represents an input event or not.
 *
 * @param evt The event or keycode number to be checked.
 *
 * @returns Returns true if the argument is  non input.
 */
const isNonInput = function isNonInput(evt: any): boolean {
    // Key Code Ref.:-https://css-tricks.com/snippets/javascript/javascript-keycodes/
    const charCode: number = (evt.which) ? evt.which : (evt.keyCode ? evt.keyCode : evt);
    return (charCode < 48 || (charCode > 90 && charCode < 94) ||
        (charCode > 111 && charCode < 146));
};

/**
 * Checks whether a key event represents a numeric input or not.
 *
 * @param evt The event or keycode number to be checked.
 *
 * @returns Returns true if the argument is a numeric input.
 */
const isNumericInput = function isNumericInput(evt: any): boolean {
    const charCode: number = (evt.which) ? evt.which : (evt.keyCode ? evt.keyCode : evt);
    if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
};

export default {
    isNonInput, isNumericInput
};
