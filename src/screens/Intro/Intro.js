import React from 'react';
import { withRouter } from 'react-router';
import '../../assets/css/styles.scss'
import { NextIcon } from '../../assets/images';

const Intro = ({history}) => {
   return(
       <div className="intro">
           <h1>Your cloud storage safe and sound</h1>
           <img src={NextIcon} alt='next_icon' onClick={() => history.push('/home')} />
       </div>
   )
}

export default withRouter(Intro);