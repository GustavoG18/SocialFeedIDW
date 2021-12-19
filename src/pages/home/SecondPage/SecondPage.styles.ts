import styled from "styled-components";

export const ContainerImages = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: start;
  @media (max-width: 500px){
   display: none; 
  }
`;

export const Image = styled.img`
  width: calc(100% / 5);
  height: 75px;
  margin: auto;
  opacity: 40%;
`;