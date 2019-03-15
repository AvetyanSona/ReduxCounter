import React, { Component } from 'react';
import './App.css';
import {createStore} from 'redux';

let store = createStore(rootReducer);
console.log(store);
let initialState = {item: 0};

function rootReducer(state = initialState,action){
  switch(action.type){
    case 'INCREMENT':
      return {item: state.item + 1}
    case 'DECREMENT':
    return  {item: state.item - 1}
    default:
      return state   
  }
}


class App extends Component {
  constructor(){
    super()
    store.subscribe(()=>{
      this.setState({
      item: store.getState().item
    })})
    
  }
  increment(){
    store.dispatch({type:'INCREMENT'});
  }
  decrement(){
    store.dispatch({type:'DECREMENT'});
  }

  render() {
    return (
      <div className="App">
        <section className='container'>
          <div className='decrement button' onClick={this.decrement}>-</div>
          <div className='sum'>{store.getState() ? store.getState().item : 0}</div>
          <div className='increment button' onClick={this.increment}>+</div>
        </section>
      </div>
    );
  }
}

export default App;
