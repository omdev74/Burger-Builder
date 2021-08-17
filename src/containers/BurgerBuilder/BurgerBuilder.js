import React,{Component} from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Auxiliary";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
class BurgerBuilder extends Component{
    state={
        ingredients:{
            cheese:2,
            meat:2,
            salad:1,
            bacon:1
        }
    }
    render(){
        return(
        <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls/>
        </Aux>);
    }
}
export default BurgerBuilder;