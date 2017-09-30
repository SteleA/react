// @flow
import React, { Component } from 'react';
import style from './App.style.css';
import { connect } from 'react-redux';
import Header from '../../components/header/header.component';

type IState = {
  user: {}
};

class App extends Component {
  state = {}

  render() {
    return (
      <div className={style.appComponent}>
        <Header title="React starter" />
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => ({ user: state.user });
export default connect(mapStateToProps)(App);
