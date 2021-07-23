import styled from 'styled-components';

const ButtonStyled= styled.button`
  background: papayawhip;
  color: purple;
  text-align: center;
  padding: 10px;
  margin:15px;
  border:none;
  border-radius: 30px;
  transition: 0.5s;
  
  &:hover{
    transform: scale(1.3); 
  }
`
export default ButtonStyled;