import Image from "next/image";
import { useState } from "react";

export default function GrayImageText(props: {photoAddress:string, text:string}) {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div className="relative w-full h-44 " onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className="h-full ">
          <Image
            alt="Rose"
            src={`${props.photoAddress}`}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
            className={`transition duration-300 ${isHovered ? "grayscale-0" : "grayscale"} brightness-35`}
          />
        </div>
        <div className="absolute top-0 flex w-full h-full items-center justify-center">
          <span className="text-secondary text-nowrap font-serif font-semibold text-5xl opacity-80">
            {props.text}
          </span>
        </div>
      </div>
    )
}