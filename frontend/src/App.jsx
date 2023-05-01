import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout'
import Login from './pages/Login';

function App() {
  return (
    <>  
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupsPage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/new-meetup' element={<NewMeetupPage />}/>        
          <Route path='/favorites' element={<FavoritesPage />}/>
        </Routes>
      </Layout>

    </>
  );
}

export default App;
