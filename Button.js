import React from 'react';
import ReactDOM from 'react-dom';
class Button extends React.Component{
constructor(props){
super(props);

}
// handleClick = () =>{
// this.setState((prevState) =>({
// 	counter : prevState.counter +1
// }))
// }
	 render(){
   		return(
      	<button onClick={() => this.props.onClickFunction(this.props.incrementValue)}>+{this.props.incrementValue}</button>
      );
   };
}

export default Button;