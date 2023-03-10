import './App.css';
import { useSelector ,useDispatch} from 'react-redux';
import { incNumber,decNumber } from './actions/index';

function App() {
  const myState=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch();

  return (
    <div className="App">
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h2>using React and Redux</h2>
            <div className="quantity">
            <a className="quantity__minus" title="Decrement" onClick={()=>dispatch(decNumber())}><span>-</span></a>
            <input name="quantity" type="text" className="quantity__input"  value={myState} />
            <a className="quantity__plus" title="Increment" onClick={()=>dispatch(incNumber())}><span>+</span></a>
          </div>
          </div>
      </div>
   </div>
  );
}

export default App;
