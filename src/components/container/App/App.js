import { Route, Routes, useParams } from 'react-router-dom';
import Err404Page from '../../pages/404/Err404Page';
import HomePage from '../../pages/Home/HomePage';
import LoginPage from '../../pages/Login/LoginPage';
import PostPage from '../../pages/Post/PostPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/post/:id' element={<PostPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/:a/:b/:c' element={<Example />} />
      <Route path='*' element={<Err404Page />} />
    </Routes>
  );
}

export default App;


function Example() {
  const {a,b,c} = useParams();
  return (<ul>
    <li>{a}</li>
    <li>{b}</li>
    <li>{c}</li>
  </ul>);
}
