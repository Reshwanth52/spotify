import { Song } from "../models/song";

const getAllSongs=async(req,res)=>{
 try{
    const songs=await Song.find({})
    res.status(200).json({songs})
 }
 catch(err){
    res.status(500).json({err})
 }
}

const getSong=async(req,res)=>{
    const {songName}=req.params;
    try{
       const allSongs=await Song.find({})

       const songs=allSongs.filter(song=>song.include(songName))

       res.status(200).json({songs})
    }
    catch(err){
       res.status(500).json({err})
    }
   }