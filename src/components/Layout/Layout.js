import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css"

import Aux from "../../hoc/Auxiliary";
const layout =(props)=>(
    <Aux>
        <div className={classes.Bg}>
        <Toolbar />
        <main className={classes.Content}>
        {props.children}
        </main>
        </div>
    

    </Aux>
);
export default layout;
    
    
