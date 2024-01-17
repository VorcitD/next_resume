import { FiGithub,FiPhone, FiLinkedin, FiMail} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";



export default function SocialMediaMenu(){
    return(
        <div className="flex">
            <Link className="text-secondary text-xl mx-4 hover:cursor-pointer hover:text-fontSecondary" href={""}><FaWhatsapp/></Link>
            <Link className="text-secondary text-xl mx-4 hover:cursor-pointer hover:text-fontSecondary" href={""}><FiGithub/></Link>
            <Link className="text-secondary text-xl mx-4 hover:cursor-pointer hover:text-fontSecondary" href={""}><FiLinkedin/></Link>
            <Link className="text-secondary text-xl mx-4 hover:cursor-pointer hover:text-fontSecondary" href={""}><FiMail/></Link>
        </div>
    );
}