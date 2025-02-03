import './App.css';
import Home from './components/Home';
import { StepProvider } from './context/StepContext';
import { WorkDetailsProvider } from './context/WorkDetails';
function App() {
  return (
    <div>
      <StepProvider>
        <WorkDetailsProvider>
          <Home/>
        </WorkDetailsProvider>
      </StepProvider>
    </div>
  );
}

export default App;
