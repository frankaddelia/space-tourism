import { Fragment } from "react"
import { Link, Outlet } from "react-router-dom"

const Navigation = () => {
    return (
        <Fragment>
            <nav>
                <Link className="logo-container" to="/">
                    <img src="" alt="Logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/link">
                        Link (template)
                    </Link>
                </div>
            </nav>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
