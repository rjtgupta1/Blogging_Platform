import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
// import Blog from './components/Blog';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/admin-login' Component={AdminLogin} />
          <Route path='/admin-dashboard' Component={AdminDashboard} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
