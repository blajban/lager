import * as vars from "./variables";

const typography = {
    h1: {
        color: vars.fontColor,
        fontSize: 32,
        marginBottom: vars.marginBottomNo,
        fontFamily: vars.fontStack.black
    },
    h2: {
        color: vars.fontColor,
        fontSize: 22,
        marginBottom: vars.marginBottomNo / 2,
        fontFamily: vars.fontStack.bold
    },
    h3: {
        color: vars.fontColor,
        fontSize: vars.standardFontSize,
        marginTop: 20,
        marginBottom: vars.marginBottomNo / 2,
        fontFamily: vars.fontStack.bold
    },
    p: {
        color: vars.fontColor,
        fontSize: vars.standardFontSize,
        lineHeight: vars.standardLineHeight,
        marginBottom: vars.marginBottomNo,
        fontFamily: vars.fontStack.regular
    },
    label: {
        color: vars.fontColor,
        fontSize: vars.standardFontSize,
        lineHeight: vars.standardLineHeight,
        fontFamily: vars.fontStack.bold
    },
    address: {
        color: vars.fontColor,
        fontSize: vars.standardFontSize,
        lineHeight: vars.standardLineHeight,
        fontFamily: vars.fontStack.regular
    }
}

export default typography;