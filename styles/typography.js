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
        fontSize: 16,
        marginTop: 20,
        marginBottom: vars.marginBottomNo / 2,
        fontFamily: vars.fontStack.bold
    },
    p: {
        color: vars.fontColor,
        fontSize: 16,
        lineHeight: 22.4,
        marginBottom: vars.marginBottomNo,
        fontFamily: vars.fontStack.regular
    },
    address: {
        color: vars.fontColor,
        fontSize: 16,
        lineHeight: 22.4,
        fontFamily: vars.fontStack.regular
    }
}

export default typography;