"use client"

import { Search } from "lucide-react";
import React, { FC, useState } from "react";

interface SearchBarProps {};

const dummyArray = [
    {name:"jolloy", desc: "we suppose de rel" },
    {name:"david", desc: "go cary your pikins" },
    {name:"jobs", desc: "employment issues," },
    {name:"negro", desc: "about slaves" }
]

const SearchBar:FC<SearchBarProps> = (props) => {

    const [activeSearch, setActiveSearch] = useState([])

    const handleSearch = (e : any) => {
        if(e.target.value == ''){
            setActiveSearch([])
            return false
        }
        console.log('h')
        setActiveSearch(dummyArray.filter(word => word.name.includes(e.target.value)).slice(0,0))
    }

    return <div className="relative pl-6 pr-2 w-6 h-6 flex items-center justify-between rounded-sm cursor-pointer ring-1 ring-blue-700 hover:w-[150px] focus-within:w-[150px] transition ease-out" ><Search className="absolute left-1 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-700 mr-2"/> 
    <input type="text" onChange={(e) => handleSearch(e)} className="h-full w-full border-none outline-none text-xs focus:text-blue-700 bg-transparent" placeholder="Search..." />

    {
        activeSearch.length > 0 && (
            
    <div className="absolute -bottom-0 translate-y-[110%] left-0 p-2 w-full bg-white shadow-md flex flex-col gap-2 ">
       
       { activeSearch.map(s => {
        return <span key={s}>{s}</span>
       })}
    </div>
        )   }
    </div>
};

export default SearchBar;