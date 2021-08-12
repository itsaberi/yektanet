import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import { ToggleItem } from 'views/elements';

import styles from 'views/styles/home';

function FilterizeBTSheet({ reff, arrFilterize, setArrFilterize, filteringList, close }) {
    return (
        <RBSheet
            ref={reff}
            height={420}
            duration={10}
            animationType="fade"
            closeOnPressMask={false}
            customStyles={{ container: { borderRadius: 10 } }}>
            <View>
                <View style={styles.headBT}>
                    <Text style={styles.headTextBT}>فیلترها</Text>
                    <TouchableOpacity onPress={close}>
                        <Text style={[styles.headTextBT, { color: 'green', fontSize: 12 }]}>حذف همه فیلترها</Text>
                    </TouchableOpacity>
                </View>
                <ToggleItem value='دارای کوپن' arrFilterize={arrFilterize} setArrFilterize={setArrFilterize} />
                <ToggleItem value='دارای تخفیف' arrFilterize={arrFilterize} setArrFilterize={setArrFilterize} />
                <ToggleItem value='اسنپ اکسپرس' arrFilterize={arrFilterize} setArrFilterize={setArrFilterize} />
                <ToggleItem value='ارسال رایگان' arrFilterize={arrFilterize} setArrFilterize={setArrFilterize} />
                <ToggleItem value='رستوران های به صرفه' arrFilterize={arrFilterize} setArrFilterize={setArrFilterize} />
                <TouchableOpacity style={styles.confirmBTN} onPress={filteringList}>
                    <Text style={styles.confirmTxt}>اعمال</Text>
                </TouchableOpacity>
            </View>
        </RBSheet>
    )
}

export default FilterizeBTSheet;
