import React,{Component} from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Aux from "../../hoc/Auxiliary";


class Layout extends Component{

    state={
        showSideDrawer:true
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    }
    render(){
        return(
        <Aux>
            <div className={classes.Bg}>
            <Toolbar />
            <SideDrawer 
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
            {this.props.children}
            </main>
            </div>
        </Aux>);
    }
}

export default Layout;
    
    
