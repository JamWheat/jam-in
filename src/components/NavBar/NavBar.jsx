import React from 'react';
import './Nav.css'

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper">
              <div>
              <h1><a href="/">JamIn</a></h1>
              {/* <h3>Welcome, {user.name}</h3> */}
              </div>
            <table>
              <tbody>
                  <tr>
                    <td className="tdL">
                      <a href="/createevent" className="nav-link btn btn-yellow">Create Event</a>
                    </td>
                    
                    <td>
                    <td className="tdL">
                      <a href='/profile/' className="nav-link btn btn-green" >My Events</a>
                    </td>
                    </td>
                    
                    <td>
                      
                    </td>
                    <td className="tdL">
                      <a href=" " className="nav-link btn btn-black" onClick={handleLogout}>Log Out</a>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </nav>
      :
      <nav>
        <div className="nav-wrapper">
          <h1><a href="/">JamIn</a></h1>
            <table>
            <tbody>
                <tr>
                  <td className="tdL">
                    <a href="/login" className="nav-link btn btn-black">Log In</a>
                  </td>
                  <td>
                      
                  </td>
                  <td className="tdL">
                    <a href="/signup" className="nav-link btn btn-black">Sign Up</a>
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
