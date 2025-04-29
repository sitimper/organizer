
export default function AddButton({ onClick }) {
    return (
        <button className={`size-32 flex justify-center items-center bg-accent cursor-pointer`} onClick={onClick}>
            New
        </button>
    );
}