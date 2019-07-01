import React, { Component } from 'react';
import Game from './components/Game';
import './App.css';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: 0
    };
  }

  onResetclick = () => {
    this.setState({ gameId: this.state.gameId + 1 });
  };

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Game key={this.state.gameId} onResetclick={this.onResetclick} />
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
