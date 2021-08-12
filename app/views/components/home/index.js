import React, { useRef, useState, useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';

import allData from 'data/data.js';
import allCategories from 'data/categories';

import { Card } from 'views/elements';
import SortBTSheet from './sortBTSheet';
import FilterizeBTSheet from './filterizeBTSheet';
import CategorizeBTSheet from './categorizeBTSheet';

import styles from 'views/styles/home';

function Home() {
    const sort = useRef();
    const filterize = useRef();
    const categorize = useRef();
    const [data, setData] = useState(allData);
    const [catTitle, setCatTitle] = useState();
    const [otherCat, setOtherCat] = useState(false);
    const [arrFilterize, setArrFilterize] = useState([]);
    const [catText, setCatText] = useState('به ترتیب ...');
    const [arrDataFilterize, setArrDataFilterize] = useState([]);
    const [catSelected, setCatSelected] = useState('همه دسته ها');

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
                    <TouchableOpacity style={[styles.categorize, { backgroundColor: arrDataFilterize.length > 0 ? 'green' : null }]} onPress={() => filterize.current.open()}>
                        {arrDataFilterize.length > 0 ? <Text style={styles.filterCount}>{arrDataFilterize.length}</Text> : null}
                        <Text style={[styles.catText, { color: arrDataFilterize.length > 0 ? 'white' : 'green' }]}>فیلترها</Text>
                        <FontAwesome5 style={[styles.catText, { color: arrDataFilterize.length > 0 ? 'white' : 'green' }]} name={'exchange-alt'} size={15} />
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
            <FilterizeBTSheet
                reff={filterize}
                arrFilterize={arrFilterize}
                setArrFilterize={setArrFilterize}
                filteringList={() => { setArrDataFilterize(arrFilterize); filterize.current.close(); }}
                cancel={() => { filterize.current.close(); setArrFilterize([]); setArrDataFilterize([]); }}
            />
            <CategorizeBTSheet
                reff={categorize}
                otherCat={otherCat}
                catTitle={catTitle}
                setCatTitle={setCatTitle}
                setOtherCat={setOtherCat}
                allCategories={allCategories}
                setCatSelected={setCatSelected}
                close={() => categorize.current.close()}
            />
            <SortBTSheet
                reff={sort}
                sortingList={sortingList}
                close={() => sort.current.close()}
            />
        </>
    )
}

export default Home;
