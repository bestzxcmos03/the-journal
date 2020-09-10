import React,{ Component } from 'react';
import './App.css';
import 'animate.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
class Btn extends Component{
    render(props){
        var btnstyle={
            marginTop:"20%",
            fontSize:"150%",
            width:"100px",
            height:"100px",
            padding:"auto",
            borderRadius:"50%",
            opacity:"70%"
        }
        return(
            <button class="btn btn-light shadow" value={props} style={btnstyle}>
                {props}
            </button>
        )
    }
}

class Numboard extends Component{
    constructor(){
        super();
        var x=1;
    }
    render(){
        var button = new Btn();
        return(
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        {button.render(1)}
                    </div>
                    <div class="col-4">
                        {button.render(2)}
                    </div>
                    <div class="col-4">
                        {button.render(3)}
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        {button.render(4)}
                    </div>
                    <div class="col-4">
                        {button.render(5)}
                    </div>
                    <div class="col-4">
                        {button.render(6)}
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        {button.render(7)}
                    </div>
                    <div class="col-4">
                        {button.render(8)}
                    </div>
                    <div class="col-4">
                        {button.render(9)}
                    </div>
                </div>
            </div>
        );
    }
}

function Login(){
    var loginstyle={
        animation: "fadeInUp",
        animationDuration: "2s"
    }
    return(
        <div className="App-header">
            <div class="animate__animated text-center"style={loginstyle}>
                <h1>Please Login</h1>
                <Numboard />
            </div>
            
        </div>
        
    );
}
export default Login;