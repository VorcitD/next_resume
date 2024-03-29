import Link from "next/link";

export default function Button(props: { text: string; href?: string }) {
  return (
    <Link
      className="flex text-sm -tracking-tighter justify-center font-thin font-sans md:text-lg border-secondary border py-4 px-8  text-fontPrimary hover:text-secondary transition duration-300 hover:cursor-pointer "
      href={`${props.href}`}
    >
      {props.text}
    </Link>
  );
}
