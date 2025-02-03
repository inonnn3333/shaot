import './App.css';
import Home from './components/Home';
import { StepProvider } from './context/StepContext';
function App() {
  return (
    <div>
      <StepProvider>
        <Home/>
      </StepProvider>
    </div>
  );
}

export default App;
