import styled from 'styled-components';

export const Title = styled.img`
max-width: ${props => props.isMobile ? '200px' : '500px'};
margin-top: ${props => props.isMobile ? '70px' : '150px'};
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

export const SortContainer = styled.div`
margin-top: 30px;
`

export const Sort
 = styled.span`
color: #d21731;
font-size: 24px;
text-decoration: underline;
cursor: pointer;
`