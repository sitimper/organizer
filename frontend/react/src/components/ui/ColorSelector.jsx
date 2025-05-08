
export default function ColorSelector({ id, name, placeholder, required = false }) {
    return (
        <div className="h-8 relative flex items-center border-1 border-secondary">
            <label htmlFor={id} className="ml-1 absolute z-10 mix-blend-difference cursor-pointer">{placeholder}</label>
            <input id={id} className="absolute inset-0 w-full h-full cursor-pointer" 
            type="color" name={name} {...(required && { required: true })} />
        </div>
    );
}