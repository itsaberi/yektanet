import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Card({ item }) {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View>
                    <Image source={{ uri: item.backgroundImage }} style={styles.image} />
                    {item.discountValueForView != 0 ? <Text style={styles.discount}>{`% ${item.discountValueForView}`}</Text> : null}
                </View>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.lightText}>{item.description}</Text>
                    <Text style={styles.lightText}>{item.address.split('،')[0]}</Text>
                </View>
            </View>
            <View style={styles.contBottom}>
                <View style={styles.contDelivery}>
                    <Text style={styles.delivery}>{`${item.delivery_fee} تومان`}</Text>
                    <FontAwesome5 style={styles.delivery} name={'motorcycle'} size={15} />
                </View>
                <Text style={styles.rate}>{item.rating.toFixed(1)}</Text>
            </View>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    delivery: {
        fontSize: 11,
        marginRight: 5,
        color: '#6c6c6c',
        fontFamily: 'IRANSans(FaNum)',
    },
    rate: {
        width: 35,
        fontSize: 12,
        color: 'white',
        borderRadius: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 4,
        backgroundColor: '#1ead00',
        fontFamily: 'IRANSans(FaNum)',
    },
    contDelivery: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    contBottom: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },
    lightText: {
        fontSize: 10,
        marginRight: 10,
        color: '#bebebe',
        fontFamily: 'IRANSans(FaNum)',
    },
    discount: {
        top: 3,
        right: -3,
        fontSize: 10,
        color: 'white',
        borderRadius: 5,
        paddingHorizontal: 5,
        position: 'absolute',
        backgroundColor: '#ff00ad',
        fontFamily: 'IRANSans(FaNum)',
    },
    container: {
        paddingVertical: 10,
        marginHorizontal: 15,
        borderColor: '#d0d0d0',
        borderBottomWidth: 0.2,
    },
    head: {
        marginBottom: 10,
        flexDirection: 'row-reverse',
    },
    title: {
        marginRight: 10,
        color: '#404040',
        fontWeight: 'bold',
        fontFamily: 'IRANSans(FaNum)',
    },
    image: {
        width: 90,
        height: 80,
        borderRadius: 5,
    }
})