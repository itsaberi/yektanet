import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { ItemBT } from 'views/elements';

import styles from 'views/styles/home';

function CategorizeBTSheet({ reff, otherCat, catTitle, allCategories, setCatTitle, setOtherCat, close, setCatSelected }) {
    return (
        <RBSheet
            ref={reff}
            height={460}
            duration={10}
            animationType="fade"
            closeOnPressMask={false}
            customStyles={{ container: { borderRadius: 10 } }}>
            {
                otherCat ?
                    <View>
                        <View style={styles.headBT}>
                            <TouchableOpacity onPress={() => setOtherCat(false)}>
                                <Text style={styles.headTextBT}>{` <   بازگشت`}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={close}>
                                <FontAwesome5 style={styles.headTextBT} name={'times-circle'} size={23} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.categorizeBT}>
                            <Text style={styles.catTextBT}>{`همه ${catTitle} ها`}</Text>
                            <FontAwesome5 style={styles.catTextBT} name={'th-large'} size={15} />
                        </View>
                        {otherCat.map((item, index) => <ItemBT key={index} item={item} onPress={() => { setCatSelected(item.title); }} />)}
                    </View>
                    :
                    <View>
                        <View style={styles.headBT}>
                            <Text style={styles.headTextBT}>انتخاب دسته بندی</Text>
                            <TouchableOpacity onPress={close}>
                                <FontAwesome5 style={styles.headTextBT} name={'times-circle'} size={23} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.categorizeBT} onPress={() => { setCatSelected('همه دسته ها'); close }}>
                            <Text style={styles.catTextBT}>همه دسته ها</Text>
                            <FontAwesome5 style={styles.catTextBT} name={'th-large'} size={15} />
                        </TouchableOpacity>
                        {allCategories.map((item, index) => {
                            return (
                                <ItemBT
                                    key={index}
                                    item={item}
                                    onPress={() => {
                                        if (item.sub) { setOtherCat(item.sub); setCatTitle(item.title); }
                                        else setCatSelected(item.title);
                                    }}
                                />
                            )
                        })}
                    </View>
            }
        </RBSheet>
    )
}

export default CategorizeBTSheet;
