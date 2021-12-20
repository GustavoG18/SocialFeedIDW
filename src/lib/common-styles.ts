import styled, { css } from 'styled-components';
import { ColorTypes, SizeTextTypes, WeightTypes, LineHeightTypes, SizeTitleTypes, SizeButtonTypes } from './theme';

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
  margin: string;
  textAlign: string;
}>;

type TitleProps = Partial<{
  fontSize: SizeTitleTypes;
  fontWeight: WeightTypes;
  lineHeight: LineHeightTypes;
  color: ColorTypes;
  margin: string;
}>;

type ButtonProps = Partial<{
  background: ColorTypes;
  color: ColorTypes;
  width: string;
  height: string;
  fontSize: SizeButtonTypes;
  margin: string;
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
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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
  margin: ${(props) => props?.margin? props.margin : '0'};
  @media (max-width: 500px) {
    font-size: ${(props) => props.theme.sizeLetter.text['p3']};
    line-height: ${(props) => props.theme.lineHeight['l4']};
    text-align: ${(props) => props?.textAlign? props.textAlign: 'center'};
    width: 250px;
  }
`;

export const Title = styled.h1<TitleProps>`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props?.fontSize? props.theme.sizeLetter.title[props.fontSize] : props.theme.sizeLetter.title['t1']};
  font-weight: ${(props) => props?.fontWeight? props.theme.weight[props.fontWeight] : props.theme.weight[500]};
  line-height: ${(props) => props?.lineHeight? props.theme.lineHeight[props.lineHeight] : props.theme.lineHeight['l11']};
  color: ${(props) => props?.color? props.theme.colors[props.color] : props.theme.colors['black']};
  margin: ${(props) => props?.margin? props.margin : '0'};
  @media (max-width: 500px) {
    font-size: ${(props) => props.theme.sizeLetter.title['t4']};
    line-height: ${(props) => props.theme.lineHeight['l9']};
    text-align: center;
    width: 250px;
  }
`;

export const Button = styled.button<ButtonProps>`
  background: ${(props) => props?.background? props.theme.colors[props.background] : props.theme.colors['white']};
  color: ${(props) => props?.color? props.theme.colors[props.color] : props.theme.colors['black']};
  width: ${(props) => props?.width? props.width : 'auto'};
  height: ${(props) => props?.height? props.height : 'auto'};
  font-size: ${(props) => props.fontSize? props.theme.sizeLetter.button[props.fontSize] : props.theme.sizeLetter.button['b2']};
  font-weight: ${(props) => props.theme.weight[900]};
  padding: 10px 30px;
  border: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  margin: ${(props) => props?.margin? props.margin : '0'};
  cursor: pointer;
`;