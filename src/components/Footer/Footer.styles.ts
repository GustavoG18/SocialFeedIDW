import styled from "styled-components";

export const FlexContainerFirst = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #FAF9FC;
  height: 100px;
  padding: 0px 50px;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const FlexContainerSecond = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.colors['primary']};
  height: 100px;
  padding: 0px 30px;
  @media (max-width: 500px) {
    display: flex;
  }
`;