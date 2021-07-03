import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const RecipeSteps = ({ result }) => {

    const steps = result.steps;
    
    const getKey = (num) => {
        return num.toString();
    }

    return(
        <View>
            <FlatList
                data = {steps}
                keyExtractor = {(steps) => getKey(steps.number)}
                renderItem = { ( {item} ) => {
                    return (
                        <View>
                        <Text style={styles.list}>{item.number}: {item.step} {"\n"}</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
};



const styles = StyleSheet.create({

    list: {
        marginHorizontal: 10,
    }

});

export default RecipeSteps;