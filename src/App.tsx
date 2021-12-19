import { ThemeProvider } from "styled-components";
import theme from "./lib/theme";
import './App.css';
import FirstPage from "./pages/home/FirstPage/FirstPage";

const App = () => {
  return (
    <> 
      <ThemeProvider theme={theme}>
        <FirstPage />
      </ThemeProvider>
    </>
  );
};

export default App;
