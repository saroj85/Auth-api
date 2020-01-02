import React, { Component } from 'react';
import {userDataRequest} from '../action/authAction';
import { connect } from 'react-redux';


class index extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div >
                <h1>Welcome to Home Page</h1>
                
            </div>
        )
    }
}

export default connect(null, userDataRequest)(index);
