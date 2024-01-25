import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import SocialMediaMenu from "./SocialMediaMenu";


export default function Footer(){
    return (
      <section className="h-60 pt-10 flex flex-col items-center justify-center">
        <div className="flex justify-between items-center w-11/12">
        <div className="flex flex-col w-full h-full justify-start items-start">
          <Image className="mb-5" src="/next.svg" width="165" height="79" alt={"Logo"}></Image>
          <p className="text-md text-fontSecondary ">Lorem ipsum dolor sit, </p>
          </div>
        <div className="h-full flex flex-col justify-start items-center w-full ">
            <nav className="text-sm text-fontSecondary font-thin tracking-widest fill-fontPrimary font-serif w-full flex justify-end items-center ">
                <Link className="px-6 pb-2 hover:text-secondary transition duration-300 " href="">Home</Link>
                <Link className="px-6 pb-2 hover:text-secondary transition duration-300 " href="">About</Link>
                <Link className="px-6 pb-2 hover:text-secondary transition duration-300 " href="">Portfolio</Link>
                <Link className="px-6 pb-2 hover:text-secondary transition duration-300 " href="">Blog</Link>
                <Link className="px-6 pb-2 hover:text-secondary transition duration-300 " href="">Contacts</Link>
            </nav>
            <div className="w-full flex items-center justify-end pt-5 pb-12 ">
            <SocialMediaMenu></SocialMediaMenu>
            </div>
        </div>
      </div>
      <hr className="w-11/12 border-fontSecondary opacity-15" />
      <p className="py-6 mb-3 font-thin font-sans text-fontSecondary" >Copyright 2024 © All Right Reserved by Victor Cavalcanti</p>
      </section>
    )
}