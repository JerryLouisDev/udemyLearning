import React, {Component} from 'react';
import List from './List';
import Title from './Title';

class Main extends Component{
    render(){
      return(
        <>
          <Title title={<h1>To Do List</h1>}/>
          <List tasks={['Go for walk', 'clean house']}/>
          <List tasks={['Go to the market', 'clean car']}/>
        </>
      )
    }
  }
  export default Main