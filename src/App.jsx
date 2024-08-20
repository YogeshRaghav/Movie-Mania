import "./App.css";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";

// import SearchMenu from './mui/SearchMenu'

function App() {
  return (
    <div className="app">
      {/* <SearchMenu/>   */}
      <Routes>
        <Route path = '/' element = {<Main/>}> </Route>
      </Routes>
      {/* <Main/> */}

    </div>
  );
}

export default App;
