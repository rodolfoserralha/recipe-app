import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Drinks from './pages/Drinks';
import DrinkRecipe from './pages/DrinkRecipe';
import DrinkInProgress from './pages/DrinkInProgress';
import DrinksIngredient from './pages/DrinksIngredient';
import Foods from './pages/Foods';
import FoodRecipe from './pages/FoodRecipe';
import FoodInProgress from './pages/FoodInProgress';
import FoodsIngredient from './pages/FoodsIngredient';
import FoodsLocals from './pages/FoodsLocals';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoods from './pages/ExploreFoods';
import RecipesDone from './pages/RecipesDone';
import FavoriteRecipes from './pages/FavoriteRecipes';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route path="/receitas-feitas" component={ RecipesDone } />
        <Route path="/explorar/comidas/area" component={ FoodsLocals } />
        <Route path="/perfil" component={ Profile } />
        <Route path="/explorar/bebidas/ingredientes" component={ DrinksIngredient } />
        <Route path="/explorar/comidas/ingredientes" component={ FoodsIngredient } />
        <Route path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route path="/explorar/comidas" component={ ExploreFoods } />
        <Route path="/explorar" component={ Explore } />
        <Route path="/bebidas/:id/in-progress" component={ DrinkInProgress } />
        <Route path="/comidas/:id/in-progress" component={ FoodInProgress } />
        <Route path="/bebidas/:id" component={ DrinkRecipe } />
        <Route path="/comidas/:id" component={ FoodRecipe } />
        <Route path="/bebidas" component={ Drinks } />
        <Route path="/comidas" component={ Foods } />
        <Route path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
