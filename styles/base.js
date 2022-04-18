import * as vars from "./variables";

const base = {
    container: {
        paddingTop: 25,
        flex: 1,
        backgroundColor: vars.backgroundCol,
    },
    home: {
        flex: 1,
        backgroundColor: vars.backgroundCol,
        paddingLeft: 14,
        paddingRight: 14,
    },
    content: {
        flex: 1,
        backgroundColor: vars.contentBackgroundCol,
        padding: 14,
        marginBottom: vars.marginBottomNo,
    },
    fullwidthImg: {
        width: '100%',
        marginBottom: vars.marginBottomNo,
    },
    header: {
        backgroundColor: vars.backgroundCol,
    },
}

export default base;