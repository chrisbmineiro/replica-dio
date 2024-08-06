import Home from "./pages/home/index";
import Login from "./pages/login/index";
import { GlobalStyle } from './styles/global'

function App() {
  return (<>
    <GlobalStyle />
    <Home />
    <Login />
  </>
  );
}

export default App;
