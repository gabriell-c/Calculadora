import styled from "styled-components"

export const ButtonNumbers = styled.button`
    border: 0;
    color: #333;
    width: 2.5em;
    font-weight: bold;
    height: 2.5em;
    font-family: 'Poppins', sans-serif;
    border-radius: 2.5rem;
    background:#eeeeee;
    box-shadow: 2px 2px 5px #a7a7a7;
    font-size: 25px;
    margin: .3em;
    cursor: pointer;

    &:active{
        transform: scale(0.95);
    }
`;

export const ButtonEspecial = styled.button`
    border: solid 1px #33333350;
    color: #eeeeee;
    width: 2.5em;
    font-weight: bold;
    height: 2.5em;
    font-family: 'Poppins', sans-serif;
    border-radius: 2.5rem;
    background:#068add;
    box-shadow: 0px 0px 10px #068add60;
    font-size: 25px;
    margin: .3em;
    cursor: pointer;

    &:active{
        transform: scale(0.95);
    }
`;

export const Container = styled.div`
    background-color: #e0e2e7;
    margin: auto;
    width: 21em;
    padding: 1%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 50%;
    overflow: auto;
    border: solid 2px #22222250;
    border-radius: 10px;

`

export const Result = styled.h1`
    margin: .5em auto;
    width: 90%;
    overflow: hidden;
    align-items: center;
    padding: .1em;
    justify-content: center;
    color: #222;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-align: end;
    font-size: 35px;
    border: 0;
    box-shadow: inset 0 0 15px #a9b4bb75;
    border-radius: 5px;
    outline: none;

`

export const sup = styled.sup`

    font-size: 18px;
    font-family: 'Poppins', sans-serif;


`