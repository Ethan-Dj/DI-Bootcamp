import './App.css';

import ErrorBoundary from './components/ErrorBoundary';
import Counter from './components/counter';

function App() {
  return (
    <>
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>
    </>
  );
}

export default App;
