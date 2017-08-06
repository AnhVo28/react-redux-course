import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import * as PlayerActionCreator from '../actions/player';
import Stopwatch from '../components/Stopwatch'
import Stats from '../components/Stats';
import Counter from '../components/Counter'
import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Player from '../components/Player';
import { connect } from 'react-redux';


class Scoreboard extends Component{


  render() {

    const {dispatch, players} = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreator.addPlayer, dispatch)
    const removePlayer = bindActionCreators(PlayerActionCreator.removePlayer, dispatch)
    const updatePlayerScore = bindActionCreators(PlayerActionCreator.updatePlayerScore, dispatch)

    const playerComponents = players.map((player, index)=>(
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        removePlayer ={removePlayer}
        updatePlayerScore = {updatePlayerScore}
        />
    ))
    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
};

const mapStateToProps = state => (
  {
    players: state
  }
)


export default connect(mapStateToProps)(Scoreboard)
