
import './Topbar.css'
import './Home.css'
import { Link } from '@mui/material'
import Login from '../Login/Login'


const Topbar = (props) => {
  return (
    <div className='topbar' >
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">
          pEtNeT
          </span>
        </div>
       
        <div className='topright'>
          
          <button><Link to='/'>Log Out</Link></button>
         
        </div>

      </div>
    </div>
  )
}

export default Topbar