import React from 'react';
import "./front.css";



 class CoinInfo extends React.Component{
 constructor(props){  //eslint-disable-line no-useless-constructor
 	super(props);
 	this.inputRef=React.createRef()
 	this.state={
		 text:"",
			data:{},
			isLoaded:false,
			divv:""
		}
}
	handleChange(event) {
    this.setState({ text: event.target.value });
  };
	componentDidMount(){
		this.inputRef.current.focus()

	
	}

fetchdata=(fn)=>{
	
	fetch('https://api.coingecko.com/api/v3/coins/'+this.state.text).then(res=>res.json()).then(
		(user) =>{ ( this.setState({data:user,isLoaded:true}))
		fn()
		console.log(user)
	}
		);

}

 	clickHandler = () => {
		if(this.state.text!=="")
		this.fetchdata(this.showinfodiv)
		else
		alert("Enter Some value")
 	}

showinfodiv=()=>{

	this.setState({divv:
		<div className="main-div" align="center">
				<div className="frameSet" >
					<div  className="header"> {this.state.text} </div>
					<div className="info1">
						 
						<div className="row">
						<img  id="imgg" src={this.state.isLoaded?this.state.data.image.small:'Loading Data. . . .'}></img>	
						</div>
						<div>
							<div className="sideInfo">
							<p className="heading">{this.state.data.name}</p>	
							<span className="heading">Country of Origin - </span>
							<br/>
						<span className="heading">Date of Appereance</span>

						{
							this.state.data.genesis_date}
							<br/>


						<span className="heading">Market Cap rank - </span>
						<span className="normal">{this.state.data.market_cap_rank}</span>

						<span className="heading">Gecko Rank- </span>
						<span className="normal">{this.state.data.coingecko_rank}</span>
						
						<span className="heading">Score- </span>
						<span className="normal">77.15</span>

						<span className="heading">Developer Score- </span>
						<span className="normal">{this.state.data.developer_score}</span>

						<span className="heading">Community Score- </span>
						<span className="normal">{this.state.data.community_score}</span>

						<span className="heading">Liquidity Score- </span>
						<span className="normal">{this.state.data.liquidity_score}</span>

						<span className="heading">Public Interest Score- </span>
						<span className="normal">{this.state.data.public_interest_score}</span>
						</div>
						</div>
					</div>
					<div className="info2">
					<br/><br/>
					{this.state.isLoaded?this.state.data.description.en:'Loading Data. . . .'}
	
					</div>
				</div>
			</div>
	})}



  render(){
	return(<div>

	<div className="decoration" align="center">
		<h1> Crypto Wiki </h1>
		<input type="text" ref={this.inputRef} onKeyUp={this.handleChange.bind(this)} placeholder="Enter The Crypto Currency Name" className="inputField" /> &nbsp;
		<button className="button" onClick={this.clickHandler}>Get Info About Coin this is me</button><br/><br/>
		<h3>Search For a Coin</h3>
	{this.state.divv}
	</div>

</div> );
};
};


export default CoinInfo;

