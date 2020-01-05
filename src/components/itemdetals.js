import React from 'react';
import {Link}  from 'react-router-dom';
class Itemdetals extends React.Component{
  constructor(props){
    super();
    this.state={
        items:[],

    }

  }



componentDidMount= async ()=>{
    const response=await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${this.props.match.params.id}`)
    const re=await response.json()
  
    this.setState({
        items:re.data
    })
}


  render(){
      console.log(this.state.items)
    return (
        <div>{this.state.items.itemId} </div>
    )
  }
}

export default Itemdetals;
