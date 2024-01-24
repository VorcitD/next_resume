import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import { useRouter } from 'next/navigation'

export default function Card(props: {photoAddress:string, postAddress:string}) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      className={`flex flex-col bg-primary max-w-md mr-6 p-6 border-t-2 shadow-2xl border-secondary`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <div className="flex flex-col hover:cursor-pointer" onClick={()=> router.push(`${props.postAddress}`)}>
      <Image
        className={`transition duration-500 ${isHovered ? "grayscale-0" : "grayscale"}`}
        width={450}
        height={300}
        src={`${props.photoAddress}`}
        alt={""}
      ></Image>
      <span className="font-light tracking-wide text-2xl leading-8 text-fontPrimary font-serif my-4">
        What is a digital asset manager and why do I need one?
      </span>
      </div>
      <span className="text-secondary font-light text-LG tracking-widest">
        25 de Janeiro, 2024
      </span>
      <p className="font-sans text-base font-light tracking-wide leading-7 text-fontSecondary my-2 ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia et, rem
        reiciendis ut quibusdam rerum nobis, animi delectus assumenda minima aut
        obcaecati, reprehenderit atque necessitatibus molestias iste! Non,
        possimus sunt?
      </p>
      <Link className="flex justify-start items-center" href={props.postAddress}>
        <span className="text-secondary font-light text-LG tracking-widest">
          Leia Mais
        </span>
        <FiChevronsRight className="text-secondary pt-1"></FiChevronsRight>
      </Link>
    </div>
  );
}
