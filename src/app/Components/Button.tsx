import Link from "next/link";

export default function Button(props: {text:string}) {
    return (
            <Link className="flex -tracking-tighter justify-center font-thin font-sans text-lg border-secondary border py-4 px-8  text-fontPrimary hover:text-secondary transition duration-300 hover:cursor-pointer " href={""}>
                {props.text}
            </Link>
    )
  }
  