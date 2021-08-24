import './App.css';
import { Switch, Route } from 'react-router';
import Intro from './screens/Intro/Intro';
import Home from './screens/Home/Home';
import LocalStorage from './screens/LocalStorage/LocalStorage';
import Notifications from './screens/Notifications/Notifications';

function App() {
  return (
    <>
      <Route path="/" exact component={Intro} />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/local-storage" exact  component={LocalStorage} />
        <Route path="/notifications" exact  component={Notifications} />
      </Switch>
    </>
  );
}

export default App;
