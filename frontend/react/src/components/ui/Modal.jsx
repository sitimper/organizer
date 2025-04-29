import Button from "./Button";

const widthMap = {
    64: "w-64",
    128: "w-128",
    196: "w-196",
    256: "w-256",
};

const heightMap = {
    64: "h-64",
    128: "h-128",
    196: "h-196",
    256: "h-256",
};

export default function Modal({ 
        width = 128,
        height = 128,
        title = "Popup", 
        buttonText = "Create", 
        buttonOnClick,
        isActive,
        children,
    }) {


    return (
        <>
        {isActive && (
            <>
            <div className="w-screen h-screen absolute top-0 left-0 bg-black opacity-80"></div>
            <div className={`${widthMap[width]} ${heightMap[height]} p-8 m-auto fixed inset-0
            flex flex-col items-center justify-between bg-primary border-1 border-secondary`}>
                <div className="size-8 absolute top-4 right-4
                 flex justify-center items-center cursor-pointer text-xl" onClick={() => isActive(false)}>x</div>
                <div className="text-4xl">{title}</div>
                {children}
                <Button onClick={buttonOnClick}>{buttonText}</Button>
            </div>
            </>
        )}
        </>
    );    
}