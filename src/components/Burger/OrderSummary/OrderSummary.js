import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../Ui/Button/Button";
const orderSummary=(props)=>{
    const ingredientSummary = Object.keys(props.ingredients).map(
        igkey=>{
            return(
                <li key={igkey}>
                    <span style={{textTransform :"capitalize" }}>{igkey}</span>
                     : {props.ingredients[igkey]}
                </li>);
        }
    )
    
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A Delecious Borger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button 
            btnType="Success"
            clicked={props.purchaseContinued}>CONTINUE</Button>
            <Button 
            btnType="Danger"
            clicked={props.purchaseCancelled}>CANCEL</Button>
        </Aux>

    )
}
    

export default orderSummary;