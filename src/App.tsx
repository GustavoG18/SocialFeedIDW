import { ThemeProvider } from "styled-components";
import theme from "./lib/theme";
import './App.css';
import Router from "./Router/Router";
import { ToastProvider } from "react-toast-notifications"

const App = () => {
  return (
    <> 
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <Router />
        </ToastProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
