import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
const tasks = ['take out trash', 'take out trash', 'walk dog', 'Go to gym'];
//inside the mapping we are using index to indecate unqiue keys
// const element = React.createElement(
//   'ol',
//   null,
//   tasks.map((task, index) => React.createElement('li', {key: index}, task))
// );

// const element = (
//   <>
//     <List/>
//   </>
// );





ReactDOM.render(<Main/>, document.getElementById('root'));
