import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className="col-md-3">
            <div className="Card">
                <Link 
                    to={{
                        pathname: `/desc/${props.item.id}`,
                        state:{ item: props.item}
                    }} 
                >
                    <p className="Center" id={props.item.id}>{props.item.name}</p>
                    <img src={props.item.image} className="img-responsive" id={props.item.id}/>
                </Link>
            </div>    
        </div>
    )
}

const center = {
   
}

export default Item;