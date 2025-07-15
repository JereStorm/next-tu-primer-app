import Link from "next/link"
import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from "../active-link/ActiveLink"


const navItems = [
    {
        path: "/", text: "Home"
    },
    {
        path: "/contacto", text: "Contacto"
    },
]

export const Navbar = () => {
    return (
        <nav className="flex w-[100%] px-5 mb-10 bg-[#101010] py-3 text-center items-center justify-between">
            <Link href={'/'} className="w-[100px] flex items-center gap-1">
                <HomeIcon size={16} /> Home
            </Link>


            <div className="flex gap-1">

                {
                    navItems.map(navItem => (

                        <ActiveLink key={navItem.path} {...navItem} />
                    ))
                }

            </div>


        </nav>
    )
}
