import styled from 'styled-components';

const Button = styled.button`
font-family: "chauncy-pro";
background: none;
border: none;
`

export const Title = styled.img`
max-width: ${props => props.isMobile ? '200px' : '500px'};
margin-top: ${props => props.isMobile ? '35px' : '80px'};
`

export const CardGrid = styled.div`
margin-top: ${props => props.isMobile ? '25px' : '50px'};
margin-bottom: 25px;
margin-left: auto;
margin-right: auto;
display: grid;
grid-template-columns: ${props => props.isMobile ? 'repeat(2, 2fr)' : 'repeat(3, 3fr)'};
max-width: ${props => props.isMobile ? '445px' : '800px'};
`

export const LoadMore = styled(Button)`
background: none;
border: none;
color: #d21731;
font-size: ${props => props.isMobile ? '20px' : '24px'};
text-decoration: underline;
cursor: pointer;
margin-left: 10px;
`

export const LoadAll = styled(Button)`
background: none;
border: none;
color: #d21731;
font-size: ${props => props.isMobile ? '20px' : '24px'};
text-decoration: underline;
cursor: pointer;
margin-right: 10px;
`

export const SortContainer = styled.div`
margin-top:  ${props => props.isMobile ? '15px' : '30px'};;
`

export const Sort
    = styled(Button)`
color: #d21731;
font-size: ${props => props.isMobile ? '20px' : '24px'};
text-decoration: underline;
cursor: pointer;
margin-right: 20px;
`

export const SwapArtCTA
    = styled.a`
color: #d21731;
font-size: ${props => props.isMobile ? '20px' : '24px'};
text-decoration: underline;
cursor: pointer;
margin-left: 10px;
`

export const ExploreCTA
    = styled.a`
color: #d21731;
font-size: ${props => props.isMobile ? '12px' : '16px'};
text-decoration: underline;
cursor: pointer;
`

export const ExploreContainer = styled.div`
font-size: ${props => props.isMobile ? '12px' : '16px'};
margin-top: 50px;
`

export const TwitterLinkContainer = styled.div`
font-size: ${props => props.isMobile ? '12px' : '16px'};
margin-top: 10px;
`

export const TwitterLink = styled.a`
font-size: ${props => props.isMobile ? '12px' : '16px'};
color: black;
`
