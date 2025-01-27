import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="flex justify-between gap-8 p-4 ">
        <div className="flex gap-5 ">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/project"}>Project</Link>
            <Link href={"/contact"}>Contact</Link>
        </div>
        <div className="flex gap-5" >
            <Link href={"/login"} className="px-4 py-2 border border-black rounded-md hover:bg-black hover:text-white transition">Login</Link>
           
        </div>
        </nav>
);
};