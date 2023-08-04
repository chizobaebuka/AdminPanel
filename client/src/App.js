import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import login from './pages/loginPage/loginPage';
import singlePage from './pages/singlePage/singlePage';
import newPage from './pages/newPage/newPage';
import List from "./pages/list/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="login" element={<loginPage/>} />
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<singlePage/>}/>
              <Route path="new" element={<newPage/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<singlePage/>}/>
              <Route path="new" element={<newPage/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
