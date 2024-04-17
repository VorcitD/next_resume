import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <section>
      <div className="hidden lg:flex h-32 w-full items-center justify-between px-12 pt-10">
        <div className="">
          <Image
            src="/LogoVCBranca.png"
            width="180"
            height="79"
            alt={"Logo"}
          ></Image>
        </div>
        <div className="flex h-full items-center justify-center p-5">
          <nav className="flex h-full items-center justify-center fill-fontPrimary font-serif text-lg font-thin tracking-widest text-fontPrimary ">
            <Link
              className="px-7 pb-2 transition duration-300 hover:border-b hover:border-secondary hover:text-secondary "
              href="/Home"
            >
              Inicio
            </Link>
            <Link
              className="px-7 pb-2 transition duration-300 hover:border-b hover:border-secondary hover:text-secondary "
              href="https://www.linkedin.com/in/victormendozac/"
            >
              Sobre
            </Link>
            <Link
              className="px-7 pb-2 transition duration-300 hover:border-b hover:border-secondary hover:text-secondary "
              href="https://github.com/VorcitD"
            >
              Portfolio
            </Link>
            <Link
              className="px-7 pb-2 transition duration-300 hover:border-b hover:border-secondary hover:text-secondary "
              href=""
            >
              Blog
            </Link>
            <Link
              className="px-7 pb-2 transition duration-300 hover:border-b hover:border-secondary hover:text-secondary "
              href=""
            >
              Contatos
            </Link>
          </nav>
        </div>
        <div className="">
          <Button text="CONTRATE" />
        </div>
      </div>
    </section>
  );
}
