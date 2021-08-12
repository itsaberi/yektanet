import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import { Text, View, StyleSheet } from 'react-native';

function ToggleItem({ value, arrFilterize, setArrFilterize }) {
    return (
        <View style={styles.conItemFBT}>
            <Text style={styles.textItem}>{value}</Text>
            <ToggleSwitch isOn={arrFilterize.includes(value)} onToggle={() => {
                let res = new Promise((resolve) => {
                    if (arrFilterize.includes(value)) resolve(true)
                    else resolve(false)
                })
                res.then((e) => {
                    if (e) {
                        let list = [...arrFilterize];
                        list.splice(list.indexOf(value), 1);
                        setArrFilterize([...list]);
                    } else {
                        setArrFilterize([...arrFilterize, value]);
                    }
                })
            }} onColor="green" offColor="gray" />
        </View>
    )
}

export default ToggleItem;

const styles = StyleSheet.create({
    conItemFBT: {
        marginTop: 5,
        paddingVertical: 15,
        alignItems: 'center',
        marginHorizontal: 15,
        borderBottomWidth: 0.3,
        flexDirection: 'row-reverse',
        borderBottomColor: '#BABABA',
        justifyContent: 'space-between',
    },
    textItem: {
        color: '#686868',
        fontFamily: 'IRANSans(FaNum)',
    }
})