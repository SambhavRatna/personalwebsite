import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
    const location = useLocation();

    return (
        <nav>
            <div style={{ marginLeft: "120px" }}> 
                <Link 
                    to="/" 
                    className={location.pathname === "/" ? "navbar-link active" : "navbar-link"}
                >
                    Ratna
                </Link>
            </div>

            <div style={{ display: "flex", gap: "60px", marginRight: "80px" }}>
                <Link 
                    to="/details" 
                    className={location.pathname === "/details" ? "navbar-link active" : "navbar-link"}
                >
                    Details
                </Link>
                <Link 
                    to="/projects" 
                    className={location.pathname === "/projects" ? "navbar-link active" : "navbar-link"}
                >
                    Projects
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
