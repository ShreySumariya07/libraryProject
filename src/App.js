
import HomePage from './UI/HomePage';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import LoginProvider from './UI/loginContext';
import BookContextProvider from './UI/bookContext';
import SignInForm from './UI/SignInForm';
import SignUpNew from './UI/SignUpNew';
import LoginPage from './UI/Login';
import SignUpPage from './UI/SignUp';

function App() {
  return (
    <LoginProvider>
     <BookContextProvider>
        <Router>
          <Switch>
            <Route path='/' component={LoginPage}></Route>
            <Route path='/signup' component={SignUpPage}></Route>
            <Route path='/homepage' component={HomePage}></Route>
          </Switch>
        </Router>
        </BookContextProvider>
    </LoginProvider>
  );
}

export default App;
