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
    conItemFBT:{
        marginTop: 5,
        borderBottomWidth: 0.3,
        borderBottomColor: '#BABABA',
        paddingVertical: 15,
        flexDirection:'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    textItem:{
        color:'#686868',
        fontFamily: 'IRANSans(FaNum)',
    }
})