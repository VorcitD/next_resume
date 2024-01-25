import { FiGithub,FiPhone, FiLinkedin, FiMail} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";



export default function SocialMediaMenu(){
    return(
        <div className="flex">
            <Link className="text-secondary text-xl mr-8 hover:cursor-pointer hover:text-fontSecondary" href={"https://wa.me//5562999189082?text=Olá Victor! Vi seu currículo e me interessei pelos seus serviços!"}><FaWhatsapp/></Link>
            <Link className="text-secondary text-xl mr-8 hover:cursor-pointer hover:text-fontSecondary" href={"https://github.com/VorcitD"}><FiGithub/></Link>
            <Link className="text-secondary text-xl mr-8 hover:cursor-pointer hover:text-fontSecondary" href={"https://www.linkedin.com/in/victormendozac/"}><FiLinkedin/></Link>
            <Link className="text-secondary text-xl mr-8 hover:cursor-pointer hover:text-fontSecondary" href={"mailto:vitimendoza@gmail.com"}><FiMail/></Link>
        </div>
    );
}