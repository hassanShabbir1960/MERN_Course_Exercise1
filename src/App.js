import './App.css';
import Header from './components/header';
import MidLayer from './MidLayer';
import MidLayer2 from './components/MidLayer2';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MidLayer></MidLayer>
      <Header></Header>
      <MidLayer2></MidLayer2>
      <Header></Header>
      
    </div>
  );
}

export default App;
