import styled, { css } from 'styled-components';
import { ColorTypes } from './theme';

type FlexContainerProps = Partial<{
  background: ColorTypes;
  width: string;
  height: string;
  margin: string;
  padding: string;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
}>;

const CommonFlexProps = css`
  display: flex;
`;

export const FlexContainer = styled.div<FlexContainerProps>`
  ${CommonFlexProps}
  flex-direction: ${(props) => props?.flexDirection? props.flexDirection : 'column'};
  justify-content: ${(props) => props?.justifyContent? props.justifyContent : 'center'};
  align-items: ${(props) => props?.alignItems? props.alignItems : 'center'};
  background: ${(props) => props.theme.colors[props?.background || 'transparent']};
  width: ${(props) => props?.width? props.width : '100%'};
  height: ${(props) => props?.height? props.height : '100vh'};
  margin: ${(props) => props?.margin? props.margin : '0'};
  padding: ${(props) => props?.padding? props.padding : '0'};
`;