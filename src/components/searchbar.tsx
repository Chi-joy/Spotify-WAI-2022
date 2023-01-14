import {RiSearch2Line} from 'react-icons/ri'

export default function Searchbar() {
    return (
        <div className="flex flex-row cursor-text transition ease-in-out delay-10 w-1/2 h-16 bg-opacity-30 rounded-lg items-center text-white text-2xl border-white border-2">
            <span className="flex relative items-center ml-4 text-white text-3xl "><RiSearch2Line /></span>
            <input type="text" id="search" className='w-full h-full px-4 bg-transparent hover:border-transparent focus:outline-none outline-none placeholder:text-white placeholder:text-2xl' placeholder='Type in a song...'></input> 
        </div>
    )
}