/**
 * Build style from given color
 *
 * @param {string} color
 * @return {{}}
 */
export function buildStyle(color) {
    return {
        backgroundColor: color,
        background: color,
        borderColor: color === '#FFF' || color === '#FFFFFF' ? '#000000' : color
    };
}

export function buildTextStyle(color) {
    return {
        color: color
    }
}
