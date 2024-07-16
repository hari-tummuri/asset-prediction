import React, { useState } from 'react';
import '../../App.css';
import Wipro from '../../Assets/Wipro.png';
import live_workspace from '../../Assets/live_workspace.png'
import logout from '../../Assets/logout.png'
import '../Navbar/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar({ userName, userRole }) {
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    // const togglePopup = () => {
    //     setShowPopup(!showPopup);
    // };

    return (
        <div className="Navbar">
            <div className='logo'>
              <img src={live_workspace} alt="Live workspace" />
            </div>
            <div className='logout'>
              <p>Adarsh</p>
              <Link to="/">
                <img className='logout_image'src={logout} alt="Logout" />
              </Link>
            </div>
        </div>
    )
}
export default Navbar;
