import React from 'react';
import {Link}  from 'react-router-dom';
class Shop extends React.Component{
  constructor(props){
    super();
    this.state={
        items:[]

    }


}
 

componentDidMount= async()=>{
const data=await fetch('https://fortnite-api.theapinetwork.com/store/get');
 
const reg=await data.json();
this.setState({
  items:reg.data
})
}



  render(){
console.log(this.state.items)
    return(
      <div>
       {this.state.items.map((item,index)=>{
         return (
           <div>
             <Link to={`/item/${item.itemId}` }>
           <h2 key={item.itemId}>  {item.item.name}</h2>
             </Link>
            {/* < img src={item.item.images.icon}/> */}
             </div>
         )
       })}
        </div>
    )
  }
}

export default Shop;
