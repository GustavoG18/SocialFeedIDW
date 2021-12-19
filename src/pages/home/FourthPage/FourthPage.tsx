import { Container, FlexContainer, Title } from "../../../lib/common-styles";
import { Button } from "./FourthPage.styles";

const FourthPage = () => {
  return (
    <>
      <Container
        width="100%"
        height="280px"
      >
        <FlexContainer
          width="100%"
          height="30vh"
          background="primary"
        >
          <Title fontWeight={800} fontSize="t3" lineHeight="l10" color="white" margin="10px 0 0 0">Find Out YOUR Online Advertising Readiness Rating!</Title>
          <Button
            background="secondary"
            color="white"
            width="260px"
            height="80px"
            fontSize="b1"
            style={{display: 'block',position: 'absolute', left: '50%', transform: 'translateY(130%) translateX(-50%)'}}
          >
            START QUIZ
          </Button>
        </FlexContainer>
      </Container>
    </>
  );
};

export default FourthPage;