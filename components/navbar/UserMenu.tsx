'use client'
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
interface UserProps {
    currentUser: User | null | undefined
}
const UserMenu: React.FC<UserProps> = ({ currentUser }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="relative cursor-pointer">
            <div onClick={() => setShowMenu(!showMenu)}>
                <FaRegUser size={22} color="#fff" />
            </div>
            {showMenu && (
                <ul className="absolute top-10 right-0 bg-white w-[150px] z-[50] shadow-md">
                    {currentUser ? (
                        <>
                            <li className="border-b border-border-gray text-sm" >
                                <Link className="py-2 px-4 w-full h-full block" href='/profile'>Profile</Link>
                            </li>
                            <li className="border-b border-border-gray text-sm" >
                                <Link className="py-2 px-4 w-full h-full block" href='/orders'>Orders</Link>
                            </li>
                            {currentUser.role === "ADMIN" && (
                                <li className="border-b border-border-gray text-sm" >
                                    <Link className="py-2 px-4 w-full h-full block" href='/dashboard'>Dashboard</Link>
                                </li>
                            )}
                            <li className="py-2 px-4 text-sm" onClick={() => signOut()}>
                                Sign out
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="border-b border-border-gray text-sm" >
                                <Link className="py-2 px-4 w-full h-full block" href='/login'>Sign in</Link>
                            </li>
                            <li className="text-sm">
                                <Link className="py-2 px-4 w-full h-full block" href='/register'>Sign up</Link>
                            </li>
                        </>
                    )}
                </ul>
            )}
        </div>
    )
}

export default UserMenu