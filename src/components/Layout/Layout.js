import React from "react";

import classes from "./Layout.module.css"

import Aux from "../../hoc/Auxiliary";
const layout =(props)=>(
    <Aux>
        <div className={classes.Bg}>
        <div>Toolbar,SideDrawer,Backdrop</div>
        <main className={classes.Content}>
        {props.children}
        </main>
        </div>
    

    </Aux>
);
export default layout;
    
    
