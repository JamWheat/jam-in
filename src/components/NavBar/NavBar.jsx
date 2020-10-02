import React, {useState} from 'react';
import './Nav.css'

const NavBar = ({ user, handleLogout }) => {

  const [clickState, setClick] = useState(1)

  function offOn()
  {
      clickState===1?setClick(2):setClick(1)
  }
  function checkState(a,b)
  {
    if(clickState===1){return a}
    else{return b}
  }
    return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper">
              <a href='/'><img src='https://via.placeholder.com/80/FFFFFF/000000' alt='logo'/></a>
              <div>
              <h1>Jam-In</h1>
              <h3>Welcome, {user.name}</h3>
              </div>
            <button className={checkState('menuBtn','menuBtn1')} onClick={()=>offOn()}>|||</button>
            <table className={checkState('menu','menu1')}>
            <tbody>
                <tr>
                  <td className="tdL">
                    <a href={'/profile/'+user._id} className="nav-link">My Profile</a>
                  </td>
                </tr>
                <tr>
                  <td className="tdL">
                    <a href="/createevent" className="nav-link">Create an Event</a>
                  </td>
                </tr>
                <tr>
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
            <button className={checkState('menuBtn','menuBtn1')} onClick={()=>offOn()}>|||</button>
            <table className={checkState('menu','menu1')}>
            <tbody>
                <tr>
                  <td className="tdL">
                    <a href="/login" className="nav-link">Log In</a>
                  </td>
                </tr>
                <tr>
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
