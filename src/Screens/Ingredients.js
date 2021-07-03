import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import RecipesList from "../Components/RecipesList";
import RecipesData from "../API/Recipes"

const Ingredients = ({ navigation }) => {
  // const [name, setName] = useState("");
  // const [searchApi, results, errorMessage] = useResults();

  let recipes = RecipesData;

  recipes = recipes.sort(() => Math.random());

  return (
    <View style={styles.ing}>
      <View style={{ flex: 1 }}>
        <RecipesList datas={recipes} navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ing: {
    flex: 1
  }
});

export default Ingredients;
