import Button from "../Button";

export default function ModalLayer({ 
        id = 1,
        activeId = 1,
        title = "Layer", 
        buttonText = "Submit", 
        buttonOnClick,
        children,
    }) {
    return (
        <>
        {id === activeId && (
            <>
            <div className="text-4xl">{title}</div>
            {children}
            <Button onClick={buttonOnClick}>{buttonText}</Button>
            </>
        )}
        </>
    );
}