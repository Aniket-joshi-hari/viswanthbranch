import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({

});

class Orders extends Component {
    render(){
        const { classes } = this.props;
        return(
            <div>
                <h1>My Orders</h1>
            </div>
        );
    }
}

export default withStyles(styles)(Orders);