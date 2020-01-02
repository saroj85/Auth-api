import styled from 'styled-components';

// row

export const Row = styled.div`
   width : 100%;
   height: ${props => props.height || undefined};
   background-color: ${props => props.bg || undefined};
   display: flex;
   align-items: ${props => props.alignItems ? props.alignItems : 'center'};
   justify-content: ${props => props.justify ? props.justify : 'space-between'};
   margin: ${props => props.margin ? props.margin : 'auto'};
   margin-right: ${props => props.marginRight ? (props.marginRight + 'px') : 'auto'};
   flex-direction: ${props => props.direction ? props.direction : 'row'};
   flex-wrap : ${props => props.wrap ? props.wrap : 'wrap'};
   overflow: ${props => props.overflow ? props.overflow : ''};
   padding: ${props => props.padding || '0px'};
   font-family:'Asap', sans-serif ;
   &::-webkit-scrollbar { width: ${props => props.hideScrollbar ? '0 !important' : 'auto'} }
`;

function getWidthString(span) {
    if (!span) return;
    let width = span / 12 * 100;
    return `width : ${width}%`;
}


/* // column  */


export const Column = styled.div`
      min-height: ${props => props.minHeight ? props.minHeight : undefined};
      padding: ${props => props.padding ? props.padding : '10px'};
      margin: ${props => props.margin ? props.margin : 'auto'};
      box-sizing: border-box;
      font-family:'Asap', sans-serif ;
   ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};
   @media only screen and (min-width: 768px){
       ${({ sm }) => (sm ? getWidthString(sm) : 'width: 0%')}
   }
   @media only screen and (min-width: 992px){
       ${({ md }) => md && getWidthString(md)}
   }
   @media only screen and (min-width: 1200px){
       ${({ lg }) => lg && getWidthString(lg)}
   }
`;

/* hr lining  */

export const Hr = styled.div`
    width: 100%;
    background-color: ${props => props.color || "#7C7C7C"};
    height: ${props => props.height || "1px"};
`;