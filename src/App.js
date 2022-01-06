import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './servicesContext/history';
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
import Ingredients from './pages/Ingredients';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router history={ history }>
      <Switch>
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route path="/receitas-feitas" component={ RecipesDone } />
        <Route path="/explorar/bebidas/area" component={ NotFound } />
        <Route path="/explorar/comidas/area" component={ FoodsLocals } />
        <Route path="/perfil" component={ Profile } />
        <Route path="/explorar/comidas/ingredientes/:id" component={ Ingredients } />
        <Route path="/explorar/bebidas/ingredientes/:id" component={ Ingredients } />
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
    </Router>
  );
}

export default App;
