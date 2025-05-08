import { useState } from "react";
import ModalChartCreation from "../charts/modal/ModalChartCreation";
import Button from "../../ui/Button";

export default function ModalToolCreation({ type }) {
    const [ isOpen, setIsOpen ] = useState(false);
    let modal;
    let label;

    if (type == "charts") {
        modal = <ModalChartCreation isActive={setIsOpen} />;
        label = "chart";
    }

    return (
        <>  
            {isOpen && modal}
            <Button height={24} onClick={() => setIsOpen(true)}>New {label}</Button>
        </>
    );
}