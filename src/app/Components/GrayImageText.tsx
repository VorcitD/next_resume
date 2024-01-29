import Image from "next/image";
import { useState } from "react";

export default function GrayImageText(props: {
  photoAddress: string;
  text: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-44 w-full "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
      <div className="absolute top-0 flex h-full w-full items-center justify-center">
        <span className="text-nowrap font-serif text-5xl font-semibold text-secondary opacity-80">
          {props.text}
        </span>
      </div>
    </div>
  );
}
