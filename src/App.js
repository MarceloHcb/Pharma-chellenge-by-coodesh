import { ThemeProvider } from "@mui/system";
import { UsersProvider } from "./data/AppContext/AppContext";
import { Header } from "./ui/components/Header/Header";
import { Main } from "./ui/components/Main/Main";
import { theme } from "./ui/themes/themes";

function App() {
  return (
    <>
    <UsersProvider>
    <ThemeProvider theme={theme}>
    <Header/>
    <Main/>
    </ThemeProvider>
    </UsersProvider>  
    </>
  );
}

export default App;
