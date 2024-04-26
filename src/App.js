// import logo from './logo.svg';
import './App.css';
import Navbar from './main/Navbar';
import Time from './pages/Time';
import Date from './pages/Date';
import Note from './pages/Note';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// Link,
// NavLink,
// createBrowserRouter,
// createRoutesFromElements,
// RouterProvider

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* 元件內有LINK，ROURER作用必須包在BrowserRouter */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Time/>} />
          <Route path="/note" element={<Note/>}></Route>
          <Route path="/date" element={<Date/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Time/> */}
    </div>
  );
}

export default App;
