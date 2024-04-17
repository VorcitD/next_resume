import Image from "next/image";
import Link from "next/link";
import SocialMediaMenu from "./SocialMediaMenu";


export default function Footer(){
    return (
      <section className="h-60 pt-10 flex flex-col items-center justify-center ">
        <div className="flex justify-between items-center w-11/12">
        <div className="hidden md:flex flex-col w-full h-full justify-start items-start">
        <Image src="/LogoVCBranca.png" width="180" height="79" alt={"Logo"}></Image>
          </div>
        <div className="h-full flex flex-col justify-start items-center w-full ">
            <nav className="text-xs md:text-sm text-fontSecondary font-thin tracking-widest fill-fontPrimary font-serif w-full flex justify-end items-center ">
                <Link className="px-2 md:px-6 pb-2 hover:text-secondary transition duration-300 " href="">Inicio</Link>
                <Link className="px-2 md:px-6 pb-2 hover:text-secondary transition duration-300 " href="">Sobre</Link>
                <Link className="px-2 md:px-6 pb-2 hover:text-secondary transition duration-300 " href="">Portfolio</Link>
                <Link className="px-2 md:px-6 pb-2 hover:text-secondary transition duration-300 " href="">Blog</Link>
                <Link className="px-2 md:px-6 pb-2 hover:text-secondary transition duration-300 " href="">Contatos</Link>
            </nav>
            <div className="w-full flex items-center justify-end pt-5 pb-12 ">
            <SocialMediaMenu></SocialMediaMenu>
            </div>
        </div>
      </div>
      <hr className="w-11/12 border-fontSecondary opacity-15" />
      <p className="text-sm text-wrap text-center md:text-md py-6 mb-3 font-thin font-sans text-fontSecondary" >Copyright 2024 © All Right Reserved by Victor Cavalcanti</p>
      </section>
    )
}