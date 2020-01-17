import React, { Component } from 'react';
import Pallet from './Pallet';
import PalletList from './PalletList'
import seedColors from './seedColor';
import { generatePallet } from './colorHelper';
import { Route, Switch } from 'react-router-dom'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  findPallet(id) {
    return seedColors.find(p => p.id === id)
  }
  render() {

    return (
      <Switch>
        <Route exact path="/" render={() => <PalletList pallets = {seedColors}/>} />
        <Route exact path="/pallet/:id" render={(routeParams) =>
          <Pallet
            palette={generatePallet(this.findPallet(routeParams.match.params.id))} />}
        />
      </Switch>
    );
  }
}

export default App;
