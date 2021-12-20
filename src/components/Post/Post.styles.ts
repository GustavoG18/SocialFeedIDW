import styled from "styled-components";

export const ContainerPost = styled.div`
  background: ${(props) => props.theme.colors['transparent']};
  width: 93%;
  height: 100%;
  margin: 10px;
  padding: 0;
  @media (max-width: 500px) {
    width: 80%;
  }
`