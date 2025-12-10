function Textarea({ id, label, placeholder, onChange }) {

    return (
        <section className="pt-6 font-montserrat text-lg m-2 w-full md:w-3xl">
            <label className="block font-signika text-[#7BAA8F]">
                {label}:
            </label>
            <textarea
                name={id}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full border-1 border-[#7BAA8F] text-[#F5F5F7] rounded-lg resize-none h-50 
                placeholder:text-[#C0C0C0] hover:border-[#4A90E2] focus:outline-none"
            >
            </textarea>
        </section>
    );
}

export default Textarea;