import React,{Link} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import FullWidthGrid from './components/Grid.js'
// import SimpleContainer from './components/Container.js'
import save from './pages/save/save';
import MySearch from './components/search/mySearch';
import NoMatch from './pages/Nomatch/NoMatch';
import MyNavbar  from './components/Navbar'
import Search from './pages/search'
import Book from './components/Book'


function App() {
  return (
     
    
    <Router>
      <MyNavbar/>
      <br/>
      <Book/>

      
        
      
       <Switch>
      <Route exact path="/" component={Search}/>
        <Route exact path="/save" component={save}/>
        <Route exact path="/Search" component={Search}/>
        {/* <Route exact path="/Dashboard/:someparam" component={Dashboard}/> */}
        <Route component={NoMatch} />
      </Switch>

    </Router>
    
  );
}

export default App;
































