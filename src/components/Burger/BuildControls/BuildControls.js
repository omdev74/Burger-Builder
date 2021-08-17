import React from "react"
import classes from "./buildControls.module.css"
import BuildControl from "./BuildControl/BuildControl"

const controls = [
    {label:"salad",type:"salad"},
    {label:"cheese",type:"cheese"},
    {label:"meat",type:"meat"},
    {label:"bacon",type:"bacon"},
];
const buildControls =(props)=>(<div className={classes.BuildControls}>
    {controls.map(ctrl =>( 
    <BuildControl key={ctrl.label} label={ctrl.label}/>
    ))}
    </div>)
export default buildControls;