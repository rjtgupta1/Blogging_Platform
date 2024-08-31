import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Blog from './components/Blog';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import SingleBlog from './pages/SingleBlog';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/admin' Component={AdminLogin} />
          <Route path='/admin/dashboard' element={ <ProtectedRoute Component={AdminDashboard} /> } />
          <Route path='/admin/dashboard/create-blog' element={ <ProtectedRoute Component={Blog} /> } />
          <Route path='/blog/:id' element={ <SingleBlog /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
