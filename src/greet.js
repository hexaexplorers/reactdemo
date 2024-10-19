import React, { Component } from 'react'

class Greet extends Component{
    constructor(){
        super()
        this.state={
            message: 'Welcome Visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thanks for clicking'
        })
    }
    render()
    {
        return(

            <div>
            <h1>{this.state.message}</h1>
            <button onClick={() =>this.changeMessage()}>Click Me</button>
        </div>
        
        )
        
    }
}
export default Greet;
