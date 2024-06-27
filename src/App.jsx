import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import { auth } from "./firebase";
import './App.css';
import { ProtectedRoute } from "./components/protectedRoute";
import { Private } from "./pages/private";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Settings } from "./pages/Settings";



function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home user={user}></Home>}></Route>
        <Route path="/private" element={
          <ProtectedRoute user={user}>
            <Private></Private>
          </ProtectedRoute>
        }
        ></Route>
        <Route index path="/home" element={<Home user={user}></Home>}></Route>
        <Route index path="/about" element={<About user={user}></About>}></Route>
       <Route index path="/settings" element={<Settings user={user}></Settings>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App
