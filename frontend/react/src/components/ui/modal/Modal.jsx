
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
        isActive,
        layersBarItems,
        children,
    }) {


    return (
        <>
        {isActive && (
            <>
            <div className="w-screen h-screen absolute top-0 left-0 bg-black opacity-80"></div>
            <div className={`${widthMap[width]} ${heightMap[height]} p-8 m-auto fixed inset-0
            flex flex-col items-center justify-between bg-primary border-1 border-secondary`}>
                <div className="size-8 absolute top-2 right-2
                flex justify-center items-center cursor-pointer text-2xl" onClick={() => isActive(false)}>x</div>
                {layersBarItems && (
                    <div className=" h-6 absolute top-3 left-3 z-20 flex gap-2">
                        {layersBarItems}
                    </div>
                )}
                {children}
            </div>
            </>
        )}
        </>
    );    
}