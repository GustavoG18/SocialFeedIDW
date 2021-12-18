import { ThemeProvider } from "styled-components";
import theme from "./lib/theme";
import './App.css';

const App = () => {
  return (
    <> 
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    </>
  );
};

export default App;
