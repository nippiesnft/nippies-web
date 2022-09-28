import styled from 'styled-components';

export const Container = styled.div`
margin-left: 15px;
`

export const Title = styled.img`
max-width: ${props => props.isMobile ? '200px' : '500px'};
margin-top: ${props => props.isMobile ? '150px' : '250px'};
`

export const CardGrid = styled.div`
margin-top: 50px;
margin-top: 60px;
margin-left: auto;
margin-right: auto;
display: grid;
gap: 1rem;
grid-template-columns: ${props => props.isMobile ? 'repeat(2, 2fr)' : 'repeat(3, 3fr)'};
max-width: ${props => props.isMobile ? '350px' : '800px'};
`

export const LoadMore = styled.span`
font-size: 25px;
text-decoration: underline;
cursor: pointer;
`

export const ShowAll = styled.div`
margin-top: 30px;
font-size: 18px;
text-decoration: underline;
cursor: pointer;
`