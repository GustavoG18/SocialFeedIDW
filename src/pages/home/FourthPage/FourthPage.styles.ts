import styled from "styled-components";
import { ColorTypes, SizeButtonTypes } from "../../../lib/theme";

type ButtonProps = Partial<{
  background: ColorTypes;
  color: ColorTypes;
  width: string;
  height: string;
  fontSize: SizeButtonTypes;
}>;

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
  cursor: pointer;
  @media (max-width: 500px){
    position: relative !important;
    margin: 20px auto !important;
    width: 80% !important;
    height: 70px !important;
    transform: none !important;
    left: 0 !important;
  }
`;