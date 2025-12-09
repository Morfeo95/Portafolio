
function Input({ id, type, label, placeholder, value, onChange, required = false }) {

    return (
        <div className="pt-6">
            <label htmlFor={id}
                className={`block text-lg font-signika text-[#7BAA8F] 
                ${required ? `after:ml-0.5 after:text-red-500 after:content-["*"]` : ''}`}
            >
                {label}:
            </label>

            <input
                id={id}
                type={type}
                name={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}

                className="border-[#7BAA8F] border-1 font-montserrat rounded-lg p-3 w-full md:w-3xl text-[#F5F5F7] 
                placeholder:text-[#C0C0C0] hover:border-[#4A90E2] focus:outline-none"
            />
        </div>
    );
}

export default Input;