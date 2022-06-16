import React, { useState } from "react";
import * as A from './style'

export default function Calculadora() {

    const [number, setnumber] = useState(0)
    const [oldNumber, setoldnumber] = useState(0)
    const [operator, setOperator] = useState(0)

    const inputnumber=(e)=>{
        var inputResult = e.target.value
        setnumber(number + inputResult)

        if(number === 0){
            setnumber(inputResult)
        }else{
            setnumber(number + e.target.value)
        }
    }

    const inputnumberPoint=(e)=>{
        var inputResult = e.target.value
        setnumber(number + inputResult)

        if(number === 0){
            setnumber(inputResult)
        }else{
            setnumber(number + e.target.value)
        }

        document.getElementById("Point").setAttribute("disabled", true )
    }

    const Clear=(e)=>{
        
        setnumber(0)
        document.getElementById("Point").removeAttribute("disabled")
    }

    const Divison=()=>{
        setnumber(number/100)
    }

    const Operator=()=>{
        if(number > 0){
            setnumber(-number)
        }else{
            setnumber(Math.abs(number))
        }
    }

    const operatorHandle=(e)=>{
        var operato = e.target.value
        setOperator(operato)
        setoldnumber(number)
        setnumber(0)
        document.getElementById("Point").removeAttribute("disabled")
    }

    const Calculate=(e)=>{
        document.getElementById("Point").removeAttribute("disabled")
        var parseON = parseFloat(oldNumber)
        var parseN = parseFloat(number)
        if(operator === "x"){
            setnumber(parseON*parseN)
        }
        else if(operator === "-"){
            setnumber(parseON-parseN)
        }
        else if(operator === "+"){
            setnumber(parseON+parseN)
        }
        else if(operator === "÷"){
            setnumber(parseON/parseN)
        }
    }


    const operatorHandleE=()=>{
        setnumber(number)
        setnumber(parseInt(number) ** 2)
    }


  return (
    <div>
        <A.Container>
            <A.Result>{number}</A.Result>
            <A.ButtonEspecial onClick={Clear}>C</A.ButtonEspecial>
            <A.ButtonEspecial onClick={Operator}>+/-</A.ButtonEspecial>
            <A.ButtonEspecial onClick={Divison}>%</A.ButtonEspecial>
            <A.ButtonEspecial onClick={operatorHandle} value={'÷'}>÷</A.ButtonEspecial>
            <A.ButtonNumbers onClick={inputnumber} value={1}>1</A.ButtonNumbers>
            <A.ButtonNumbers onClick={inputnumber} value={2}>2</A.ButtonNumbers>
            <A.ButtonNumbers onClick={inputnumber} value={3}>3</A.ButtonNumbers>
            <A.ButtonEspecial onClick={operatorHandle} value={'x'}>x</A.ButtonEspecial>
            <A.ButtonNumbers onClick={inputnumber} value={4}>4</A.ButtonNumbers>
            <A.ButtonNumbers onClick={inputnumber} value={5}>5</A.ButtonNumbers>
            <A.ButtonNumbers onClick={inputnumber} value={6}>6</A.ButtonNumbers>
            <A.ButtonEspecial onClick={operatorHandle} value={'-'}>-</A.ButtonEspecial>
            <A.ButtonNumbers onClick={inputnumber} value={7}>7</A.ButtonNumbers>
            <A.ButtonNumbers onClick={inputnumber} value={8}>8</A.ButtonNumbers>
            <A.ButtonNumbers onClick={inputnumber} value={9}>9</A.ButtonNumbers>
            <A.ButtonEspecial onClick={operatorHandle} value={'+'}>+</A.ButtonEspecial>
            <A.ButtonNumbers onClick={inputnumber} value={0}>0</A.ButtonNumbers>
            <A.ButtonNumbers onClick={inputnumberPoint} id="Point" value={'.'} >.</A.ButtonNumbers>
            <A.ButtonNumbers onClick={operatorHandleE} value={'x2'} >x<A.sup>2</A.sup></A.ButtonNumbers>
            <A.ButtonEspecial onClick={Calculate}>=</A.ButtonEspecial>
        </A.Container>
        

    </div>
  )
}
