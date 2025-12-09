import { FileUser, Github, Linkedin, Mail } from "lucide-react";

function Footer(){

    return(
        <footer className="flex justify-between md:justify-around w-full bg-[#2C2C2E] font-titilium uppercase text-[#F5F5F7] text-xs md:text-md lg:text-lg">
            <ul className="ml-10">
                <li className="flex items-center gap-3 hover:text-[#7BAA8F]">
                   <a href="mailto:francisco.vera.95@gmail.com"><Mail size={18} /></a> francisco.vera.95@gmail.com
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1XFUiPNpVuO0MGI8nDXlTe7o4xtZ7nPzf/view?usp=drive_link" className="flex items-center gap-3 hover:text-[#7BAA8F]"><FileUser size={18} /> Link a mi cv actualizado.</a>
                </li>
            </ul>

            <ul className="mr-10">
                <li>
                    <a href="https://www.linkedin.com/in/francisco-x-vera-/" className="flex items-center gap-3 hover:text-[#7BAA8F]"><Linkedin size={18} /> linkedin</a>
                </li>
                <li >
                    <a href="https://github.com/Morfeo95/" className="flex items-center gap-3 hover:text-[#7BAA8F]"><Github size={18} /> github</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;