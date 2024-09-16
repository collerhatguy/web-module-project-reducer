import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import { applyNumber, prevMemory, addMemory, resetMemory, changeOperator, clearDisplay } from "./actions"

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleClear = () => dispatch(clearDisplay())
  const handlePrevMemory = () => dispatch(prevMemory())
  const handleAddMemory = () => dispatch(addMemory())
  const handleResetMemory = () => dispatch(resetMemory())
  const handleCalcButton = (num) => dispatch(applyNumber(num))
  const handleOperatorChange = (op) => dispatch(changeOperator(op))
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handlePrevMemory}/>
              <CalcButton value={"MR"} onClick={handleAddMemory}/>
              <CalcButton value={"MC"} onClick={handleResetMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleCalcButton(1)}/>
              <CalcButton value={2}/>
              <CalcButton value={3}/>
            </div>

            <div className="row">
              <CalcButton value={4}/>
              <CalcButton value={5}/>
              <CalcButton value={6}/>
            </div>

            <div className="row">
              <CalcButton value={7}/>
              <CalcButton value={8}/>
              <CalcButton value={9}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperatorChange("+")}/>
              <CalcButton value={"*"} onClick={() => handleOperatorChange("*")}/>
              <CalcButton value={"-"} onClick={() => handleOperatorChange("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
