import { Link } from 'react-router-dom';
import { PATHS } from './constants';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <div className="navbar-brand">Navbar</div >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to={PATHS.SIMPLE_FORM}>Simple Form</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={PATHS.TEMP}>Temp</Link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
);

export default Header;

