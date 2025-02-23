import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import { StepProvider } from './context/StepContext';
import { WorkDetailsProvider } from './context/WorkDetails';
import EditItem from './components/EditItem';


function App() {
  return (
    <div className="app-container">
      <StepProvider>
        <WorkDetailsProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/edit-item/:id' element={<EditItem/>}></Route>
            </Routes>
          </Router>
        </WorkDetailsProvider>
      </StepProvider>
    </div>
  );
}

export default App;
