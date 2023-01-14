import ISong from "../interfaces/song.interface";

export default function SearchedSong() {
    return (
        <div className="flex flex-row justify-left p-3 text-2xl text-white">
            <img width="200px" src="https://e-cdn-images.dzcdn.net/images/cover/d0978b87848cf73e5a1b75abc5483a3f/264x264-000000-80-0-0.jpg" alt="song image" />
            <div className="flex flex-col justify-left text-2xl ml-16 text-white ">
                <span className="flex">SONG NAME</span>
                <span className="flex">ARTIST NAME on ALBUM NAME </span> 
                <span className="flex">RELEASE DATE</span>
            </div>
        </div>
    )
}