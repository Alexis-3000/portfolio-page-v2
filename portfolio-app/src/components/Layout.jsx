import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
    <header>
        <nav>
            <div className="navbar">
                <NavLink to={"/"}>Studio Pommerenke</NavLink>
                <NavLink to={"calm"}>Calm Version</NavLink>
                <NavLink to={"/about"}>About</NavLink>
            </div>
        </nav>
    </header>
    
    <main>
        <Outlet />
    </main>

    </>
  )
}

export default Layout;