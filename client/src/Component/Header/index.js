import React, { Component } from 'react'
import styled from 'styled-components';
// import NavLink from 'react-router-dom';
import { Link } from 'react-router-dom'

const Header = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding:0px 30px;
    box-sizing: border-box;
    .logo{
        font-size: 30px;
    }
    .nav{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        a{
            margin-right: 20px;
            -webkit-text-decoration: none;
            text-decoration: none;
            font-size: 17px;
            font-weight: 600;
            text-transform: capitalize;
            color: #000;
            &:hover{
                color: red;
            }
        }
    }
`;




class index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    componentDidMount() {
        console.log("DID")
    }

    logOut = () => {
        localStorage.clear();
    }


    render() {
        // const {user} = this.props
        const user = localStorage.getItem("token");


        return (
            <div>
                <Header>
                    <div className="logo">Logo</div>
                    <ul className="nav">
                        <Link to="/">Home</Link>
                        <Link>About</Link>
                        <Link to="/post">Post</Link>
                        <Link to="/admin">Admin</Link>
                        {!user && <Link to="/login">Login</Link>}
                        {user && <Link onClick={this.logOut}>LogOut</Link>}
                    </ul>
                </Header>
            </div>
        )
    }
}


export default index