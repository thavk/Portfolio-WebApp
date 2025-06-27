import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { MainContent } from './components/MainContent';

function App() {
    return (
        <Router basename='/Portfolio-WebApp/'>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<MainContent />}/>
                    <Route path='projects/:id' element={<Projects />}/>
                    <Route path='about-me' element={<About />}/>
                </Route>
                <Route path='/about' element={<About />}/>
                <Route path='/projects' element={<Projects />}/>
            </Routes>
        </Router>
    );
};

export default App;
