import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromissos = ['Ler', 'Estudar', 'Jogar', 'Assistir tv'];
  return compromissos.map((teste) => Task(teste));
}

export default App;
