import { FlexContainer, Title, Text, Button, Container } from "../../../lib/common-styles";
import { ContainerAdvice, ContainerFirstPage, ContainerHero, ContainerMenu, FlexContainerFirstPage, Logo, TextFirstPage } from "./FirstPage.styles";

type HeroProps = {
  title: string;
  body: string;
  buttonText: string;
  click: () => void;
}

const FirstPage = () => {
  return(
    <>
      <Container
        background="primary"
        width="100%"
        height="100vh"
      >
        <FlexContainer flexDirection="row" width="100%" height="100vh">
          <ContainerMenu>
            <Logo />
            <Button 
              background="white"
              color="black"
              width="169px"
              height="44px"
            >
              START QUIZ
            </Button>
          </ContainerMenu>
          <RightPart />
          <LeftPart />
        </FlexContainer>
      </Container>
    </>
  );
};

const Hero = (props: HeroProps) => {
  const { title, body, buttonText, click } = props;
  return(
    <>
      <FlexContainerFirstPage background="primary" alignItems="start" height="45vh">
        <TextFirstPage color="white" margin="0px 0px 23px 0px" fontSize="p3" lineHeight="l3" style={{letterSpacing: '2px'}}>ATTENTION ONLINE ADVERTISERS</TextFirstPage>
        <Title color="white" fontWeight={900}>
          {title}
        </Title>
        <Text color="white" lineHeight="l8" margin="23px 0px 23px 0px" >
          {body}
        </Text>
        <Button
          background="secondary"
          color="white"
          width="247px"
          height="60px"
          onClick={click}
          fontSize="b1"
        >{buttonText}</Button>
        <TextFirstPage color="white" margin="23px 0px 0px 0px" fontSize="p1" lineHeight="l8">Learn more about Readiness Raitings</TextFirstPage>
      </FlexContainerFirstPage>
    </>
  );
}

const RightPart = () => {
  return(
    <>
      <ContainerFirstPage
        backgroundPhoto={false}
        justiyContent="center"
      >
        <Hero 
          title={"What’s Your Online Advertising Readiness Rating?"} 
          body={"When you take this quiz, you’ll get a free report that outlines YOUR Readiness Rating."}
          buttonText={"START QUIZ"} 
          click={() => { }}
        /> 
      </ContainerFirstPage>
    </>
  );
}

const LeftPart = () => {
  return(
    <>
      <ContainerFirstPage
        backgroundPhoto={true}
        justiyContent="flex-end"
      >
        <ContainerAdvice>
          <Text
            color="white"
            lineHeight="l2"
            fontSize="p5"
            fontWeight={700}
          >
            Learning about my rating - and WHAT to do about it, has really changed the way I do online advertising. It is all about being a master at this craft, and staying there. Andrea - Barranquilla, Colombia.
          </Text>
        </ContainerAdvice>
      </ContainerFirstPage>
    </>
  );
}
export default FirstPage;