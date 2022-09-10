import React, {useContext, useState} from 'react'
import './Navbar.css'
import {BsSearch} from 'react-icons/bs'
import { UserContext } from '../App'

const Navbar = ({handleSong}) => {

  return (
    <div className='Navbar'>
        <h5>SampleWebsite</h5>
        <input type='search' placeholder='Search by name'  onChange={handleSong} />
        <BsSearch style={{color:'blue', fontSize:'25px'}}/>
    </div>
  )
}

export default Navbar