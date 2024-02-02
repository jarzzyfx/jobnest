"use client"

import { cn } from "@/lib/utils";
import React, { FC, useState } from "react";

interface InputProps {
    label: string
    placeHolder?: string
    type: string
    inputName : string
    className?: string
    fieldClassName?: string
};

const Input:FC<InputProps> = ({label,placeHolder,type,inputName, className, fieldClassName}) => {

    const [val, setVal] = useState("")
    
    const handleChange = (e : any) => {
        setVal(e.target.value)
    }

    return (
        <div className={cn(className, "flex flex-col gap-2")}>
            <label className="text-xs text-slate-900 capitalize" htmlFor={inputName}>{label}</label>
            <input className={cn(fieldClassName, "text-sm bg-blue-50 text-black focus:text-slate-900 h-8 w-auto ring-1 ring-blue-50 focus:ring-slate-900 p-2")} id={inputName} type={type} placeholder={placeHolder && placeHolder} onChange={handleChange} value={val}/>
        </div>
    )
};

export default Input;