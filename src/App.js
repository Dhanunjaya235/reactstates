import './App.css';
import Child from './components/child/child';
import Hooks from './components/hooks/hooks';
import Login from './components/login/login';
import Parent from './components/parent/parent';
import Properties from './components/properties/properties';
function App() {
  return (
    <div className="App">
      <Child></Child>
     <Parent></Parent>
      <Hooks/>
      <Properties name='Dhanunjay' id={205}></Properties>
      <Login/>
    </div>
  );
}

export default App;
