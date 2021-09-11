import { Switch, Route } from "react-router-dom";
import { HomePage } from "pages";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
};

export default App;
