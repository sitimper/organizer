
export default function LinkButton({className = "", href, children}) {
    className =  `p-2 text-2xl bg-secondary text-primary cursor-pointer` + " " + className;
    return (
        <a className={className} href={href}>
            {children}
        </a>
    );
}