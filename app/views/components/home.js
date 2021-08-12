import React, { useRef, useState, useCallback, useEffect } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Card, ItemBT, ToggleItem } from '../elements';
import RBSheet from 'react-native-raw-bottom-sheet';

import allData from '../../data/data';
import allCategories from '../../data/categories';

import styles from '../styles/home';

function Home() {
    const sort = useRef();
    const filterize = useRef();
    const categorize = useRef();
    const [, updateState] = useState();
    const [data, setData] = useState(allData);
    const [catTitle, setCatTitle] = useState();
    const [otherCat, setOtherCat] = useState(false);
    const [arrFilterize, setArrFilterize] = useState([]);
    const [catText, setCatText] = useState('به ترتیب ...');
    const [arrDataFilterize, setArrDataFilterize] = useState([]);
    const [catSelected, setCatSelected] = useState('همه دسته ها');
    const forceUpdate = useCallback(() => { updateState({}); sort.current.close(); categorize.current.close(); }, []);

    const sortingList = (sort) => {
        switch (sort) {
            case 'name':
                let dataNameSorted = data.sort((a, b) => {
                    if (a.title < b.title) return -1;
                    if (a.title > b.title) return 1;
                    return 0;
                })
                setData(dataNameSorted);
                setCatText('نام رستوران');
                break;
            case 'rate':
                let dataRateSorted = data.sort((a, b) => b.rating - a.rating)
                setData(dataRateSorted);
                setCatText('بالاترین امتیاز');
                break;
        }
        forceUpdate();
    }

    const filteringList = () => {
        let newDataFiltered = allData;
        if (catSelected != 'همه دسته ها') {
            newDataFiltered = newDataFiltered.filter((item) => {
                let arrDesc = item.description.split(',');
                return arrDesc.includes(catSelected);
            });
        }
        for (const item of arrFilterize) {
            if (item == "دارای کوپن") {
                newDataFiltered = newDataFiltered.filter((item) => {
                    return item.has_coupon;
                });
            }
            if (item == "دارای تخفیف") {
                newDataFiltered = newDataFiltered.filter((item) => {
                    return item.discountValueForView > 0;
                });
            }
            if (item == "اسنپ اکسپرس") {
                newDataFiltered = newDataFiltered.filter((item) => {
                    return item.is_express;
                });
            }
            if (item == "ارسال رایگان") {
                newDataFiltered = newDataFiltered.filter((item) => {
                    return item.delivery_fee <= 0;
                });
            }
            if (item == "رستوران های به صرفه") {
                newDataFiltered = newDataFiltered.filter((item) => {
                    return item.is_economical;
                });
            }
            setData(newDataFiltered);
        }
        switch (catText) {
            case 'نام رستوران':
                sortingList('name');
                break;
            case 'بالاترین امتیاز':
                sortingList('rate');
                break;
        }
        setData(newDataFiltered);
        setArrDataFilterize(arrFilterize);
        forceUpdate();
        filterize.current.close();
    }

    useEffect(() => {
        filteringList();
    }, [catSelected, arrDataFilterize])

    return (
        <>
            <View style={styles.contFilter}>
                <View style={styles.contCategorize}>
                    {
                        catSelected == 'همه دسته ها' ?
                            <TouchableOpacity style={styles.categorize} onPress={() => categorize.current.open()}>
                                <Text style={styles.catText}>{catSelected}</Text>
                                <FontAwesome5 style={styles.catText} name={'th-large'} size={15} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={[styles.categorize, { backgroundColor: 'green' }]} onPress={() => categorize.current.open()}>
                                <TouchableOpacity onPress={() => setCatSelected('همه دسته ها')}>
                                    <FontAwesome5 style={[styles.catText, { fontSize: 17, color: 'white' }]} name={'times-circle'} />
                                </TouchableOpacity>
                                <Text style={[styles.catText, { color: 'white' }]}>{catSelected}</Text>
                                <FontAwesome5 style={[styles.catText, { color: 'white' }]} name={'th-large'} size={15} />
                            </TouchableOpacity>
                    }
                </View>
                <View style={styles.filter}>
                    <TouchableOpacity style={styles.categorize} onPress={() => filterize.current.open()}>
                        <Text style={styles.catText}>فیلترها</Text>
                        <FontAwesome5 style={styles.catText} name={'exchange-alt'} size={15} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    inverted
                    horizontal
                    data={arrDataFilterize}
                    keyExtractor={item => item}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={[styles.categorize, { backgroundColor: 'green' }]} onPress={() => filterize.current.open()}>
                                <TouchableOpacity onPress={() => {
                                    let list = [...arrFilterize]; list.splice(list.indexOf(item), 1);
                                    setArrFilterize([...list]);
                                    setArrDataFilterize([...list]);
                                }}>
                                    <FontAwesome5 style={[styles.catText, { fontSize: 17, color: 'white' }]} name={'times-circle'} />
                                </TouchableOpacity>
                                <Text style={[styles.catText, { color: 'white' }]}>{item}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
            <View style={styles.sort}>
                <TouchableOpacity style={styles.sortEl} onPress={() => sort.current.open()}>
                    <Text style={styles.sortText}>{catText}</Text>
                    <FontAwesome5 style={styles.sortText} name={'sort-amount-up-alt'} size={15} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sort.current.open()}>
                    <Text style={styles.boldText}>{`${data.length} رستوران باز`}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                style={{ marginBottom: 80 }}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Card item={item} />}
            />
            <RBSheet
                ref={filterize}
                height={420}
                duration={10}
                animationType="fade"
                closeOnPressMask={false}
                customStyles={{ container: { borderRadius: 10 } }}>
                <View>
                    <View style={styles.headBT}>
                        <Text style={styles.headTextBT}>فیلترها</Text>
                        <TouchableOpacity onPress={() => { filterize.current.close(); setArrFilterize([]); setArrDataFilterize([]); }}>
                            <Text style={[styles.headTextBT, { color: 'green', fontSize: 12 }]}>حذف همه فیلترها</Text>
                        </TouchableOpacity>
                    </View>
                    <ToggleItem value='دارای کوپن' arrFilterize={arrFilterize} setArrFilterize={setArrFilterize} />
                    <ToggleItem value='دارای تخفیف' arrFilterize={arrFilterize} setArrFilterize={setArrFilterize} />
                    <ToggleItem value='اسنپ اکسپرس' arrFilterize={arrFilterize} setArrFilterize={setArrFilterize} />
                    <ToggleItem value='ارسال رایگان' arrFilterize={arrFilterize} setArrFilterize={setArrFilterize} />
                    <ToggleItem value='رستوران های به صرفه' arrFilterize={arrFilterize} setArrFilterize={setArrFilterize} />
                    <TouchableOpacity style={styles.confirmBTN} onPress={() => filteringList()}>
                        <Text style={styles.confirmTxt}>اعمال</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
            <RBSheet
                height={460}
                duration={10}
                ref={categorize}
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
                                <TouchableOpacity onPress={() => categorize.current.close()}>
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
                                <TouchableOpacity onPress={() => categorize.current.close()}>
                                    <FontAwesome5 style={styles.headTextBT} name={'times-circle'} size={23} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.categorizeBT} onPress={() => { setCatSelected('همه دسته ها'); categorize.current.close() }}>
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
            <RBSheet
                ref={sort}
                height={320}
                duration={10}
                animationType="fade"
                closeOnPressMask={false}
                customStyles={{ container: { borderRadius: 10 } }}>
                <View>
                    <View style={styles.headBT}>
                        <Text style={styles.headTextBT}>به ترتیب ...</Text>
                        <TouchableOpacity onPress={() => sort.current.close()}>
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
        </>
    )
}

export default Home;
