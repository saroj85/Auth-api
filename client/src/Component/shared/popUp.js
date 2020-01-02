import React, { Component } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom:0px;
    left: 0px;
    margin: auto;
    display: block;
    background-color: rgba(0,0,0,0.61);
    z-index: 100;
    transform: ${props => props.effect ? "scale(1)" : 'scale(0)'};
    transition: all 0.1s;
    overflow-y: auto;
`;

const Content = styled.div`
    width: ${props => props.width || '300px'};
    height: ${props => props.height || '300px'};
    /* width: ${props => props.effect ? '300px' : '0px'}; */
    transform: ${props => props.effect ? "scale(1)" : 'scale(0)'};
    position: fixed;
    top: 0px;
    right: 0px;
    bottom:0px;
    left: 0px;
    margin:${props => props.margin ? props.margin : 'auto'};
    display: block;
    background-color:${props => props.bg || "#fff"};
    z-index: 101;
    padding-top: 30px;
    transition: all 0.1s;
    border-radius: 30px;

    .close{
        position: absolute;
        top: -11px;
        right: 22px;
        font-size: 31px;
        color: #18bc9c;
        font-weight: 700;
        padding: 0px;
        cursor: pointer;
        border: 1px solid #18bc9c;
        width: 41px;
        height: 41px;
        border-radius: 50%;
        text-align: center;
        line-height: 41px;
        transition: all 0.1s;
        &:hover{
            background: #18bc9c;
            color: #fff;
        }
    }
`;




class popUp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    stopProp = (e) => {
        e.stopPropagation()
    }



    render() {
        const { height, width, bg, popUpClose, effect, margin, error , name } = this.props;

        return (
            <div>
                <Modal onClick={() => popUpClose(name)} effect={effect}>
                    <Content height={height} width={width} bg={bg} margin={margin} effect={effect} onClick={this.stopProp}>
                        {this.props.children}
                    </Content>
                </Modal>
            </div>
        )
    }
}

export default popUp;
