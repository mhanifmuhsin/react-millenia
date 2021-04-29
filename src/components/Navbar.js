import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxes } from '@fortawesome/free-solid-svg-icons'
import routes from './routes'

const Navbar = () => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='#' className="navbar-brand" href="#">Millenia</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/'className="nav-link" href="#"><FontAwesomeIcon icon={faBoxes} />Data Barang <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>

                </div>
            </nav>
            <div>
                <Switch>
                    {routes.map((route, i) => {
                        const {
                            path,
                            Component
                        } = route
                        return <Route key={i} path={path}>
                            <Component />
                        </Route>
                    })}
                </Switch>
            </div>
        </React.Suspense>
    )

}

export default Navbar