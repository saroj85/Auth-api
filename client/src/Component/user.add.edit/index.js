import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signUpRequest, getAllUserList } from '../../action/authAction';
import swal from 'sweetalert';


const inputStyle = {
    width: '100%',
    height: '40px',
    lineHeight: '40px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    padding: '5px',
    fontSize: '18px',
    fontWeight: '600',
    boxSizing: 'border-box'
}

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            profilePic: "",
            email: "",
            password: "",
            dob: "",
            admin: false
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    // create new user 

    signUp = () => {

        let data = {
            firstName: this.state.fullName,
            middleName: "",
            lastName: "yadav",
            email: this.state.email,
            password: this.state.password,
            profilePic: this.state.profilePic,
            dob: this.state.dob,
        }
        this.props.signUpRequest(data);

        this.setState({
            fullName: "",
            profilePic: "",
            email: "",
            password: "",
            dob: "",
        })
        this.props.getAllUserList()
        swal("User Register SuccessFull");
        this.props.popUpClose();
        



    }



    render() {
        return (
            <div style={{ padding: '10px' }}>
                <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '20px', textAlign: 'left', marginBottom: '7px', display: 'block', fontWeight: '300' }}>Full Name</label>
                    <input style={inputStyle} type="text" name="fullName" value={this.state.fullName} onChange={this.onChange} />
                </div>
                <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '20px', textAlign: 'left', marginBottom: '7px', display: 'block', fontWeight: '300' }}>profilePic</label>
                    <input style={inputStyle} type="file" name="profilePic" value={this.state.profilePic} onChange={this.onChange} />
                </div>

                <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '20px', textAlign: 'left', marginBottom: '7px', display: 'block', fontWeight: '300' }}>Email</label>
                    <input style={inputStyle} type="text" name="email" value={this.state.email} onChange={this.onChange} />
                </div>
                <br></br>
                <div style={{ textAlign: 'left' }}>

                    <input type="checkbox" name="dob" value={this.state.dob} onChange={this.onChange} />
                </div>

                <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '20px', textAlign: 'left', marginBottom: '7px', display: 'block', fontWeight: '300' }}>Password</label>
                    <input style={inputStyle} type="text" name="password" value={this.state.password} onChange={this.onChange} />
                </div>
                <br></br>
                <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '20px', textAlign: 'left', marginBottom: '7px', display: 'block', fontWeight: '300' }}>Date of birth</label>
                    <input style={inputStyle} type="date" name="dob" value={this.state.dob} onChange={this.onChange} />
                </div>
                <br></br>
                <br></br>

                <br></br>

                <div style={{ textAlign: 'center' }}>
                    <button onClick={this.signUp}>signUp</button>
                </div>
            </div>
        )
    }
}


export default connect(null, { signUpRequest, getAllUserList })(index)