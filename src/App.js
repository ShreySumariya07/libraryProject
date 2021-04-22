
import HomePage from './UI/HomePage';
import LoginPage from './UI/Login';
import SignUpPage from './UI/SignUp';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import LoginProvider from './UI/loginContext';
import BookProvider from './UI/bookContext';
function App() {
  return (
    <LoginProvider>
      <BookProvider>
        <Router>
          <Switch>
            <Route path='/signup' component={SignUpPage}></Route>
            <Route path='/homepage' component={HomePage}></Route>
            <Route path='/' component={LoginPage}></Route>
          </Switch>
        </Router>
      </BookProvider>
    </LoginProvider>
  );
}

export default App;
