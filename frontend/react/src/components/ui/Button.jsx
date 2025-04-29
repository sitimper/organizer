
const widthMap = {
    12: "w-12",
    16: "w-16",
    20: "w-20",
    24: "w-24",
    28: "w-28",
    32: "w-32",
    48: "w-48",
};

const heightMap = {
    12: "h-12",
    16: "h-16",
    20: "h-20",
    24: "h-24",
    28: "h-28",
    32: "h-32",
    48: "h-32",
};

export default function Button({ width, height, type, onClick, children }) {
    return (
        <button className={`${widthMap[width]} ${heightMap[height]} p-2 text-2xl
        bg-secondary text-primary cursor-pointer`} type={type} onClick={onClick}>
            {children}
        </button>
    );
}