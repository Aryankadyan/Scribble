import { useState } from "react"
import Image from './Image'
import { Link } from "react-router-dom"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
        const [open, setOpen] = useState(false)
        return (
                <div className="w-full h-16 md:h-20 flex items-center justify-between">
                        <Link to='/' className="flex items-center gap-4 text-2xl font-bold">
                                <Image src='logo.png' alt='Scribble Logo' w={32} h={32} />
                                <span>scribble</span>
                        </Link>
                        {/* MOBILE MENU */}
                        <div className="md-hidden">
                                {/* MOBILE BUTTON */}
                                <div className="cursor-pointer text-4xl"
                                        onClick={() => setOpen((prev) => !prev)}>

                                        {/*{open ? "❌" : "☰"} */}

                                </div>
                                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>

                                        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                                        <Link to="/posts?sort=trending" onClick={() => setOpen(false)}>Trending</Link>
                                        <Link to="/posts?sort=popular" onClick={() => setOpen(false)}>Most Popular</Link>
                                        <Link to="/" onClick={() => setOpen(false)}>About</Link>
                                        <Link to="/login" onClick={() => setOpen(false)}>
                                                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                                                        Login 👍
                                                </button>
                                        </Link>
                                </div>
                        </div>
                        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                                <Link to="/">Home</Link>
                                <Link to="/posts?sort=trending">Trending</Link>
                                <Link to="/posts?sort=popular">Most Popular</Link>
                                <Link to="/">About</Link>

                                <SignedOut>
                                        <Link to="/login">
                                                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                                                        Login 👍
                                                        </button>
                                        </Link>
                                </SignedOut>
                                <SignedIn>
                                        <UserButton />
                                </SignedIn>
                        </div>
                </div>
        )
}

export default Navbar
