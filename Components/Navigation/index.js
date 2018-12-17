import { createStackNavigator } from "react-navigation";

import HomePage from "../HomePage/index";
import CoffeeDetail from "../CoffeeDetail/index";
import CoffeeCart from "../CoffeeCart/index";
import CoffeeList from "../CoffeeList/index";
import Login from "../Login/index";

const MyStack = createStackNavigator(
  {
    DetailScreen: CoffeeDetail,
    ListScreen: CoffeeList,
    CartScreen: CoffeeCart,
    LoginScreen: Login
  },
  {
    initialRouteName: "LoginScreen",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default MyStack;
