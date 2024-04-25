/* eslint-disable react/jsx-no-undef */
"use client";

import Image from "next/image";
import { useRef } from "react";
import Button from "../Components/Button";
import SocialMediaMenu from "../Components/SocialMediaMenu";
import { useIsVisible } from "../Hooks/useIsVisible";
export default function Home() {
  const refIntro = useRef<HTMLDivElement | null>(null);
  const isVisibleIntro = useIsVisible(refIntro);

  return (
    <div>
      <section>
        <div className="flex flex-wrap-reverse w-full items-center justify-center">
          <div className="w-full lg:w-1/2 min-w-96 justify-center lg:flex">
            <div className="flex h-630 w-full p-12 pt-16 pb-0 ">
              {/* Esquerda */}
              <div className="md:flex h-full hidden md:w-1/2 flex-col">
                <div className="relative h-1/2 w-full">
                  <Image
                    className="hidden md:block grayscale transition duration-300 hover:grayscale-0"
                    fill={true}
                    src="/DragoSection.png"
                    alt=""
                    objectFit="cover"
                  />
                </div>
                <div className="relative h-1/2 w-full">
                  <Image
                    className="hidden md:block grayscale transition duration-300 hover:grayscale-0"
                    fill={true}
                    src="/AliancaLogin.png"
                    alt=""
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="relative h-full w-full">
                <Image
                  className=" grayscale transition duration-300 hover:grayscale-0"
                  fill={true}
                  src="/HandmadeHome.png"
                  alt=""
                  objectFit="cover"
                />
              </div>
            </div>
          </div>

          <div className=" mb-4 flex w-full px-10  lg:w-1/2 items-center justify-center lg:justify-start ">
            <div
              ref={refIntro}
              className={`${isVisibleIntro ? "animate-fade-right" : ""} mt-10 flex flex-col`}
            >
              <div className=" md:ml-12">
                <div className="mb-3 flex w-full items-center justify-end py-4">
                  <span className="mr-4 h-0 w-14 border-4 border-secondary "></span>
                  <span className="text-sm font-light tracking-widest md:text-lg">
                    VICTOR CAVALCANTI
                  </span>
                </div>
                <div>
                  <span className="font-serif text-4xl font-medium text-fontPrimary md:text-8xl lg:text-9xl">
                    MEUS <br /> PROJETOS
                  </span>
                </div>
              </div>
              <div className="mt-10 flex max-h-full max-w-xl">
                <div className="flex">
                  <div className="mr-4 hidden h-full w-6 bg-secondary md:block "></div>
                </div>
                <div className="">
                  <SocialMediaMenu />
                  <div className="mb-8 mt-5">
                    <p className="text-sans text-sm font-light leading-8 text-fontSecondary ">
                      Conheça um pouco do meu trabalho. Nele temos alguns dos
                      sites que programei nas tecnologias que domino. Cada
                      página é uma oportunidade para compartilhar minha
                      criatividade e habilidades. Espero que sua visita te traga
                      alguma inspiração para seu projeto.
                    </p>
                  </div>
                  <div className="flex max-w-60 items-center">
                    <Button
                      text="VISITAR GITHUB"
                      href={"https://github.com/VorcitD"}
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
