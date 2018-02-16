import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className="col-md-3">
            <Link to="/desc">
                <p style={center}>{props.item.name}</p>
                <img src={props.item.image} className="img-responsive" />
            </Link>
            {/* <p>{props.item.description}</p> */}
        </div>
    )
}

const center = {
    textAlign: 'center',
    fontSize: '20px'
}

export default Item;