import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

function ItemBT({ item, title, onPress }) {
    return (
        item ?
            <TouchableOpacity style={styles.contItemImageBT} onPress={onPress}>
                <View style={styles.itemImageBT}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Text style={styles.itemImTxtBT}>{item.title}</Text>
                </View>
                {item.sub ? <Text style={styles.itemSubBT}>{`<`}</Text> : null}
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.itemBT} onPress={onPress}>
                <Text style={styles.itemTxtBT}>{title}</Text>
            </TouchableOpacity>
    )
}

export default ItemBT;

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    },
    itemBT: {
        paddingBottom: 15,
        borderBottomWidth: 0.2,
        borderBottomColor: '#BFBFBF',
    },
    itemImageBT: {
        paddingVertical: 5,
        alignItems: 'center',
        marginHorizontal: 10,
        flexDirection: 'row-reverse',
    },
    contItemImageBT: {
        alignItems: 'center',
        borderBottomWidth: 0.2,
        flexDirection: 'row-reverse',
        borderBottomColor: '#BFBFBF',
        justifyContent: 'space-between',
    },
    itemTxtBT: {
        fontSize: 13,
        marginTop: 10,
        color: '#6B6B6B',
        // color:'red',
        marginHorizontal: 15,
        fontFamily: 'IRANSans(FaNum)',
    },
    itemImTxtBT: {
        fontSize: 13,
        marginRight: 5,
        color: '#6B6B6B',
        // color:'red',
        fontFamily: 'IRANSans(FaNum)',
    },
    itemSubBT: {
        fontSize: 13,
        marginRight: 5,
        marginLeft: 15,
        color: '#6B6B6B',
        fontFamily: 'IRANSans(FaNum)',
    }
})