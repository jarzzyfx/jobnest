"use client"

import { Button } from "@/components/ui-components/Button";
import Input from "@/components/ui-components/Input";
import { X } from "lucide-react";
import { LucideMessageSquare } from "lucide-react";
import { Apple, Github} from "lucide-react";
import Link from "next/link";
import React, { FC, useState } from "react";

interface PageProps {};

const Page:FC<PageProps> = (props) => {

    const [emailState, setEmailState] = useState(false)
    const [emailView, setEmailView] = useState(true)


    const handleEmailView = (state: string) => {
        if(state == 'register') setEmailView(false)
        if(state == 'login') setEmailView(true)
    }


    const handleEmailState = (state : string) => {
        if ( state == 'open') setEmailState(true)
        if ( state == 'close') setEmailState(false)
    }


    return <div className="w-full flex flex-col pt-10 gap-2 items-center justify-start">
        <div className="w-[70%] h-auto p-4 shadow-sm rounded-md flex flex-col items-center gap-2">
            <h1 className="text-2xl ml-auto mr-auto text-slate-600 font-semibold">Login to your account </h1>

            <div className="w-[60%] mt-4 flex flex-col gap-1 align-center ">
<Link href="/auth.login">
<Button variant="ghost" className="bg-white p-0 h-8 flex gap-8 text-white w-full ring-1 ring-black">
                    <span className="w-6 h-full flex items-center justify-center bg-white ring-1 ring-black "> <Apple className="w-4 h-4 text-black"/> </span>
                    <span className="p-2 ml-auto mr-auto text-black">Sign in with Apple</span>
                </Button>
</Link>
<Link href="/auth.login">
<Button variant="ghost" className="bg-red-500 mt-2 p-0 h-8 flex gap-8 text-white w-full ring-1 ring-red-500">
                    <span className="w-6 h-full flex items-center justify-center bg-white text-red-500"> G </span>
                    <span className="p-2 ml-auto mr-auto">Sign in with Google</span>
                </Button>
</Link>

               {/* divider */}
             <div className="flex gap-1 items-center ml-auto mr-auto mt-4">
             <span className="w-10 h-[1px] bg-slate-600"></span>
                    For developers
                <span className=" w-10 h-[1px] bg-slate-600"></span>
             </div>

             <Link href="/auth.login">
<Button variant="ghost" className="bg-slate-800 mt-4 p-0 h-8 flex gap-8 text-white w-full ring-1 ring-slate-800">
                    <span className="w-6 h-full flex items-center justify-center bg-white text-red-500"> <Github className="w-4 h-4 text-slate-800"/> </span>
                    <span className="p-2 ml-auto mr-auto">Sign in with Github</span>
                </Button>
</Link>

             



            </div>

        </div>
         {/* divider */}
         <div className="flex gap-1 items-center">
             <span className="w-5 h-[3px] bg-slate-600"></span>
                    OR
                <span className=" w-5 h-[3px] bg-slate-600"></span>
             </div>

<Button variant="ghost" className="bg-white p-0 h-8 flex gap-8 text-white w-[40%] ring-1 ring-black disabled:opacity-30 disabled:cursor-not-allowed" disabled={emailState && true} onClick={() => handleEmailState('open')}>
                    <span className="w-6 h-full flex items-center justify-center bg-white ring-1 ring-black "> <LucideMessageSquare className="w-4 h-4 text-black" /> </span>
                    <span className="p-2 ml-auto mr-auto text-black">Email and Password</span>
                </Button>

            {/* login area */}
          {
            emailState  && (
                <section className="flex flex-col gap-4 w-[40%] p-2 rounded-sm" >

                <div className="w-full h-8 flex justify-end " >
                    <Button className="rounded-full w-auto p-2 flex items-center justify-center hover:ring-slate-400" variant="ghost" onClick={() => handleEmailState('close')}>
                        <X className="w-4 h-4 text-black" />
                    </Button>
                </div>

                <header className="w-full flex justify-between p-1 items-center h-10 rounded-sm">
                    <Button className={`w-full bg-transparent hover:bg-blue-50 ${emailView && 'bg-blue-50'} h-full text-xs text-slate-900 rounded-sm`} onClick={() => handleEmailView('login')}>Login to Account</Button>
                    <Button className={`w-full bg-transparent hover:bg-blue-50 ${!emailView && 'bg-blue-50'} h-full text-xs text-slate-900 rounded-sm`} onClick={() => handleEmailView('register')} >Regiester Account</Button>
                </header>
{/* -translate-x-[50%]   */}

              <section className="w-full overflow-hidden">
              <main className={`w-[200%] flex transition ease ${!emailView && '-translate-x-[50%]'}`}>
                    <form className="w-full flex flex-col gap-2" action="">
                        <Input className="w-full" fieldClassName="ring-none" inputName="user-email" label="Your Email" type="email" key={1} placeHolder="yourmail@gmail.com"/>
                        <Input className="w-full" fieldClassName="ring-0" inputName="user-password" label="Your Password" type="password" key={2} placeHolder="Login123£"/>
                        <Button variant="default">Login to your account</Button>
                    </form>
                    <form className="w-full flex flex-col overflow-auto gap-2" action="">
                    <Input className="w-full" inputName="user-fullName" label="Your Fullname" type="text" key={3} placeHolder="John Doe"/>
                    <Input className="w-full" inputName="user-email" label="Your Email" type="email" key={4} placeHolder="yourmail@gmail.com"/>
                    <Input className="w-full" inputName="user-password" label="Your Password" type="password" key={5} placeHolder="Login123£"/>
                    <Input className="w-full" inputName="user-password-confirmation" label="Confirm Your Password" type="password" key={6} placeHolder="Login123£"/>
                    <Button variant="default">Login to your account</Button>
                    </form>
                </main>
              </section>
            </section>
            )
          }
    </div>
};

export default Page;