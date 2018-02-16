import React from 'react';
import { Link } from 'react-router-dom';
import chilli from '../../assets/chilli.png';
import veg from '../../assets/veg.png';
import nonVeg from '../../assets/nonVeg.png';

const Item = (props) => {
    return (
        <div className="col-3 col-4 col-6 col-xs-12 ">
            <div className="Card">
            <div className="InsideCard">
                <img src={props.item.image} className="Image img-responsive" id={props.item.id}/>
                <h4 className="Title" id={props.item.id}><b>{props.item.name}</b></h4>
                <div className="row">
                <div className="col-md-7 col-sm-7 col-xs-7 img-sentence">
                    {props.item.nonVeg? 
                        <p><img className="imgSize" src={nonVeg}/> Non-Veg &nbsp;&nbsp;
                            {props.item.spicy ? <span><img  className="imgSize" src={chilli}/> Spicy</span> : null} </p>
                        :<p><img className="imgSize" src={veg}/> Veg &nbsp;&nbsp;
                            {props.item.spicy ? <span><img  className="imgSize" src={chilli}/> Spicy</span> : null }</p>   
                    }
                </div>
                <div className="col-md-5 col-sm-5 col-xs-5">
                <Link to={{
                        pathname: `/desc/${props.item.id}`,
                        state:{ item: props.item}
                }}>
                    <button className="Button"><b>View Details</b></button>
                </Link>
                </div>
                </div>
            </div>    
            </div>
        </div>
    )
}

const center = {
   
}

export default Item;