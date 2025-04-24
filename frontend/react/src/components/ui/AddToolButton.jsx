
export default function AddToolButton({ className }) {
    const href = document.location + "/add";
    return (
        <a href={href} className={`size-32 flex justify-center items-center bg-accent cursor-pointer ${className}`}>
            New
        </a>
    );
}