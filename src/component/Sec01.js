import React from "react";

class Sec01 extends React.Component{
        state = {count : 0}
    
    render(){
        return(
            <div>
                <h1>계산하기</h1>
                <p>count : {this.state.count}</p>
                <p>
                    <button 
                    onClick={this.click
                        // ()=>{
                        //     this.setState({count : this.state.count +10})
                        // }
                    }>10증가</button>
                </p>
            </div>
        )
    }
    click = ()=>{
        this.setState({count : this.state.count +10})
    }
}



export default Sec01