import Widget from "./components/Widget/Widget";
import { FlexContainer } from "./lib/common-styles";

const App = () => {
  return (
    <> 
      <FlexContainer
        background="primary"
      >
        <Widget feedUrl="" messageBody="" numberOfPost={1}/>
      </FlexContainer>
    </>
  );
};

export default App;
