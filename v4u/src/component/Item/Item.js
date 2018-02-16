import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className="col-3 col-4 col-6 col-xs-12 ">
            <div className="Card">
                <Link 
                    to={{
                        pathname: `/desc/${props.item.id}`,
                        state:{ item: props.item}
                    }} 
                >
                    <p className="Center Title" id={props.item.id}>{props.item.name}</p>
                    <img src={props.item.image} className="img-responsive" id={props.item.id}/>
                </Link>
            </div>    
        </div>
    )
}

const center = {
   
}

export default Item;