import { StyleSheet } from 'react-native';


const marginBottomNo = 22.4;

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        flex: 1,
        backgroundColor: '#BDC3C7',
    },
    base: {
        flex: 1,
        backgroundColor: '#BDC3C7',
        paddingLeft: 14,
        paddingRight: 14,
    },
    content: {
        flex: 1,
        backgroundColor: '#ECF0F1',
        padding: 14,
        marginBottom: marginBottomNo,
    },
    h1: {
        color: '#212121',
        fontSize: 32,
        marginBottom: marginBottomNo,
        fontFamily: 'Lato-Black'
    },
    h2: {
        color: '#212121',
        fontSize: 22,
        marginBottom: marginBottomNo / 2,
        fontFamily: 'Lato-Bold'
    },
    p: {
        color: '#212121',
        fontSize: 16,
        lineHeight: 22.4,
        marginBottom: marginBottomNo,
        fontFamily: 'Lato-Regular'
    },
    fullwidthImg: {
        width: '100%',
        marginBottom: marginBottomNo,
    },
    item: {
        color: '#212121',
        fontSize: 16,
        height: 40,
        paddingTop: 10,
        fontFamily: 'Lato-Regular'
    },
    itemSeparator: { 
        height: 1,
        backgroundColor: "gray",
    },
});

export default styles;
