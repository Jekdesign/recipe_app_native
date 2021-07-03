import React, { useState } from 'react';
import { View, StyleSheet, FlatList,TouchableOpacity } from 'react-native';

import FoodCard from './FoodCard';

const RecipesList = ({ datas, navigation }) => { console.log(navigation);
    return (
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={datas}
                keyExtractor={(datas) => datas.title}
                renderItem={( {item} ) => {
                    return (
                        <TouchableOpacity onPress={ () => navigation.navigate('Recipe', { item: item})} >
                            <FoodCard result={item} />
                        </TouchableOpacity>
                    )
                }}
                navigation={navigation}
            />
        </View>
    );
};


export default RecipesList;