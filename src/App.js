import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/index";
import Login from "./pages/login/index";
import Feed from "./pages/feed/index";
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
     </Routes >
    </Router>
  );
}

export default App;
