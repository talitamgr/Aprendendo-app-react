import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import React, {Component} from 'react';


class App extends Component{

  state = {
    username : [
      'Talita',
      'Artur',
      'Arwen'
    ]
  }

  usernameChangeHandler = (event) =>{
    this.setState({username: [event.target.value , 'Brizês', 'Calopsyta']})

  }


  render() {
  return (
    <div className="App">

      <UserInput changed={this.usernameChangeHandler} 
       />
      <UserOutput userName = {this.state.username[0]}/>
      <UserOutput userName = {this.state.username[1]}/>
      <UserOutput userName = {this.state.username[2]}/>
      
    </div>
  );
  }
}

export default App;
