# react

React :
React is a java script library for building user interface. This library is to take care of view in MVC.
React has 3 main design concepts
1. components
2. Reactive Updates
3. Virtual views of memory

Components : 
	- These are like functions
	- Reusable and composable
	- can manage a private state.

Reactive updates : 
	- Takes updates to the browser.

Virtual views of memory : 
	- Write HTML in js
	- Using java script to render HTML allows react to have virtual representation in memory is called Virtual DOM.
	- Tree reconciliation.
	
React components :
	There are two types of components 
		1. Functional Components
		2. class Components

	Functional Compoenents :
		A functional compoenet is a simple form of react component. Its a simple function.
		It recive simple props called properties and return How it looks like in HTML.
		
		Example :
			const MyCompoenet = (props) =>{
				return(
					<elementorcomponent/>
				)
			}
			
	class component :
		A class component is a more futured way to create a component.
		It also acts like function that recives props, but this function also contains private internal state as additionan input controls return of js.
		
		Example :
			class MyCompoenet extends React.Compoenent{
				render(){
					return{
						<elementorcomponent/>
					}
				}
			}

*	State can change, props can not.
*	render() method returns the compoenent JSX.
*	setState() method is asynchronus one which schedules an updates. Multiple setStates in a component called potentially bad for performance.
*	React component can only return one element.

***** For practice please visit https://jscomplete.com/repl/ which is react support online tool.

Button increment counter example : 

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
 const Result = (props) =>{
 return(
 <div>{props.counter}</div>
 );
 }
 
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

ReactDOM.render(<App/>,mountNode);

URL to start project from scrtach : https://www.andrewhfarmer.com/react-from-scratch/

@Arjun : for your ref please correct below points:
create folder containers and place App.js and Button.js into it.
create dist folder
create webpack folder and place webpack.dev.config.js

Working with data : 
	- If the user has no interactions with component. Start component as a function component.
	- Only use class component when you need to manage state object, which is usually done on top level component.
	
Example on data handling :
	
	const Card  = (props) => {
	return(
  <div style={{margin: '2en'}}>
  	<img width="75" src={props.avatar_url} />
    <div style={{display : 'inline-block',marginLeft: 10}}>
  		<div>{props.name}</div>
    	<div>Facebook</div>
    </div>
  </div>
  );
}

let data = [
						{avatar_url: "https://avatars3.githubusercontent.com/u/3790597?v=4",name : "Hani M. K.",company : "HMK"},
            {avatar_url: "https://avatars0.githubusercontent.com/u/20653643?v=4",name : "Cathy0807",company : "Facebook"}
]

const CardList = (props) => {
		return(
    		<div>
        	{props.cards.map(card =><Card {...card}/>)}
        </div>
    )
}
ReactDOM.render(<CardList cards={data}/>,mountNode);
