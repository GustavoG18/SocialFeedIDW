import { FlexContainer, Text, Title } from "../../../lib/common-styles";
import { Image } from './ThirdPage.styles';
import image21 from '../../../assets/image21.svg';

const ThirdPage = () => {
  return(
    <>
      <FlexContainer
        width="auto"
        height="auto"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <FlexContainer
          alignItems="start"
          justifyContent="center"
          width="55%"
          height="100vh"
        >
          <Text margin="20px 0 15px 0" fontSize="p4" lineHeight="l3" style={{letterSpacing: '20%'}}>Why IT IS IMPORTANT</Text>
          <Title margin="0 0 20px 0" fontSize="t2" lineHeight="l12" fontWeight={800}>Knowing Your Online Ads Readiness Raiting...</Title>
          <Text textAlign="start" margin=" 0 0 20px 0" fontSize="p2" lineHeight="l7">
            ...will help you understand just how bullish you should be with your ad spend and where your blind spots are.
          </Text>
          <Text textAlign="start" margin=" 0 0 20px 0" fontSize="p2" lineHeight="l7">
            When it comes to online advertising the more informed and ready you are, the more effective your advertising will be (and the greater your chances of a healthy Return on your Ad Spend (ROAS)).
          </Text>
          <Text textAlign="start" margin=" 0 0 20px 0" fontSize="p2" lineHeight="l7">
            Find Out your Online Advertising Readiness Rating so you can make more money and avoid risks with your online advertising.
          </Text>
        </FlexContainer> 
        <Image src={image21} alt=""/>
      </FlexContainer>
    </>
  );
};

export default ThirdPage;