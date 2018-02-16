import React,{ Component }from 'react';

import ShowDesc from '../../component/ShowDesc/ShowDesc';

class Desc extends Component {
    constructor(props){
        super();
        this.state = {}
    }
    render() {
        return (
            <div className="container" style={center}>
                <h2> Description </h2>
                <ShowDesc />
            </div>
        )
    }
}

const center ={
    textAlign: 'center',
}

export default Desc;