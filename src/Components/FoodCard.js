import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const FoodCard = ({ result }) => {

    return (
        <View style={styles.card}>
            <Image style={styles.img} source={{ uri: result.image }} />
            <Text style={styles.title}>{result.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    marginVertical: 10,
    marginHorizontal: 10,
    width: 300,
    height: 300  },

  title: {
    marginVertical: 20,
    marginHorizontal: 20,
    fontSize: 20,
  },

  img: {
    width: 300,
    alignSelf: "center",
    height: 200,
  },
});

export default FoodCard;