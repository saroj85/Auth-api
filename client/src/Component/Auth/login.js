import React, { Component } from 'react'
import Jwt from 'jwt-decode';
import { Redirect } from 'react-router-dom'
import { withRouter } from "react-router";
import {connect} from 'react-redux';
import {loginRequest, signUpRequest} from '../../action/authAction';




const LoginWrapper = {
    width: '400px',
    padding: ' 20px 10px',
    boxSizing: "border-box",
    border: '1px solid #ccc',
    boxShadow: '2px 1px 3px #ccc',
    borderRadius: '3px',
    margin: 'auto'
};

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

const loginBtn = {
    padding: '10px 20px',
    margin: 'auto',
    fontSize: '17px',
    textAlign: 'center'
}



const divStyle = {
    margin: '40px',
    border: '5px solid pink'
};

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            tab: 'login',
            fullName: '',
            newEmail: '',
            newPassword: '',
            profilePic: '',
            dob: '',
            redirect: false
        }
    }


    inputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => console.log(this.state))
    }




    // login click 

    onSubmit = () => {
       this.props.loginRequest(this.state.email, this.state.password)
    }


    
    //   signUp click 

    signUp = () => {
        let data = {
            firstName: this.state.fullName,
            middleName: "",
            lastName: "yadav",
            email: this.state.newEmail,
            password: this.state.newPassword,
            profilePic: this.state.profilePic,
            dob: this.state.dob,
        }
        this.props.signUpRequest(data)
    }

    componentDidMount() {
        const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
        const jwtData = localStorage.getItem("token") ? Jwt(token) : null
        console.log("jwt", jwtData)
        this.setState({
            user: jwtData && jwtData.emailExist
        })
    }


    render() {
        console.log("PROPS", this.props)
        if (localStorage.getItem("token")) {
            return (
                <div>
                    <h1>Welcome {this.state.user && this.state.user.firstName} </h1>
                    {/* <img src={this.state.user && this.state.user.profilePic} /> */}
                    <button onClick={() => {
                        localStorage.clear();
                        this.setState({
                            isLogin: false
                        })
                    }}>LogOut</button>
                </div>

            )
        }

        return (
            <div>
                <div style={LoginWrapper}>
                    <h1>{this.state.tab ? this.state.tab : '0'}</h1>
                    {this.state.tab === "login" &&

                        <div>
                            <div style={{ textAlign: 'left' }}>
                                <label style={{ fontSize: '20px', textAlign: 'left', marginBottom: '7px', display: 'block', fontWeight: '300' }}>Email</label>
                                <input style={inputStyle} type="text" name="email" value={this.state.email} onChange={this.inputChange} />
                            </div>
                            <br></br>
                            <div style={{ textAlign: 'left' }}>
                                <label style={{ fontSize: '20px', textAlign: 'left', marginBottom: '7px', display: 'block', fontWeight: '300' }}>Password</label>
                                <input style={inputStyle} type="text" name="password" value={this.state.password} onChange={this.inputChange} />
                            </div>
                            <br></br>

                            <div style={{ textAlign: 'center' }}>
                                <button style={loginBtn} onClick={this.onSubmit}>Login</button>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <p>you don't have a account please <button onClick={() => {
                                    this.setState({
                                        tab: "signUp"
                                    })
                                }}>register</button></p>
                            </div>
                        </div>}

                    {this.state.tab === "signUp" &&
                        <div>
                            <div style={{ textAlign: 'left' }}>
                                <label style={{ fontSize: '20px', textAlign: 'left', marginBottom: '7px', display: 'block', fontWeight: '300' }}>Full Name</label>
                                <input style={inputStyle} type="text" name="fullName" value={this.state.fullName} onChange={this.inputChange} />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <label style={{ fontSize: '20px', textAlign: 'left', marginBottom: '7px', display: 'block', fontWeight: '300' }}>profilePic</label>
                                <input style={inputStyle} type="file" name="profilePic" value={this.state.profilePic} onChange={this.inputChange} />
                            </div>

                            <div style={{ textAlign: 'left' }}>
                                <label style={{ fontSize: '20px', textAlign: 'left', marginBottom: '7px', display: 'block', fontWeight: '300' }}>Email</label>
                                <input style={inputStyle} type="text" name="newEmail" value={this.state.newEmail} onChange={this.inputChange} />
                            </div>
                            <br></br>
                            <div style={{ textAlign: 'left' }}>
                                <label style={{ fontSize: '20px', textAlign: 'left', marginBottom: '7px', display: 'block', fontWeight: '300' }}>Password</label>
                                <input style={inputStyle} type="text" name="newPassword" value={this.state.newPassword} onChange={this.inputChange} />
                            </div>
                            <br></br>
                            <div style={{ textAlign: 'left' }}>
                                <label style={{ fontSize: '20px', textAlign: 'left', marginBottom: '7px', display: 'block', fontWeight: '300' }}>Date of birth</label>
                                <input style={inputStyle} type="date" name="dob" value={this.state.dob} onChange={this.inputChange} />
                            </div>
                            <br></br>

                            <div style={{ textAlign: 'center' }}>
                                <button style={loginBtn} onClick={this.signUp}>signUp</button>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <p> already you have account please <button onClick={() => {
                                    this.setState({
                                        tab: "login"
                                    })
                                }}>login</button></p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user : state.auth.user,
    token : state.auth.token
})
export default withRouter(connect(mapStateToProps, {loginRequest, signUpRequest})(login))