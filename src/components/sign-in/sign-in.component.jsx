import React from "react";
import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state=  {
            email : '',
            password : '',
        }
    }

handleSubmit = (event)=> {
    event.preventDefault();

    this.setState({email:'',password:''})
}

handleChange = (event) => {
    const {value,name} = event.target;

    this.setState({[name]: value})
}

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password</span>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="email" name='email' value={this.state.email} required onChange={this.handleChange}/>
                    <input type="password " name='password' value={this.state.password} required onChange={this.handleChange}/>
                    <input type="submit" value='submit' />
                </form>
            </div>
        );
    }
}

export default SignIn;