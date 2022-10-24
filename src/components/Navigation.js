export const Navigation = () => {
    return (
    <div className="bg-lime-500 text-white flex">
        <h1 className="p-3 font-bold">Colin's Portfolio</h1>
        <nav className="ml-auto flex">
            <a href="#About" className="p-2 hover:bg-yellow-300">About</a>
            <a href="#Portfolio" className="p-2 hover:bg-yellow-300">Portfolio</a>
            <a href="#Contact" className="p-2 hover:bg-yellow-300">Contact</a>
        </nav>
    </div>
    )
}