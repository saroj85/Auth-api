import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    width: calc(100% - 120px);
    margin: auto;
`;


class fullWidthDiv extends Component {
    render() {
        return (
            <Wrapper>
                {this.props.children}
            </Wrapper>
        )
    }
}

export default fullWidthDiv