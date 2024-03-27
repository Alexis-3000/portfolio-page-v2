import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from "./views/Home"
import CalmVersion from "./views/CalmVersion"
import About from "./views/About"
import PageNotFound from "./views/PageNotFound"

function App() {

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
