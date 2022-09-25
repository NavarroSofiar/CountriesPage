import './App.css';
import { Route } from "react-router-dom";
import LandingPage from '../src/components/LandingPage/LandingPage'
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import  CreateActivity from './components/CreateActivity/CreateActivity';

function App() {
  return (
    <div className="App">
      <Route exact path={'/'} component ={LandingPage}/>
      <Route exact path={'/home'} component={Home}/>
      <Route  exact path={"/countries/:id"} component={Details} />
       <Route  path={"/activities"} component={CreateActivity} /> 
       



    </div>
  );
}

export default App;
