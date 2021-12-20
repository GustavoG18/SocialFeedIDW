import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex !important;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors['primary']};
`;

export const ContainerConfig = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${(props) => `5px solid ${props.theme.colors['secondary']}`};
  border-radius: 5%;
  width: 40%;
  height: 500px;
  @media (max-width: 1100px){
    width: 60%;
  }
  @media (max-width: 500px){
    width: 90%;
  }
`;

export const Input = styled.input`
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: ${(props) => props.theme.weight[500]};
  margin: 20px 0px;
  width: 50%;
  height: 30px;
  border: none;
  border-radius: 2%;
  padding: 10px;
  background:  ${(props) => props.theme.colors['white']};;
`;