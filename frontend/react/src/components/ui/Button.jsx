
export default function Button({className = "", onClick, children}) {
    className =  `p-2 text-2xl bg-secondary text-primary cursor-pointer` + " " + className;
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}