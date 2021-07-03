import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Spoonacular from "../API/Spoonacular";
import RecipeSteps from "../Components/RecipeSteps";

const RecipeBoard = ({ navigation }) => {
  console.disableYellowBox = true;

  const [results, setResults] = useState([]);

  const recipeItem = navigation.getParam("item");
  const recipeID = recipeItem.id;

  console.log(recipeItem);
  console.log("Recipe name is ======== " + recipeItem.title);

  const getDetails = async (recipeID) => {
    const response = await Spoonacular.get(
      `/${recipeID}/analyzedInstructions`,
      {
        params: {
          apiKey: "f3d341852e08482fa72cf95c4f329005",
          id: recipeID,
          stepBreakdown: true,
        },
      }
    );
    setResults(response.data);
  };
  useEffect(() => {
    getDetails(recipeID);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Image style={styles.imageStyle} source={{ uri: recipeItem.image }} />
        <Text style={styles.headingStyle}>Recipe: {recipeItem.title}</Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginHorizontal: 15,
            marginBottom: 10,
          }}
        />
        <FlatList
          keyExtractor={(result) => result.id}
          data={results}
          renderItem={({ item }) => {
            return <RecipeSteps result={item} />;
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 350,
    alignSelf: "center",
    height: 300,
  },

  headingStyle: {
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 24,
  },
});

export default RecipeBoard;
