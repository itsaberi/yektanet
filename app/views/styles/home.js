import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sort: {
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 15,
        fontFamily: 'IRANSans(FaNum)',
        justifyContent: 'space-between',
    },
    sortEl: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    sortText: {
        marginRight: 5,
        color: '#5e9c7f',
        fontFamily: 'IRANSans(FaNum)',
    },
    boldText: {
        fontWeight: 'bold',
        fontFamily: 'IRANSans(FaNum)',
    },
    headBT: {
        marginTop: 10,
        marginBottom: 5,
        alignItems: 'center',
        marginHorizontal: 15,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },
    headTextBT: {
        color: '#494949',
        fontWeight: 'bold',
        fontFamily: 'IRANSans(FaNum)',
    },
    categorize: {
        marginRight: 5,
        borderRadius: 5,
        borderWidth: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'green',
        paddingHorizontal: 4,
        justifyContent: 'center',
    },
    categorizeBT: {
        marginRight: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        justifyContent: 'flex-end',
        borderBottomColor: '#BFBFBF',
    },
    catText: {
        fontSize: 12,
        marginRight: 5,
        color: '#5e9c7f',
        fontFamily: 'IRANSans(FaNum)',
    },
    catTextBT: {
        marginRight: 5,
        color: '#5e9c7f',
        fontFamily: 'IRANSans(FaNum)',
    },
    contCategorize: {
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
    },
    confirmBTN: {
        marginTop: 15,
        borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff00ad',
    },
    confirmTxt: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'IRANSans(FaNum)',
    },
    contFilter: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
    },
    filterCount:{
        width: 15, 
        height: 15, 
        fontSize: 11,
        color:'white',
        marginRight: 3,
        borderRadius: 7.5, 
        textAlign: 'center',
        backgroundColor: '#02BF58', 
        fontFamily: 'IRANSans(FaNum)',
    },
})

export default styles;
