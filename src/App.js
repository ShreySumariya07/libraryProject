
import HomePage from './UI/HomePage';
import LoginPage from './UI/Login';
import SignUpPage from './UI/SignUp';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import LoginProvider from './UI/loginContext';
import BookContextProvider from './UI/bookContext';
function App() {
  return (
    <LoginProvider>
     <BookContextProvider>
        <Router>
          <Switch>
            <Route path='/signup' component={SignUpPage}></Route>
            <Route path='/homepage' component={HomePage}></Route>
            <Route path='/' component={LoginPage}></Route>
          </Switch>
        </Router>
        </BookContextProvider>
    </LoginProvider>
  );
}

export default App;
