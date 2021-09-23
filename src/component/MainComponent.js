import React, {Component} from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import CartComponent from './CartComponent';
import Carts from './Cart';
import { connect } from 'react-redux';
// import 
import { CLOTHES } from '../shared/data';

const mapStateToProps = state =>{
    return{
        clothes : state.clothes
    }
}

class Main extends Component{

    constructor(props){
        super(props);

    
    }

    render(){
        
        return(
            <React.Fragment>
                <CartComponent clothes={this.props.clothes} />
                <Carts />
            </React.Fragment>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));