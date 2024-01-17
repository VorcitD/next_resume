import Link from "next/link";
import Button from "./Button";
import Image from "next/image";


export default function Header() {
    return (
      <section className="h-32 w-screen flex justify-between items-center">
        <div className="pl-9">
          <Image src="/next.svg" width="165" height="79" alt={"Logo"}></Image>
          </div>
        <div className="h-full p-5 flex justify-center items-center">
            <nav className="text-xl text-fontSecondary font-serif h-full flex justify-center items-center ">
                <Link className="px-5 pb-2 hover:text-secondary hover:border-b hover:border-secondary transition duration-300 " href="">Home</Link>
                <Link className="px-5 pb-2 hover:text-secondary hover:border-b hover:border-secondary transition duration-300 " href="">About</Link>
                <Link className="px-5 pb-2 hover:text-secondary hover:border-b hover:border-secondary transition duration-300 " href="">Portfolio</Link>
                <Link className="px-5 pb-2 hover:text-secondary hover:border-b hover:border-secondary transition duration-300 " href="">Blog</Link>
                <Link className="px-5 pb-2 hover:text-secondary hover:border-b hover:border-secondary transition duration-300 " href="">Contacts</Link>
            </nav>
        </div>
        <div className="pr-9">
            <Button text="CONTRATE"/>
        </div>
      </section>
    )
  }
  