import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Pesquisar</Link>
          </li>
      
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;