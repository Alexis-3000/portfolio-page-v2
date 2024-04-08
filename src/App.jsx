import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from "./views/Home"
import CalmVersion from "./views/CalmVersion"
import About from "./views/About"
import PageNotFound from "./views/PageNotFound"
import { GlobalContext } from "./contexts/GlobalContext";

function App() {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    function handleResize() {
      dispatch({ type: "setScreenWidth"})
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/calm" element={<CalmVersion />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Route>
    </Routes>
    </>
  )
}

export default App
