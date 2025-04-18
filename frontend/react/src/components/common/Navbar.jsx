
export default function Navbar() {
    return (
        <nav className="h-12 flex justify-between items-center bg-primary text-secondary">
            <a className="h-full px-4 flex items-center text-xl" href="/">Organizer</a>
            <ul className="h-full flex flex-row-reverse items-center">
                <li className="w-24 h-full flex justify-center items-center bg-primary hover:bg-secondary hover:text-primary">
                    <a className="h-full px-4 flex items-center" href="">Profile</a>
                </li>
                <li className="w-24 h-full flex justify-center items-center bg-primary hover:bg-secondary hover:text-primary">
                    <a className="h-full px-4 flex items-center" href="/tools">Tools</a>
                </li>
                <li className="w-24 h-full flex justify-center items-center bg-primary hover:bg-secondary hover:text-primary">
                    <a className="h-full px-4 flex items-center" href="/">Home</a>
                </li>
            </ul>
        </nav>
    );
}