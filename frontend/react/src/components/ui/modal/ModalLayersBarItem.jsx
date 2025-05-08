
export default function ModalLayerBarItem({ 
    onClick,
    children
 }) {
    return (
       <div onClick={onClick}>
            {children}
        </div>
    );
 }