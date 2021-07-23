import React,{useState,useEffect}  from 'react';
import ReactDOM  from 'react-dom';
import PropTypes from 'prop-types';
import ButtonStyled from '../styles/ButtonStyled';
import DivStyled from '../styles/DivStyled';

//const action=type=>({type});
// functional component
function Counter ({value, Increment,IncrementAsync,Decrement,DecrementAsync}){
return (
 <DivStyled>
     <ButtonStyled onClick={Increment}>Increment(+)</ButtonStyled>
     <ButtonStyled onClick={Decrement}>Decrement(-)</ButtonStyled>
     <ButtonStyled onClick={IncrementAsync}>IncrementAsync</ButtonStyled>
     <ButtonStyled onClick={DecrementAsync}>DecrementAsync</ButtonStyled>
     <div> Counter value: {value}</div>

 </DivStyled>
)
}
Counter.propTypes={
    value:PropTypes.number.isRequired,
    Increment: PropTypes.func.isRequired,
    Decrement: PropTypes.func.isRequired,
    IncrementAsync: PropTypes.func.isRequired,
    DecrementAsync: PropTypes.func.isRequired,
}
 export default Counter;


