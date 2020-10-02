import React from 'react';
import './Nav.css'

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper">
              <div>
              <h1><a href="/">Jam-In</a></h1>
              {/* <h3>Welcome, {user.name}</h3> */}
              </div>
            <table>
              <tbody>
                  <tr>
                    <td className="tdL">
                      <a href="/createevent" className="nav-link">Create Event</a>
                    </td>
                    
                    <td>
                    <td className="tdL">
                      <a href='/profile/' className="nav-link">My Events</a>
                    </td>
                    </td>
                    
                    <td>
                      
                    </td>
                    <td className="tdL">
                      <a href=" " className="nav-link" onClick={handleLogout}>Log Out</a>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </nav>
      :
      <nav>
        <div className="nav-wrapper">
        <a href='/'><img src='https://via.placeholder.com/80/FFFFFF/000000' alt='logo'/></a>
          <h1>Jam-In</h1>
            <table>
            <tbody>
                <tr>
                  <td className="tdL">
                    <a href="/login" className="nav-link">Log In</a>
                  </td>
                  <td className="tdL">
                    <a href="/signup" className="nav-link">Sign Up</a>
                  </td>
                </tr>
            </tbody>
            </table>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
