
import Counter from './components/Counter'
import './App.css'
import Parent from './components/Parent'
import Child from './components/Child'
import CounterHook from './components/CounterHook'

import ErrorBoundary from './ErrorBoundary'

const App = () => {
  return(
    <>
    {/* <div className='App'>
      <div className='App-header'>
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>
        <Counter />

      </div>
    </div> */}

    <CounterHook />
    </>
  )
}

export default App




      {/* <Parent auth="aaa">
        <Child />
      </Parent> */}
      {/* See paarent component but have access
      to child component */}