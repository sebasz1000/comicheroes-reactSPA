import { Link, NavLink, useParams, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate()
    const params = useParams()
    //const currentPublisher = params['*'].split('/')[1].split('-')[0]


    const getActive = ({ isActive }) => {
        return `nav-item nav-link ${isActive ? 'active' : ''}`
    }

    const onLogout = () => {
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-3">
            <div className="container-fluid">


                <Link
                    className="navbar-brand"
                    to="/">
                    Asociaciones
                </Link>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-between justify-content-start" id="navbarNav">
                    <div className="navbar-nav">
                        <NavLink
                            className={getActive}
                            to="/marvel"
                            id='marvel'
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            className={getActive}
                            to="/dc"
                            id='dc'
                        >
                            DC
                        </NavLink>
                        <NavLink
                            className={getActive}
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                    <hr className="border-white d-md-none" />
                    <ul className="navbar-nav ">
                        <span className='nav-item nav-link text-white text-center align-self-center fw-light fs-6 '>
                            Sbz
                        </span>
                        <button className='nav-item nav-link btn btn-outline-light my-3 ml-4'
                            onClick={() => onLogout()}>
                            Logout
                        </button>
                    </ul>
                </div>{/* collapsable */}
            </div>{/* container */}
        </nav >
    )
}
