import { FaRegBell, FaRegIdBadge } from "react-icons/fa";
import Searchbar from "../components/searchbar";

export default function Home() {
    return (
        <div className="w-screen h-screen"  style={{backgroundImage: "url('https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80')"}}>
            <div className="w-full h-full backdrop-blur-xl" style={{background: "rgba(0, 0, 0, 0.5)"}}>
                <div className="flex flex-col items-center">

                    <div className="flex flex-row justify-center text-5xl text-white font-bold mt-48" >
                        <img className="flex" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" style={{width: 100, height:100}}></img>
                        <span className="mt-6 pl-8 text-green-600">Spotify <span className="mt-6 text-white">Reccomender</span> </span>
                        
                    </div>

                    <div className="flex justify-center text-3xl text-white mt-16">
                        Find your new favorite music now!
                    </div>
                    <form className="flex w-1/2 justify-center text-3xl text-white mt-16">
                        <Searchbar></Searchbar>
                    </form>

                    
                </div>
            </div>
        </div>
    )
}