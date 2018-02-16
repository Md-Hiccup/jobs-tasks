import React,{ Component }from 'react';
import chilli from '../../assets/chilli.png';
import veg from '../../assets/veg.png';
import nonVeg from '../../assets/nonVeg.png';

class Desc extends Component {
    render(){
    const { location } = this.props;
    console.log(location);
        return (
            <div className="container-fluid">
            <div className="row DescCard">
            {/* <div className="Card"> */}
                <div className="col-md-4">
                    <img src={location.state.item.image} className="Image"/><br/>
                </div>
                <div className="col-md-8"> 
                    <h1 className="Title">{location.state.item.name}</h1>
                    <h4>{location.state.item.description}</h4>
                    <hr/>
                    <div className="img-sentence">
                        {location.state.item.nonVeg? 
                        <p><img className="imgSize" src={nonVeg}/> Non-Veg &nbsp;&nbsp;
                            {location.state.item.spicy ? <span><img className="imgSize" src={chilli}/> Spicy</span> : null} </p>
                        :<p><img className="imgSize" src={veg}/>&nbsp;&nbsp;Veg &nbsp;&nbsp;
                            {location.state.item.spicy ? <span><img className="imgSize" src={chilli}/> Spicy</span> : null }</p>   
                        }
                    </div>
                 </div>
            </div>
            </div>
        )
    }
} 

export default Desc;