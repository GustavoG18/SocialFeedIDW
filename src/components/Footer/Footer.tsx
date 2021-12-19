import { Container, Text } from "../../lib/common-styles";
import { FlexContainerFirst, FlexContainerSecond } from "./Footer.styles";
import logo3 from '../../assets/logo3.svg';

const Footer = () => {
  return(
    <>
      <Container>
        <FlexContainerFirst>
          <Text fontSize="p5" lineHeight="l1">©2019 Tidal Traffic. All rights reserved.</Text>
          <Text fontSize="p5" lineHeight="l1">©2019 Tidal Traffic. All rights reserved.</Text>
          <Text fontSize="p5" lineHeight="l1">About Us | Terms of Service | Privacy Policy</Text>
        </FlexContainerFirst>
        <FlexContainerSecond>
          <img src={logo3} alt=""/>
          <Text style={{width: '130px'}} color="white" fontSize="p2" lineHeight="l3" fontWeight={700}>©2019 Tidal Traffic. All rights reserved.</Text>
        </FlexContainerSecond>
      </Container>
    </>
  );
};

export default Footer;