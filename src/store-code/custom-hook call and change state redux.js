import React, { useState, useMemo } from 'react';
import {connect} from 'react-redux';
import { MENU_PAGE } from "./constants";
import {setNavigation} from './actions';

function value() {
  console.log("aaa");
  return 5;
}
function getCustom({}) {
  console.log("bbbbb");
  return function useCustomHook({}) {
    const [value, setValue] = useState(0);
    console.log("aaaaaaa");
    
    return {value, setValue};
  }
}

const use = getCustom({});

function App({state, changeNavigationToMenu}) {
  const [state1, setState1] = useState(1);
  // const b = useMemo(() => {
  //   const a = value();
  //   return a;
  // }, []);;
  const b = use({});

  return (
    <div className="App">
      hahahaha
      {JSON.stringify(state)}
      <button onClick={changeNavigationToMenu}>Change</button>
      <button onClick={() => setState1((value) => value + 1)}>{state1}</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {state: state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeNavigationToMenu: () => {dispatch(setNavigation(MENU_PAGE))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
