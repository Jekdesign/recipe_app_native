import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Ingredients from "./src/Screens/Ingredients";
import Recipe from "./src/Screens/RecipeBoard";

const Nav = createStackNavigator(
  {
    Ingredients: {
      screen: Ingredients,
      navigationOptions: {
        title: "RECIPES LIST",
        headerLeft: () => null,
      },
    },
    Recipe: { screen: Recipe, navigationOptions: { title: "Recipe" } },
  },

);


export default createAppContainer(Nav);
