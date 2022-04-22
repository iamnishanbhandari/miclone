import './App.css';
import Navbar from './components/Nav/Navbar';
import PostNav from './components/Nav/PostNav';
import { BrowserRouter, Router } from 'react-router-dom';

function App() {
  return (
    <>    
<Router>
<Navbar/>
<PostNav/>
</Router>
</>
  );
}

export default App;
