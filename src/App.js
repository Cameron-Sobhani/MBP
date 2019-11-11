import React from 'react';
import logo from './logo.svg';
import './App.css';
import PictureOne from './coponents/pictureOne';


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = ({
      
    })
  }

  render(){

    return (
      <div className="App">
        howdy
        <PictureOne />
      </div>
      );
    }
  }

export default App;
