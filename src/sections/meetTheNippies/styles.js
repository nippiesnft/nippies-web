import styled from 'styled-components';

export const Title = styled.img`
max-width: ${props => props.isMobile ? '200px' : '500px'};
margin-top: ${props => props.isMobile ? '150px' : '200px'};
`

export const CardGrid = styled.div`
margin-top: 50px;
margin-bottom: 25px;
margin-left: auto;
margin-right: auto;
display: grid;
grid-template-columns: ${props => props.isMobile ? 'repeat(2, 2fr)' : 'repeat(3, 3fr)'};
max-width: ${props => props.isMobile ? '445px' : '800px'};
`

export const LoadMore = styled.span`
color: #d21731;
font-size: 24px;
text-decoration: underline;
cursor: pointer;
`

export const Sort
 = styled.div`
color: #d21731;
margin-top: 30px;
font-size: 24px;
text-decoration: underline;
cursor: pointer;
`