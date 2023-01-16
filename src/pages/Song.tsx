import { useState } from "react";
import { FaRegBell, FaRegIdBadge } from "react-icons/fa";
import Searchbar from "../components/searchbar";
import SearchedSong from "../components/searchedsong";
import SongDisplay from "../components/songdisplay";
// import ISong from "../interfaces/song.interface";

export default function Song() {

    // const [songData, setSongData] = useState<ISong[]>([]);

    // if(songData.length === 0){
    //     return(
    //         <div className="flex w-screen h-screen bg-green-400 " style={{backgroundImage: "url('https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80')"}} >
    //     <div className="w-full h-full backdrop-blur-xl " style={{background: "rgba(0, 0, 0, 0.5)"}}>
    //         <div className="flex w-full  h-full flex-col items-center">
                
    //             <div className="flex w-1/3 justify-center mt-10"><Searchbar/></div>

    //             <div className="flex w-1/2 h-1/3 bg-yellow-500 mt-12">
    //                 <SearchedSong></SearchedSong>
    //             </div>

    //             <div className="flex w-3/4 h-2/5 mt-8 bg-green-400"> 
    //                 <SongDisplay></SongDisplay>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    //     )
    // }
    return (
    <div className="flex w-screen h-screen bg-green-400 " style={{backgroundImage: "url('https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80')"}} >
        <div className="w-full h-full backdrop-blur-xl " style={{background: "rgba(0, 0, 0, 0.5)"}}>
            <div className="flex w-full  h-full flex-col items-center">
                
                <div className="flex w-1/3 justify-center mt-10"><Searchbar/></div>
                
                <div className="flex w-2/5 h-52 mt-12">
                    {/* {songData.map((song:ISong) =>( */}
                        <SearchedSong
                            // key={song.songID}
                            // songID={song.songID}
                            // songName={song.songName}
                            // releaseDate={song.releaseDate}
                            // closeness={song.closeness}
                            // artists={song.artists}
                            // album={song.album}
                            // explicit={song.explicit}
                            // imageURL={song.imageURL}
                        />
                    {/* ))} */}
                </div>

                <div className="flex w-1/2 h-1/2 mt-8 "> 
                    {/* {songData.map((song:ISong) =>( */}
                        <SongDisplay
                            // key={song.songID}
                            // songID={song.songID}
                            // songName={song.songName}
                            // releaseDate={song.releaseDate}
                            // closeness={song.closeness}
                            // artists={song.artists}
                            // album={song.album}
                            // explicit={song.explicit}
                            // imageURL={song.imageURL}
                        />
                    
                    
                    {/* ))} */}
                </div>
                <div className="flex w-1/6 h-14 bg-green-400 items-center justify-center text-3xl text-white rounded-3xl font-bold" onClick={() => alert("Helloworld")}>
                    <span>SHOW MORE</span>
                </div>

                
            </div>
        </div>
    </div>
    
    )

}
        