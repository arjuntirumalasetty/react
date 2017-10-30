import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button'

class App extends React.Component{
 state ={counter : 9};
 incrementCounter = (incrementValue) =>{
 this.setState((prevState) =>({
	counter : prevState.counter +incrementValue
}));
 };
 	render(){
  	return(
    <div>
    <Button incrementValue={1} onClickFunction ={this.incrementCounter}/>
    <Button incrementValue={5} onClickFunction ={this.incrementCounter}/>
    <Button incrementValue={6} onClickFunction ={this.incrementCounter}/>
    <Button incrementValue={20} onClickFunction ={this.incrementCounter}/>
      <Result counter={this.state.counter}/>
      </div>
    );
  };
 }

 const Result = (props) =>{
 return(
 <div>{props.counter}</div>
 );
 }

 export default App;

