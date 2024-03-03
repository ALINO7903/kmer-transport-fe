import React from "react";

export default class SearchComponent extends React.Component{

    constructor(props){
        super(props);
        this.state= { name: props.name}
    }

    render(){
       return(

        <form>
            <input type="text" placeholder="from" value={this.state.name}/>
        </form>

       );
       
    }
}
