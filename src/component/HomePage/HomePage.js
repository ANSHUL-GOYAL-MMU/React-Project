import React from 'react';
import "./data.css";
import {Route,BrowserRouter as Router,Link,Switch} from 'react-router-dom'; // eslint-disable-line no-unused-vars

 class HomePage extends React.Component{
 constructor(props){  //eslint-disable-line no-useless-constructor
 	super(props);
	 this.state = {text: ''};
	 this.clickHandler=this.clickHandler.bind(this)
 	}
	

 	handleChange(event) {
		 
	this.setState({ text: event.target.value });
  };

clickHandler(){
	alert(this.state.text);
}

  render(){
	return(<div>
	<div className="decoration" align="center">
		<h1> Crypto Wiki </h1>
		<input type="text" onKeyUp={this.handleChange.bind(this)} placeholder="Enter The Crypto Currency Name" className="inputField" /> &nbsp;
	    
	    <Router>
		<Link to="/CoinInfo"><button className="button" onClick={this.clickHandler}>Get Info About Coin</button><br/><br/></Link>
		
		
		</Router>
		
		<h3>Search For a Coin</h3>
	</div>


</div> );
};
};


export default HomePage;

