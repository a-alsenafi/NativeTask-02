import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Button, Icon } from "native-base";

// Store
import CoffeeStore from "../../store/coffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Coffee List",
      headerLeft: null,
      headerRight: (
        <Icon name="cart" onPress={() => navigation.navigate("CartScreen")} />
      )
    };
  };
  render() {
    const coffeeshops = CoffeeStore.coffeeshops;
    let ListItems;
    if (coffeeshops) {
      ListItems = coffeeshops.map(coffeeShop => (
        <CoffeeItem
          coffeeShop={coffeeShop}
          key={coffeeShop.id}
          navigation={this.props.navigation}
        />
      ));
    }
    return (
      <Content>
        <List>{ListItems}</List>
      </Content>
    );
  }
}

export default observer(CoffeeList);
