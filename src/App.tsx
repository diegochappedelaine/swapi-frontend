import { Switch, Route } from "react-router-dom";
import {
  HomePage,
  CharacterPage,
  FilmPage,
  PlanetPage,
  SpeciePage,
  StarshipPage,
  VehiclePage,
  CharactersListPage,
  FilmsListPage,
  PlanetsListPage,
  SpeciesListPage,
  StarshipsListPage,
  VehiclesListPage,
} from "pages";
import { Layout } from "components";
import { useScrollToTop } from "hooks";

const App = () => {
  useScrollToTop();
  return (
    <Layout>
      <Switch>
        <Route path="/planets/:id" component={PlanetPage} exact />
        <Route path="/films/:id" component={FilmPage} exact />
        <Route path="/vehicles/:id" component={VehiclePage} exact />
        <Route path="/starships/:id" component={StarshipPage} exact />
        <Route path="/people/:id" component={CharacterPage} exact />
        <Route path="/species/:id" component={SpeciePage} exact />
        <Route path="/peoples" component={CharactersListPage} exact />
        <Route path="/films" component={FilmsListPage} exact />
        <Route path="/planets" component={PlanetsListPage} exact />
        <Route path="/species" component={SpeciesListPage} exact />
        <Route path="/starships" component={StarshipsListPage} exact />
        <Route path="/vehicles" component={VehiclesListPage} exact />
        <Route path="/" component={HomePage} />
      </Switch>
    </Layout>
  );
};

export default App;
