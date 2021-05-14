
import HomePage from './UI/HomePage';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import LoginProvider from './UI/loginContext';
import BookContextProvider from './UI/bookContext';
import LoginPage from './UI/Login';
import SignUpPage from './UI/SignUp';

function App() {
  return (
    <LoginProvider>
     <BookContextProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={LoginPage}></Route>
            <Route exact path='/signup' component={SignUpPage}></Route>
            <Route exact path='/homepage' component={HomePage}></Route>
          </Switch>
        </Router>
        </BookContextProvider>
    </LoginProvider>
  );
}

export default App;
