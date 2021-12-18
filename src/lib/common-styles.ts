import styled, { css } from 'styled-components';
import { ColorTypes, SizeTextTypes, WeightTypes, LineHeightTypes } from './theme';

type FlexContainerProps = Partial<{
  background: ColorTypes;
  width: string;
  height: string;
  margin: string;
  padding: string;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  borderRadius: string;
}>;

type ContainerProps = Partial<{
  background: ColorTypes;
  width: string;
  height: string;
  margin: string;
  padding: string;
  borderRadius: string;
}>;

type TextProps = Partial<{
  fontSize: SizeTextTypes;
  fontWeight: WeightTypes;
  lineHeight: LineHeightTypes;
  color: ColorTypes;
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
  width: ${(props) => props?.width? props.width : 'auto'};
  height: ${(props) => props?.height? props.height : 'auto'};
  margin: ${(props) => props?.margin? props.margin : '0'};
  padding: ${(props) => props?.padding? props.padding : '0'};
  border-radius: ${(props) => props?.borderRadius? props.borderRadius : '0'};
`;

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme.colors[props?.background || 'transparent']};
  width: ${(props) => props?.width? props.width : 'auto'};
  height: ${(props) => props?.height? props.height : 'auto'};
  margin: ${(props) => props?.margin? props.margin : '0'};
  padding: ${(props) => props?.padding? props.padding : '0'};
  border-radius: ${(props) => props?.borderRadius? props.borderRadius : '0'};
`;

export const Text = styled.p<TextProps>`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props?.fontSize? props.theme.sizeLetter.text[props.fontSize] : props.theme.sizeLetter.text['p2']};
  font-weight: ${(props) => props?.fontWeight? props.theme.weight[props.fontWeight] : props.theme.weight[500]};
  line-height: ${(props) => props?.lineHeight? props.theme.lineHeight[props.lineHeight] : props.theme.lineHeight['l5']};
  color: ${(props) => props?.color? props.theme.colors[props.color] : props.theme.colors['black']};
  @media (max-width: 500px) {
    font-size: ${(props) => props.theme.sizeLetter.text['p4']};
  }
`