import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { ItemBT } from 'views/elements';

import styles from 'views/styles/home';

function SortBTSheet({ reff, sortingList, close }) {
    return (
        <RBSheet
            ref={reff}
            height={320}
            duration={10}
            animationType="fade"
            closeOnPressMask={false}
            customStyles={{ container: { borderRadius: 10 } }}>
            <View>
                <View style={styles.headBT}>
                    <Text style={styles.headTextBT}>به ترتیب ...</Text>
                    <TouchableOpacity onPress={close}>
                        <FontAwesome5 style={styles.headTextBT} name={'times-circle'} size={23} />
                    </TouchableOpacity>
                </View>
                <ItemBT title='نام رستوران' onPress={() => sortingList('name')} />
                <ItemBT title='بالاترین امتیاز' onPress={() => sortingList('rate')} />
                <ItemBT title='نزدیک ترین' onPress={() => sortingList('')} />
                <ItemBT title='ارزان ترین' onPress={() => sortingList('')} />
                <ItemBT title='عملکرد کلی' onPress={() => sortingList('')} />
            </View>
        </RBSheet>
    )
}

export default SortBTSheet;
