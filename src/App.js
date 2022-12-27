import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './component/Home/Home';
import UserProvider from './component/UserProvider';
import { Delete } from './component/Delete';
import { Read } from './Read/Read';
import { Create } from './component/Create/Create';
import Edit from './component/Edit/Edit';
function App() {
  return (
    <div className="App">
      <UserProvider>
         <BrowserRouter>
      <Routes>
      <Route path="/edit/:id" element={<Edit />}>
        </Route>

      <Route path="/create" element={<Create />}>
        </Route>
      <Route path="/read/:id" element={<Read />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/delete/:id" element={<Delete />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
    </div>
  );
}

export default App;
