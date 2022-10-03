import styled from "styled-components"

export const Title = styled.img`
left: 50%;
position: absolute;
margin-top: 38%;
max-width: ${props => props.isMobile ? '200px' : '500px'};
margin-left: ${props => props.isMobile ? '-100px' : '-250px'};
`

export const Texture = styled.img`
width: 100%;
background-color: #e8a8ff;
margin-top: -10px;
margin-bottom: -10px;
z-index: 20;
`

export const DivideBottom = styled.img`
margin-top: 30px;
width: 100%;
`

export const DivideTop = styled.img`
width: 100%;
`

export const DigitalMerchImage = styled.img`
max-width: 500px;
left: 55%;
position: absolute;
margin-top: 32%;
width: 30%;
`

export const DigitalMerchLabel = styled.span`
max-width: 500px;
left: 52%;
position: absolute;
margin-top: 62%;
width: 30%;
color: white;
font-size: ${props => props.isMobile ? '32px' : '80px'};
`

export const PhysicalMerchImage = styled.img`
max-width: 500px;
left: 13%;
position: absolute;
margin-top: 30%;
width: 30%;
`

export const PhysicalMerchLabel = styled.span`
max-width: 500px;
left: 13%;
position: absolute;
margin-top: 62%;
width: 30%;
color: white;
font-size: ${props => props.isMobile ? '32px' : '80px'};
`