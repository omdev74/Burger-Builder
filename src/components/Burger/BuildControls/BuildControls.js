import React from "react"
import classes from "./buildControls.module.css"
import BuildControl from "./BuildControl/BuildControl"

const controls = [
    {label:"Salad",type:"salad"},
    {label:"Cheese",type:"cheese"},
    {label:"Meat",type:"meat"},
    {label:"Bacon",type:"bacon"},
];
const buildControls =(props)=>(
    <div className={classes.BuildControls}>
    <p>Current Price:<strong> Rs. {props.price}</strong></p>
    {controls.map(ctrl =>( 
    <BuildControl 
    key={ctrl.label} 
    label={ctrl.label}
    added={()=>props.ingredientAdded(ctrl.type)}
    removed={()=>props.ingredientRemoved(ctrl.type)}
    disabled={props.disabled[ctrl.type]}/>
    ))}
    <button 
    className={classes.OrderButton} 
    onClick={props.ordered}
    type="button" 
    disabled={!props.purchasable}>ORDER NOW</button>
    </div>)
export default buildControls;