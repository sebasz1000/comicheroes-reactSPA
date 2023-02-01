import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate()

    const getActive = ({ isActive }) => {
        return `nav-item nav-link ${isActive ? 'active' : ''}`
    }

    const onLogout = () => {
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={getActive}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={getActive}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>Sbz</span>
                    <button className='nav-item nav-link btn'
                        onClick={() => onLogout()}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}