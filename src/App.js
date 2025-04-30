import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Create_user from './Components/Create_user';
import Users from './Components/Users';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Home></Home>
      <Routes>
      
        <Route path='/Create_user' element={<Create_user></Create_user>}></Route>
        <Route path='/Users' element={<Users></Users>}></Route>
        

      </Routes>
      </BrowserRouter>

 
    </div>
  );
}

export default App;
