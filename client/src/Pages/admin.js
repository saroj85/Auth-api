import React, { Component } from 'react'
import { connect } from 'react-redux';
import { newPosts } from '../action/postAction';
import styled from 'styled-components';
import PopUp from '../Component/shared/popUp';
import swal from 'sweetalert';
import UserAddEdit from '../Component/user.add.edit';
import { loginRequest, signUpRequest, getAllUserList, deletUserById } from '../action/authAction';

const Main = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    margin: auto;
`;

const SideBar = styled.div`
    width: 100px;
    height: 100%;
    background: #a1a1a1;
    border-right: 1px solid #ccc;
    .row{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding:0px 10px;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 15px;
        font-weight: 400;
        text-transform: uppercase;
        i{
            color: red;
            font-size: 30px;
            margin-right: 10px;
        }
    }

`;



const RightSide = styled.div`
        width: calc(100% - 120px);
        height: 500px;
        overflow: scroll;
        border: 1px solid #ccc;
        padding: 10px;
        box-sizing: border-box;
        text-align: left;

        input{
            width: 100%;
            height: 50px;
            line-height: 50px;  
            padding: 10px;
            box-sizing: border-box;
        
        }

        label{
            margin-bottom: 10px;
            font-size: 15px;
            display: block;
            font-weight: 500;
        }

        .row{
            width: 100%;
            margin-bottom: 10px;
        }
        .user_flex{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
        }
        .user_card{
            width: 200px;
            box-shadow: 2px 3px 2px #CCC;
            padding: 10px;
            margin: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;

        }
        .user_Action{
            display: flex;
            align-items: center;
            div{
                padding: 10px;
                box-sizing: border-box;
                font-size: 18px;
                cursor: pointer;
            }
        }


`;



class admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            image: "",
            tab: "user",
            fullName: "",
            profilePic: "",
            newEmail: "",
            newPassword: "",
            dob: "",
            userPopUp: false,
            bool: false,

        }
    }


    componentWillMount() {

        this.props.getAllUserList();

    }

    shouldComponentUpdate(nextProps, nextState) {
        //    nextProps.usersList != nextState.usersList;
        // this.props.getAllUserList();        

        return true;
    }

    componentDidUpdate() {
        // this.props.getAllUserList();     
    }

    componentWillUpdate() {
        console.log("UPUP")
        // this.props.getAllUserList()
    }




    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // New post submit 
    postSubmit = () => {
        this.props.newPosts(this.state.title, this.state.image, this.state.body)
        this.setState({
            title: "",
            image: '',
            body: ""
        });
    }


    changeTab = (key) => {
        this.setState({
            tab: key
        })
    }

    popUpClose = (key) => {
        this.setState({
            userPopUp: false
        })
        console.log("GGG", this.state)
    }

    deleteUser = (id, ) => {
        if (window.confirm("Are you sure you want delete this user !! if yes press ok")) {
            this.props.deletUserById(id)
            this.setState({
                bool: true
            })
            this.props.getAllUserList()
        }
        else {
            console.warn("not del");

        }
    }

    render() {
        console.log("users", this.props.usersList)
        const users = this.props.usersList;
        if (!localStorage.getItem("token")) {
            return <h1>Please Login</h1>
        }
        console.log("ENV", process.env)

        return (

            <div>
                {/* user addd and add edit popup*/}
                <PopUp effect={this.state.userPopUp} width="500px" height="auto" name="popUpClose" popUpClose={this.popUpClose}>
                    <UserAddEdit popUpClose={this.popUpClose} />
                </PopUp>

                <Main>
                    <SideBar>
                        <div className="row" onClick={() => this.changeTab("post")}><i class="fab fa-blogger"></i> Post</div>
                        <div className="row" onClick={() => this.changeTab("user")}> <i class="fas fa-users"></i>User</div>
                    </SideBar>


                    <RightSide>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ccc' }}>
                            <h1 style={{ textAlign: 'left', margin: '0px' }}>
                                {this.state.tab}
                            </h1>
                            {this.state.tab === "user" && <button style={{ height: '30px' }} onClick={() => this.setState({ userPopUp: true })}>Add New User</button>}
                            {this.state.tab === "post" && <button style={{ height: '30px' }}>Add New Post</button>}
                        </div>

                        {
                            this.state.tab === "post" &&
                            <div class="post">
                                <div className="row">
                                    <label>Post title</label>
                                    <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                                </div>

                                <div className="row">
                                    <label>Post Body</label>
                                    <textarea type="text" name="body" value={this.state.body} onChange={this.onChange} style={{ height: '100px', width: '100%' }} />
                                </div>


                                <div className="row">
                                    <label>Post images</label>
                                    <input type="file" name="image" value={this.state.image} onChange={this.onChange} />
                                </div>
                                <button onClick={this.postSubmit}>Submit Your Post</button>
                            </div>

                        }

                        {this.state.tab === "user" &&
                            <div class="user">
                                {/* {this.state.addNewUSer && } */}
                                <div className="user_flex">
                                    {users && users.length > 0 && users.map((user, index) => {
                                        return (
                                            <div class="user_card" key={user.id}>
                                                <div>
                                                    <h2>{user.firstName}</h2>
                                                    <p>{user.email}</p>
                                                    <p>{user.dob}</p>
                                                    <p style={{ color: user.admin ? "green" : "red" }}>{user.admin ? "admin" : "not admin"}</p>
                                                </div>
                                                <div className="user_Action">
                                                    <div style={{ color: 'red' }} onClick={() => this.deleteUser(user._id)}><i class="far fa-trash-alt"></i> </div>
                                                    <div style={{ color: 'green' }} ><i class="fas fa-user-edit"></i></div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>}
                    </RightSide>
                </Main>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    usersList: state.auth.UserLists
})


export default connect(mapStateToProps, { newPosts, signUpRequest, getAllUserList, deletUserById })(admin);