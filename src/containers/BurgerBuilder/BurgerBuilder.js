import React,{Component} from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Auxiliary";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES={
            cheese:20,
            meat:40,
            salad:20,
            bacon:15
}

class BurgerBuilder extends Component{
    state={
        ingredients:{
            cheese:0,
            meat:0,
            salad:0,
            bacon:0
        },
        totalPrice:4
    }
    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;
        const priceAddition = INGREDIENT_PRICES;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({ingredients:updatedIngredients,totalPrice:newPrice});
    }
    render(){
        return(
        <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls
            ingredientAdded={this.addIngredientHandler}/>
        </Aux>);
    }
}
export default BurgerBuilder;