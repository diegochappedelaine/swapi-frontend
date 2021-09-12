import { Switch, Route } from "react-router-dom";
import {
  HomePage,
  CharacterPage,
  FilmPage,
  PlanetPage,
  SpeciePage,
  StarshipPage,
  VehiclePage,
} from "pages";

const App = () => {
  return (
    <Switch>
      <Route path="/planets/:id" component={PlanetPage} exact />
      <Route path="/films/:id" component={FilmPage} exact />
      <Route path="/vehicles/:id" component={VehiclePage} exact />
      <Route path="/starships/:id" component={StarshipPage} exact />
      <Route path="/people/id" component={CharacterPage} exact />
      <Route path="/species/:id" component={SpeciePage} exact />
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default App;
