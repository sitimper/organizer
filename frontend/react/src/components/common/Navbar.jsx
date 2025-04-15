
export default function Navbar() {
    return (
        <nav className="h-12 flex justify-end items-center bg-secondary">
            <ul className="h-full flex flex-row-reverse items-center">
                <li className="w-24 h-full flex justify-center items-center bg-secondary text-primary hover:bg-primary hover:text-secondary">
                    <a className="h-full px-4 flex items-center" href="">Profile</a>
                </li>
                <li className="w-24 h-full flex justify-center items-center bg-secondary text-primary hover:bg-primary hover:text-secondary">
                    <a className="h-full px-4 flex items-center" href="">Functions</a>
                </li>
            </ul>
        </nav>
    );
}