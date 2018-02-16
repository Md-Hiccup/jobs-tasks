import React,{ Component }from 'react';

class Desc extends Component {
    render(){
    const { location } = this.props;
    console.log(location);
        return (
            <div className="container">
                <div className="Card">
                    <h2 className="Title">{location.state.item.name}</h2>
                    <img src={location.state.item.image} className="Image"/><br/>
                    <div className="Center">
                        <p>{location.state.item.description}</p>
                        <p>Non-Vegetarian:  {location.state.item.nonVeg? <b>Yes</b>: <b>No</b>}</p>
                        <p>Spicy:  {location.state.item.spicy ? <b>Yes</b>: <b>No</b>}</p>
                    </div>
                 </div>
            </div>
        )
    }
} 

export default Desc;