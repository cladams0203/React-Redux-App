import styled from 'styled-components';

export const Card = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
width: 80%;
background-color: lightgrey;
border-radius: 2rem;
box-shadow: 2px 2px 5px black;
margin-bottom: 30px;
padding: 20px;
`
export const SubCard = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const Summary = styled.p `
    width: 40%;
`


export const Image = styled.img `
    width: 20%;
    max-width: inherit;
`