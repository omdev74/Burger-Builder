import React,{Component} from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Auxiliary";
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
            <div>Build Controls</div>
        </Aux>);
    }
}
export default BurgerBuilder;