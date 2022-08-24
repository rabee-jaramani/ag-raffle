import { useState } from 'react';
import Celebration from './Celebration';
import { list } from './data';
import logo from './logo.svg';
function App() {
  const [winner, setWinner] = useState('??????');
  const [done, setDone] = useState(false);
  const getEmployee = () => {
    var employee =
      list[Math.floor(Math.random() * list.length)].name.toString();
    return employee;
  };
  const main = () => {
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
        {!done ? (
          <h1 className="btn-shaffle" onClick={main}>
            RAFFLE
          </h1>
        ) : (
          ''
        )}

        <h2 className="winner-is">WINNER IS</h2>
        <h2 className="winner">{winner.toString()}</h2>
        {done ? (
          <>
            <h2 className="cong">Congratulations</h2>
            <Celebration />
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
