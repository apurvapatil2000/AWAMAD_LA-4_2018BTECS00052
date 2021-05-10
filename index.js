import ReactDom from 'react-dom';
import React from 'react';

class Myform extends React.Component{
	constructor(props){
		super(props);
		this.state={
			fullname:'',
			age:null,
		};
	}
	myChangeHandler  =(event) =>{
		let fullname=event.target.fullname;
		let value = event.target.value;
		this.setState({[fullname]:value});
	}
	render(){
		return(
			<form>
			<h1>Aadhar Registration form</h1>
			<p>Enter name:</p>
			<input
			type='text'
			name='username'
			onChange={this.myChangeHandler}
			/>
			<p>Birthdate:</p>
			<input
			type='date'
			name='Birthdate'
			onChange={this.myChangeHandler}
			/>
			<button>submit</button>
			</form>
			);
	}
}
ReactDom.render(<MyForm/>,document.getElementById('root'));