import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Singup/Signup';
function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
            </Routes>
        </Router>
    )
}

export default App;
