import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { UserContext } from '../App'
import './Data.css'

const Data = () => {

    const [list,setList] = useState([])
    const [songName,setSongName]=useState("")
    // const {state, dispatch} = useContext(UserContext)
    const handleSong=(e)=>{
        setSongName(e.target.value)
    }

    useEffect(()=>{
        axios.get("/songs").then(res=>{
            setList(res.data.songs)
        })
    },[])
    useEffect(()=>{
        if(!songName)return;
        axios.get(`/songs/${songName}`).then(res=>{
            setList(res.data.songs)
        })
    },[songName])
  return (

    <div className='Data'>
        <Navbar handleSong={handleSong}/>
        {console.log(list)}
        <div>
            {/* <input type="button" onClick={fetchData} value="Fetch Data" /> */}

            {
                list.filter(item=><li>item</li>)
            }
        </div>
    </div>
  )
}

export default Data