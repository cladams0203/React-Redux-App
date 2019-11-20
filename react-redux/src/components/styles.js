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
@media(max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
}
`
export const SubCard = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media(max-width: 768px) {
        flex-wrap: wrap;
    }
`
export const Summary = styled.p `
    width: 40%;
    @media(max-width: 768px) {
        width:80%;
    }
`


export const Image = styled.img `
    width: 20%;
    max-width: inherit;
    @media(max-width: 768px) {
        width: 50%;
    }
`