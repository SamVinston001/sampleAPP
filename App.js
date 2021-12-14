import React, { useContext, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import StackNavigation from './src/navigation/StackNavigation';
import Store from './src/pages/EXForRedux1/Store';
// import MovieContainer from './src/pages/EXForReduxSaga/MovieContainer';
import Page1 from './src/pages/EXForRedux1/page1';

// const store = ConfigStore()
const app = () => {
  return (
    // <StackNavigation/>
    <Provider store={Store}>
      <Page1 /> 
    </Provider>
  );
}
export default app;

// import React, { Component } from 'react';
// import { AppRegistry } from 'react-native';
// //Redux
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';

// import allReducers from './src/pages/EXForReduxSaga/MovieReducers';
// import MovieContainer from './src/pages/EXForReduxSaga/MovieContainer';
// //Redux saga
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './src/pages/EXForReduxSaga/Rootsaga'; 

// const sagaMiddleware = createSagaMiddleware();

// let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
// const App = () => (
//     <Provider store={store}>
//         <MovieContainer />
//     </Provider>
// );

// sagaMiddleware.run(rootSaga);

// export default App;
// 










