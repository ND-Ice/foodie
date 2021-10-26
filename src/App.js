import styled from "styled-components";
import { Route, Switch } from "react-router";
import { NavBar, ScrollToTop } from "./components";
import {
  About,
  AllRecipes,
  Breakfast,
  Connect,
  Dinner,
  Explore,
  Home,
  Lunch,
  Search,
  Snacks,
  Teatime,
} from "./pages";
import RecipeDetails from "./pages/RecipeDetails";

export default function App() {
  return (
    <Container>
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route path="/explore" component={Explore} />
        <Route path="/connect-with-us" component={Connect} />
        <Route path="/about-us" component={About} />
        <Route path="/all-recipes" component={AllRecipes} />
        <Route path="/breakfast" component={Breakfast} />
        <Route path="/lunch" component={Lunch} />
        <Route path="/dinner" component={Dinner} />
        <Route path="/snacks" component={Snacks} />
        <Route path="/teatime" component={Teatime} />
        <Route path="/search-recipe" component={Search} />
        <Route path="/recipe-details/:path" component={RecipeDetails} />
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  );
}

const Container = styled.section``;
