import styled from "styled-components";

export const ContainerPost = styled.div`
  background: ${(props) => props.theme.colors['transparent']};
  width: 93%;
  height: auto;
  margin: 0;
  padding: 0;
  @media (max-width: 500px) {
    width: 80%;
  }
`