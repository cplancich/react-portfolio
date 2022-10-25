export const Navigation = () => {
    return (
    <div className="bg-[#162A42] text-[#A4AAB5] flex">
        <h1 className="p-3 font-bold">Colin's Portfolio</h1>
        <nav className="ml-auto flex">
            <a href="#About" className="p-2 hover:bg-[#213E4C]">About</a>
            <a href="#Portfolio" className="p-2 hover:bg-[#213E4C]">Portfolio</a>
            <a href="#Contact" className="p-2 hover:bg-[#213E4C]">Contact</a>
        </nav>
    </div>
    )
}