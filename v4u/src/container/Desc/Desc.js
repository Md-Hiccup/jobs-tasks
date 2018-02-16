import React,{ Component }from 'react';

import ShowDesc from '../../component/ShowDesc/ShowDesc';

class Desc extends Component {
    render(){
    const { location } = this.props;
    // console.log(location);
        return (
            <div className="container">
                <div className="Card">
                    <h2>{location.state.item.name}</h2>
                    <img src={location.state.item.image} />
                    <p>{location.state.item.description}</p>
                 </div>
            </div>
        )
    }
} 

export default Desc;