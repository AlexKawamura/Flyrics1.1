import { BrowserRouter, Route, Switch } from 'react-router-dom';

import List from './pages/List';
import NewMusic from './pages/NewMusic';
import Lyric from './pages/Lyric';

function Router() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={List} />
      <Route path="/newMusic" component={NewMusic} />
      <Route path="/lyric/:id" component={Lyric} />
    </Switch>
    </BrowserRouter>
  );
}

export default Router;