import { ThemeProvider } from "styled-components";
import theme from "./lib/theme";
import './App.css';
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <> 
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
