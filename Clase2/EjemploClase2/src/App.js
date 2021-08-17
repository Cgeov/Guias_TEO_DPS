import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [Dolar, setDolar] = useState(0);
  const [Euro, setEuro] = useState(0);
  const [Bitcoin, setBitcoin] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(tipo == 1){
      setDolar((total * 1));
      setEuro((total * 0.85));
      setBitcoin((total * 0.000022));
    }
    else if(tipo==2){
      setDolar((total * 1.17));
      setEuro((total * 1));
      setBitcoin((total * 0.000026));
    }
    else{
      setDolar((total * 45833.90));
      setEuro((total * 39036.50));
      setBitcoin((total * 1));
    }
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de Divisa</h1>

      <p>Dólar Estadounidense: {Dolar}</p>
      <p>Euro Europea: {Euro}</p>
      <p>Bitcoin: {Bitcoin}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dólar Estadounidense</option>
        <option value={2}>Euro Europea</option>
        <option value={3}>Bitcoin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
