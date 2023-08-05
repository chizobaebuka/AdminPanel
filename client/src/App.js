import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPage from './pages/newPage/newPage';
import List from "./pages/list/List";
import Single from "./pages/singlePage/singlePage";
import LoginPage from './pages/loginPage/loginPage';
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single />}/>
              <Route path="new" element={<NewPage inputs={userInputs} title="Add New User" />}/>
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<singlePage/>}/>
              <Route path="new" element={<NewPage inputs={productInputs} title="Add New Product" />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
