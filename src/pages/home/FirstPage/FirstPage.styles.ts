import styled from "styled-components";
import logo from '../../../assets/logo1.svg';
import logoResponsive from '../../../assets/logo2.svg';
import girlImage from '../../../assets/girl.svg';
import { ColorTypes, LineHeightTypes, SizeTextTypes, WeightTypes } from "../../../lib/theme";

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

type ContainerProps = {
  backgroundPhoto: boolean;
  justiyContent?: string;
  margin?: string;
};

type TextProps = Partial<{
  fontSize: SizeTextTypes;
  fontWeight: WeightTypes;
  lineHeight: LineHeightTypes;
  color: ColorTypes;
  margin: string;
}>;

export const FlexContainerFirstPage = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${(props) => props?.flexDirection? props.flexDirection : 'column'};
  justify-content: ${(props) => props?.justifyContent? props.justifyContent : 'center'};
  align-items: ${(props) => props?.alignItems? props.alignItems : 'center'};
  background: ${(props) => props.theme.colors[props?.background || 'transparent']};
  width: 62%;
  height: ${(props) => props?.height? props.height : 'auto'};
  margin: 5%;
  border-radius: ${(props) => props?.borderRadius? props.borderRadius : '0'};
  @media (max-width: 900px) {
    width: auto;
  }
  @media (max-width: 500px) {
    width: 49%;
    display: flex;
    padding: 40px 60px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  width: 100px;
  height: 65px;
  background: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  @media (max-width: 500px) {
    background: url(${logoResponsive});
    height: 46px;
  }
`;

export const ContainerMenu = styled.div`
  width: 95%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px){
    position: relative;
    flex-direction: column;
    background: ${(props) => props.theme.colors['primary']};
    height: auto;
    padding-bottom: 20px;
  }
`;

export const ContainerFirstPage = styled.div<ContainerProps>`
  background: ${(props) => props.backgroundPhoto? `url(${girlImage})` : props.theme.colors['primary']};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props?.justiyContent? props.justiyContent : 'flex-start'}; 
  background-position: center center;
  background-size: cover;
  width: 50%;
  height: 100vh;
  margin: ${(props) => props?.margin? props.margin : 0};
  @media (max-width: 500px) {
    background: ${(props) => props.backgroundPhoto?  props.theme.colors['primary'] : `url(${girlImage})`};
    background-size: cover;
    background-position: center center;
    display: ${(props) => props.backgroundPhoto? 'none': 'flex'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;

export const ContainerAdvice = styled.div`
  width: auto;
  height: auto;
  background: rgba(0,0,0,0.3);
  padding: 20px 30px 20px 30px; 
  @media (max-width: 500px) {
    display: none;
  }
`;

export const ContainerHero = styled.div`
  background: ${(props) => props.theme.colors['primary']};
  width: 50%;
  height: 50%;
  margin: 10%;
  @media (max-width: 500px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TextFirstPage = styled.p<TextProps>`
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props?.fontSize? props.theme.sizeLetter.text[props.fontSize] : props.theme.sizeLetter.text['p2']};
  font-weight: ${(props) => props?.fontWeight? props.theme.weight[props.fontWeight] : props.theme.weight[500]};
  line-height: ${(props) => props?.lineHeight? props.theme.lineHeight[props.lineHeight] : props.theme.lineHeight['l5']};
  color: ${(props) => props?.color? props.theme.colors[props.color] : props.theme.colors['black']};
  margin: ${(props) => props?.margin? props.margin : '0'};
  @media (max-width: 500px) {
    display: none;
  }
`;