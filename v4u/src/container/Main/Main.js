import React, { Component } from 'react';
import axios from 'axios';

import List from '../../component/List/List';
import Link from 'react-router-dom/Link';

const API = "http://texpertise.in/data.php";

class App extends Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    // fetch(API).then(res => res.json()).then(data => { console.log('dataaa', data)})
    axios.get(API, {
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      // console.log('res', res)
      if (res.status === 200) {
        // console.log('data: ', res);
        const fetchLists = [];
        for (let key in res.data) {
          fetchLists.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ itemList: fetchLists, isLoading: false });
      } else {
        throw new Error('Something went wrong....');
      }
    }).catch(error => this.setState({ error, isLoading: false }));
  }

  showDetailHandler = (event) => {
    const id = event.target.id;
    // fetch('localhost:3000/desc/'+id).then(res => {  console.log(res);}) 
    console.log('id', id);
  }

  render() {
    if(this.state.error){
      return <h1 className="Center">{this.state.error.message}</h1>
    }
    if(this.state.isLoading) {
      return <h1 className="Center"> Loading.... </h1>
    }
    return (
      <div className="container-fluid">
        {/* <button className={classes.Button } onClick = {this.getList}>Show List</button> */}
        <div className="row">
          <List
            items={this.state.itemList}
          />
        </div>
      </div>
    );
  }
}

export default App;
