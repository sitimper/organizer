import { useState } from "react";
import ModalChartCreation from "./ModalChartCreation";
import Button from "../../../ui/Button";

export default function ModalCreation({ toolType }) {
    const [ isOpen, setIsOpen ] = useState(false);
    let popup;

    if (toolType == "charts") {
        popup = <ModalChartCreation isActive={setIsOpen} />   
    }

    return (
        <>  
            {isOpen && popup}
            <Button width={24} height={24} onClick={() => setIsOpen(true)}>New</Button>
        </>
    );
}