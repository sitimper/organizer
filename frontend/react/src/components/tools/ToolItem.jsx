
export default function ToolItem({imageUrl, text, url}) {
    return (
        <a className="group" href={url}>
            <img src={imageUrl} className="size-64 border-2 border-secondary object-cover"/>
            <div className="text-4xl text-secondary text-center group-hover:underline">{text}</div>
        </a>
    );
}