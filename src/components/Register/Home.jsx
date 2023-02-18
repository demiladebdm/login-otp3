import React from 'react'
import { Link } from "react-router-dom";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

//Import styles and Icons
import './Home.css'

const Home = () => {

  return (  
    <div className='register'>

        <div className="register__header">
          <div className="logo">
              <Link to='/' className='logoLink'>
                <h1 className='logoHeader'>M</h1>
              </Link>
          </div>
          <div className="register__headerText">
            <h1>Select buiness to operate</h1>            
          </div>
        </div>
        <div className="register__containerUp">
          <div className='header__header'>
            <p>POS/Agency Banking</p>
            <h2>Eagle best mobile</h2>
          </div>
            <div className='header__headerC'>
              <button type='submit'>Proceed <KeyboardArrowRightIcon className='icon' /></button>
            </div>              
        </div>
    </div>
)
}

export default Home