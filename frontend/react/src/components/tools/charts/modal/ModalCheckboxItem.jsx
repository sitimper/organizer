import { useState } from "react";

export default function ModalCheckboxItem({ name, checked, value, onChange }) {
    const [ isChecked, setIsChecked ] = useState(checked);

    function handleOnChange() {
        setIsChecked(!isChecked);
    }

    return (
        <input className="size-5" type="checkbox" name={name} checked={isChecked} value={value} onChange={ () => {
            handleOnChange();
            onChange();
        }} />
    );
}