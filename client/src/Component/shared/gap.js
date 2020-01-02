import styled from 'styled-components';

const Gap = styled.div`
    width: 100%;
    height: ${props => props.h || '2px'};
    display: block;
`;

export default Gap;