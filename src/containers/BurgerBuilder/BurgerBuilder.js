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
        totalPrice:40
    }
    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({ingredients:updatedIngredients,totalPrice:newPrice});
    }

    removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount -1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice-priceDeduction;
        this.setState({ingredients:updatedIngredients,totalPrice:newPrice});
    }
    render(){
        const disabledinfo={
            ...this.state.ingredients
        }
        for (let key in disabledinfo) {
            disabledinfo[key]=disabledinfo[key]<=0
        }
        //{salad:true,meat:false,,}
        return(
        <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledinfo}
            price={this.state.totalPrice}
            />
        </Aux>);
    }
}
export default BurgerBuilder;