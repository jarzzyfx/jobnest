"use client"

import { cn } from "@/lib/utils";
import { cva , VariantProps} from "class-variance-authority";
import { Loader2 } from "lucide-react";
import React, { ButtonHTMLAttributes, FC, useState } from "react";

const ButtonVariant = cva(
    "pt-2 pr-4 pb-2 pl-4 bg-inherit text-gray-500 font-semibold text-xs border-none outline-none rounded-sm capitalize",
   { variants: {
        variant: {
        default : "bg-blue-700 text-white",
        ghost : "bg-transparent ring-1 ring-transparent text-blue-700 hover:ring-blue-700 "
        },
        
    },
    defaultVariants:{
        variant:"default"
    }
}
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariant> {
    children : any
};

const Button:FC<ButtonProps> = ({children, variant, className, ...props}) => {

    const [isClicked, setIsClicked] = useState(false)

    return <button className={cn(ButtonVariant({variant,className}))} {...props} >
        {
            isClicked ? <Loader2 className="h-4 w-4 animate-spin ease" /> : null
        }
        {children}
        </button>
};

export {
    Button, 
    ButtonVariant
};