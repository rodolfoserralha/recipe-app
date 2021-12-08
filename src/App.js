import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Drinks from './pages/Drinks';
import Foods from './pages/Foods';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        {/* <Route path="/receitas-favoritas" component={ Login } />
          <Route path="/receitas-feitas" component={ Login } />
          <Route path="/explorar/comidas/area" component={ Login } />
          <Route path="/explorar/bebidas/ingredientes" component={ Login } />
          <Route path="/explorar/comidas/ingredientes" component={ Login } />
          <Route path="/explorar/bebidas" component={ Login } />
          <Route path="/explorar/comidas" component={ Login } />
          <Route path="/explorar" component={ Login } />
          <Route path="/bebidas/:id/in-progress" component={ Login } />
          <Route path="/comidas/:id/in-progress" component={ Login } />
          <Route path="/bebidas/:id" component={ Feedback } />
          <Route path="/comidas/:id" component={ Game } /> */}
        <Route path="/perfil" component={ Profile } />
        <Route path="/bebidas" component={ Drinks } />
        <Route path="/comidas" component={ Foods } />
        <Route path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
