import React, { Component } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Numpad extends Component{
    constructor(props){
        super(props); 
        
        this.state={
            excColor : "#015FF5",
            bgColor : "white",
            numbgColor : "#cccccc",
            numColor : "black",
            oprColor : "#777"
        };
        if (props == "dark" || props.name == "dark"){
                this.state={
                            excColor : "#FEA00A",
                            bgColor : "black",
                            numbgColor : "#333333",
                            numColor : "white",
                            oprColor : "#A5A5A5"
                        };
        }
        var pad = [];
        var col = [];
        col.push(<div class = "col-md-3 numpadpanel">{button('AC',this.state.excColor,this.state.bgColor)}</div>);
        col.push(<div class = "col-md-3 numpadpanel">{button('/',this.state.oprColor,this.state.bgColor)}</div>);
        col.push(<div class = "col-md-3 numpadpanel">{button('*',this.state.oprColor,this.state.bgColor)}</div>);
        col.push(<div class = "col-md-3 numpadpanel">{button('-',this.state.oprColor,this.state.bgColor)}</div>);
        pad.push(<div class='row'>{col}</div>);
        col = [];
        col.push(<div class = "col-md-4 numpadpanel">{button(7,this.state.numbgColor,this.state.numColor)}</div>);
        col.push(<div class = "col-md-4 numpadpanel">{button(8,this.state.numbgColor,this.state.numColor)}</div>);
        col.push(<div class = "col-md-4 numpadpanel">{button(9,this.state.numbgColor,this.state.numColor)}</div>);

        col.push(<div class = "col-md-4 numpadpanel">{button(4,this.state.numbgColor,this.state.numColor)}</div>);
        col.push(<div class = "col-md-4 numpadpanel">{button(5,this.state.numbgColor,this.state.numColor)}</div>);
        col.push(<div class = "col-md-4 numpadpanel">{button(6,this.state.numbgColor,this.state.numColor)}</div>);
        var plus = button("+",this.state.oprColor,this.state.bgColor);

        pad.push(
            <div class='row'>
                <div class='col-md-9'>
                    <div class='row'>
                   {col[0]} 
                   {col[1]} 
                   {col[2]} 
                    </div>
                    <div class='row'>
                   {col[3]} 
                   {col[4]} 
                   {col[5]}  
                    </div>
                </div>
                <div class='col-md-3 numpadpanel'>
                   {plus} 
                </div>
            </div>
        );

        col = [];
        col.push(<div class = "col-md-4 numpadpanel">{button(1,this.state.numbgColor,this.state.numColor)}</div>);
        col.push(<div class = "col-md-4 numpadpanel">{button(2,this.state.numbgColor,this.state.numColor)}</div>);
        col.push(<div class = "col-md-4 numpadpanel">{button(3,this.state.numbgColor,this.state.numColor)}</div>);
        
        col.push(<div class = "col-md-8 numpadpanel">{button(0,this.state.numbgColor,this.state.numColor)}</div>);
        col.push(<div class = "col-md-4 numpadpanel">{button('.',this.state.numbgColor,this.state.numColor)}</div>);

        var temp = button('=',this.state.excColor,this.state.bgColor);
        pad.push(
            <div class="row">
                <div class='col-md-9'>
                    <div class="row">
                        {col[0]}
                        {col[1]}
                        {col[2]}
                    </div>
                    <div class="row">
                        {col[3]}
                        {col[4]}
                    </div>
                </div>
                <div class='col-md-3 numpadpanel'>
                        {temp}
                </div>
            </div>);
        

        this.numpads = pad.map((i) => <div>{i}</div>);

        function button(num,color="#ccc",fcolor="#000"){
            const value = num;
            const mystyle = {
                color: fcolor,
                backgroundColor: color ,
                fontSize: "200%"
              };
            return(
                <button class = "numpadprop btn btn-default" style = {mystyle}>
                {num}
                </button>
            );
        }
    } 
    render(){
        return(
                <div class = "col-md-12 card numpadpanel flex" style={{backgroundColor:this.state.bgColor}}>
                    {this.numpads}
                </div>
        );
    }
}  
export default Numpad;