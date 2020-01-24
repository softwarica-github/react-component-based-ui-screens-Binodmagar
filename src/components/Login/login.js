import React from 'react'
// import Button from '../Button/Button'
import Axios from 'axios';

import{
	Form, Button
} from 'react-bootstrap';

class Login extends React.Component{

constructor(){
	super()

	this.state = {
		username: '',
		password: '',
		validationMessageUsername: '',
		validationMessage: ''
	}
}

usernameChangeHandler = (event) =>{
	this.setState({username: event.target.value})
	if(event.target.value.length < 4){
		this.setState({validationMessageUsername: "username must be more than 4 character"});
	}else{
		this.setState({validationMessageUsername: "This username is valid"});
	}
}

passwordChangeHandler = (event) =>{
	this.setState({password: event.target.value})
	if(event.target.value.length < 10){
		this.setState({validationMessage: "Password must be more than 10 character"});
	}else{
		this.setState({validationMessage: "This password is valid"});
	}
}

SubmitHandler = (event) =>{
	event.preventDefault();
	console.log(this.state);

	var headers = {
		'Content-Type': 'application/json'
	}

	Axios.post('http://localhost:3004/login', this.state, headers)
	.then(function(res){

	})
	.catch(function(err){

	})
}

render(){
	return(
		
			<Form onSubmit={this.SubmitHandler}>
			  <Form.Group controlId="formBasicEmail" >
			    <Form.Label>Email address</Form.Label>
			    <Form.Control type="text" placeholder="Enter email" value={this.state.username} onChange={this.usernameChangeHandler} />

			   <p>{this.state.validationMessageUsername}</p>
			  </Form.Group>

			  <Form.Group controlId="formBasicPassword">
			    <Form.Label>Password</Form.Label>
			    <Form.Control type="password" placeholder="Enter Password" value={this.state.password} onChange={this.passwordChangeHandler} />
			    <p>{this.state.validationMessage}</p>
			  </Form.Group>

			 

			    <Button variant="primary" type="submit">
			    Submit
			  </Button>
			  </Form>)
}




}

export default Login