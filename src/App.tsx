import { BrowserRouter, Routes, Route } from "react-router-dom";

//views
import Main from "../src/views/Main";
import Users from "./views/Users";

// import LoadingComponent from 'views/components/utils/LoadingComponent';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main />} />
        <Route path="/users" element={<Users /> } />
        <Route path="/users/:nationality" element={<Users /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
