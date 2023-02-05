import { useState } from 'react';
import Celebration from './Celebration';
import { list } from './data';
import logo from './logo.svg';
import element1 from './element1.svg';
import element2 from './element2.svg';
function App() {
  const [winner, setWinner] = useState('');
  const [done, setDone] = useState(false);
  const [raffiling, setRaffiling] = useState(false)
  const getEmployee = () => {
    var employee =
      list[Math.floor(Math.random() * list.length)].name.toString();
    return employee;
  };
  const main = () => {
    setRaffiling(true)
    const intervalID = setInterval(() => {
      setWinner(getEmployee());
    }, 100);
    setTimeout(() => {
      clearTimeout(intervalID);
      setDone(true);
    }, 5000);
  };

  return (
    <div className="App">
      <div className="container">
        <img className="logo" src={logo} alt="logo" />
        {!done ? (raffiling ? '' : <h1 className="btn-shaffle" onClick={main}>
          RAFFLE
        </h1>

        ) : (
          <>

            <h2 className="cong">Congratulations</h2>
            <h2 className="winner-is">WINNER IS</h2>
            <Celebration />
            <img className='element1' src={element1} alt="element1" />
            <img className='element2' src={element2} alt="element1" />
          </>
        )}


        <h2 className="winner">{winner.toString()}</h2>
      </div>
    </div>
  );
}

export default App;
