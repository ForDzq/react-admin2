import {HashRouter,Switch,Route} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Admin}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
