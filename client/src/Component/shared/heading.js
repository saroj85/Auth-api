import React, { Component } from 'react'
import styled from 'styled-components';
import {TweenMax, Linear,} from 'gsap';



const Heading = styled.h1`
    font-size: 45px;
    color: ${props => props.color || "#fff"};
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    /* border-bottom: 2px solid #ccc; */
    padding-bottom: 10px;
    .border_bottom{
        display: block;
        width: 105px;
        height: 2px;
        background: ${props => props.color || '#fff'};
        margin: auto;
    }
`;

 class heading extends Component {
     constructor(props){
         super(props)
         this.titleRef = React.createRef();


     }

     componentDidMount(){
        // const node = this.LogoRef.current
        const title = this.titleRef.current
        console.log("HELLO ", this.LogoRef)
        // TweenMax.to(
        //     node,
        //     .8,
        //     {
        //         opacity: 1,
        //         y: -20,
        //         ease: Linear.easeOut
        //     },
            
        // )
        TweenMax.from(
            title,
            1,
            {
                opacity: 0.2,
                y: 30,
                ease: Linear.easeOut
            },
            
        )
        TweenMax.to(
            title,
            1,
            {
                opacity: 1,
                y: 0,
                ease: Linear.easeOut
            },
            
        )
      }


    render() {
        return (
            <div>
                <Heading color={this.props.color} ref={this.titleRef}>
                    {this.props.title}
                    <span className="border_bottom"></span>
                </Heading>
            </div>
        )
    }
}


export default heading;
