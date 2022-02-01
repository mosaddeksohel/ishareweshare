import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddVideos from './Components/AddVideos/AddVideos';
import MainContent from './Components/MainContent/MainContent';
import SearchField from './Components/SearchField/SearchField';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <SearchField></SearchField>
            <MainContent></MainContent>

          </Route>
          <Route exact path='/addvideos'>
            <AddVideos></AddVideos>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>



        </Switch>




      </BrowserRouter>

    </div>
  );
}

export default App;
