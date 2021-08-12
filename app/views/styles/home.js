import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sort: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        // fontSize: 11,
        // marginRight: 5,
        // color: '#6c6c6c',
        fontFamily: 'IRANSans(FaNum)',
        marginHorizontal: 15,
        // marginTop: 20
    },
    sortEl:{
        flexDirection: 'row',
        // justifyContent:'space-between',
        alignItems:'center',
    },
    sortText:{
        marginRight: 5,
        color:'#5e9c7f',
        fontFamily: 'IRANSans(FaNum)',
    },
    boldText:{
        fontWeight:'bold',
        fontFamily: 'IRANSans(FaNum)',
    },
    headBT:{
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 15,
        flexDirection: 'row-reverse',
        justifyContent:'space-between',
        alignItems:'center',
    },
    headTextBT:{
        // fontSize: 14,
        color:'#494949',
        fontWeight:'bold',
        fontFamily: 'IRANSans(FaNum)',
    },
    categorize:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0.2,
        borderRadius:5,
        borderColor:'green',
        paddingHorizontal: 4,
        marginRight: 5
        // width:100
    },
    categorizeBT:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        borderBottomWidth:0.2,
        borderBottomColor: '#BFBFBF',
        marginRight: 10,
        paddingVertical: 10
    },
    catText:{
        marginRight: 5,
        color:'#5e9c7f',
        fontSize:12,
        fontFamily: 'IRANSans(FaNum)',
    },
    catTextBT:{
        marginRight: 5,
        color:'#5e9c7f',
        // fontSize:12,
        fontFamily: 'IRANSans(FaNum)',
    },
    contCategorize:{
        marginVertical: 10,
        marginHorizontal: 10,
        flexDirection:'row-reverse',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    confirmBTN:{
        marginHorizontal:15,
        backgroundColor:'#ff00ad',
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 15,
        paddingVertical: 10
    },
    confirmTxt:{
        fontWeight: 'bold',
        color:'white',
        fontFamily: 'IRANSans(FaNum)',
    },
    contFilter:{
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    // filter: {
    //     flexDirection: 'row-reverse',
    //     // marginLeft: 20
        
    // },
    // filterTo: {
    //     borderWidth:0.2,
    //     borderRadius:5,
    //     borderColor:'green',
    //     paddingHorizontal: 4,
    //     marginRight: 5
    // }


    // conItemFBT:{
    //     marginTop: 5,
    //     borderBottomWidth: 0.3,
    //     borderBottomColor: '#BABABA',
    //     paddingVertical: 15,
    //     flexDirection:'row-reverse',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     marginHorizontal: 15
    // },
    // textItem:{
    //     color:'#686868',
    //     fontFamily: 'IRANSans(FaNum)',
    // }


    // image: {
    //     width: 50,
    //     height: 50,
    // },
    // itemBT: {
    //     paddingBottom: 15,
    //     borderBottomWidth: 0.2,
    //     borderBottomColor: '#BFBFBF',
    // },
    // itemImageBT: {
    //     paddingVertical: 5,
    //     alignItems: 'center',
    //     marginHorizontal: 10,
    //     flexDirection: 'row-reverse',
    // },
    // contItemImageBT: {
    //     alignItems: 'center',
    //     borderBottomWidth: 0.2,
    //     flexDirection: 'row-reverse',
    //     borderBottomColor: '#BFBFBF',
    //     justifyContent: 'space-between',
    // },
    // itemTxtBT: {
    //     fontSize: 13,
    //     marginTop: 10,
    //     color: '#6B6B6B',
    //     marginHorizontal: 15,
    //     fontFamily: 'IRANSans(FaNum)',
    // },
    // itemImTxtBT: {
    //     fontSize: 13,
    //     marginRight: 5,
    //     color: '#6B6B6B',
    //     fontFamily: 'IRANSans(FaNum)',
    // },
    // itemSubBT: {
    //     fontSize: 13,
    //     marginRight: 5,
    //     marginLeft: 15,
    //     color: '#6B6B6B',
    //     fontFamily: 'IRANSans(FaNum)',
    // }
})

export default styles;
