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
  const refPortfolio = useRef<HTMLDivElement | null>(null);
  const isVisiblePortfolio = useIsVisible(refPortfolio);

  return (
    <div className="overflow-x-hidden">
      <section>
        <div className="flex w-full flex-wrap-reverse items-center justify-center">
          <div className="w-full min-w-96 justify-center lg:flex lg:w-1/2">
            <div className="flex h-630 w-full p-12 pb-0 pt-16 ">
              {/* Esquerda */}
              <div className="hidden h-full flex-col md:flex md:w-1/2">
                <div className="relative h-1/2 w-full">
                  <Image
                    className="hidden grayscale transition duration-300 hover:grayscale-0 md:block"
                    fill={true}
                    src="/DragoSection.png"
                    alt=""
                    objectFit="cover"
                  />
                </div>
                <div className="relative h-1/2 w-full">
                  <Image
                    className="hidden grayscale transition duration-300 hover:grayscale-0 md:block"
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

          <div className=" mb-4 flex w-full items-center  justify-center px-10 lg:w-1/2 lg:justify-start">
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

      {/* <div className=" border border-secondary border-opacity-40 mx-4 md:mx-24">
      </div> */}

      <div className="my-16 flex w-screen justify-center md:my-24">
        <span className="border-b border-b-secondary font-serif text-4xl md:mt-8 md:text-6xl">
          PROJETOS
        </span>
      </div>

      <section>
        <div className="mb-4  flex items-center justify-center pb-16">
          <div className="flex w-11/12 flex-wrap-reverse items-center justify-around">
            <div className="">
              <Image
                className="grayscale transition duration-300 hover:grayscale-0"
                width={450}
                height={300}
                src={"/Example1.png"}
                alt={""}
              ></Image>
            </div>
            <div
              ref={refPortfolio}
              className={`${isVisiblePortfolio ? "animate-fade-right" : ""} flex max-w-xl flex-col px-4 pb-8 `}
            >
              <div>
                <div className="mb-3 flex w-full items-center justify-start ">
                  <span className="mr-4 h-0 w-14 border-4 border-secondary "></span>
                  <span className="text-sm font-light tracking-widest md:text-lg">
                    E-COMMERCE
                  </span>
                </div>
                <div className="mb-12">
                  <span className="font-serif text-5xl font-medium text-fontPrimary md:text-7xl">
                    HANDMADE GI RIFFARACHI
                  </span>
                </div>
              </div>
              <div className="flex max-h-full ">
                <div className="">
                  <div className=" mb-9">
                    <p className="text-sans text-sm font-light leading-8 text-fontSecondary ">
                      Sistema de E-commerce desenvolvido em Wordpress para uma
                      empresa de peças artesanais, cujo principal produto é
                      crochê. O sistema foi desenvolvido em wordpress para
                      facilitar o manuseio da proprietária em adicionar produtos
                      e atualizar suas página.
                      <br /> <br />
                    </p>
                  </div>
                  <div className="hidden max-w-60 md:block">
                    <Button text="VER PORTFOLIO" href={"/Portfolio"}></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4  flex items-center justify-center bg-tertiary pb-16 pt-16">
          <div className="flex w-11/12 flex-wrap items-center justify-around">
            <div
              ref={refPortfolio}
              className={`${isVisiblePortfolio ? "animate-fade-right" : ""} flex max-w-xl flex-col px-4 pb-8 `}
            >
              <div>
                <div className="mb-3 flex w-full items-center justify-start ">
                  <span className="mr-4 h-0 w-14 border-4 border-secondary "></span>
                  <span className="text-sm font-light tracking-widest md:text-lg">
                    APLICAÇÃO WEB
                  </span>
                </div>
                <div className="mb-12">
                  <span className="font-serif text-5xl font-medium text-fontPrimary md:text-7xl">
                    REDE ALIANÇA
                  </span>
                </div>
              </div>
              <div className="flex max-h-full ">
                <div className="">
                  <div className=" mb-9">
                    <p className="text-sans text-sm font-light leading-8 text-fontSecondary ">
                      Sistema de gerenciamento de cartão de todos realizado a
                      Rede Aliança, empresa de beneficios do nordeste goiano.
                      Projeto foi feito utilizando Next + Tailwind no frontend e
                      uma Api Restful foi desenvoldida em NodeJS para o backend,
                      usando banco de dados relacional. É uma aplicação web pois
                      buscava-se um sistema descentralizado para varias filiais
                      utilizarem.
                    </p>
                  </div>
                  <div className="hidden max-w-60 md:block">
                    <Button text="VER PORTFOLIO" href={"/Portfolio"}></Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <Image
                className="grayscale transition duration-300 hover:grayscale-0"
                width={850}
                height={300}
                src={"/AliancaDetail.png"}
                alt={""}
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4  flex items-center justify-center pb-16 pt-16">
          <div className="flex w-11/12 flex-wrap-reverse items-center justify-around">
            <div className="">
              <Image
                className="grayscale transition duration-300 hover:grayscale-0"
                width={750}
                height={300}
                src={"/StudiumHome.png"}
                alt={""}
              ></Image>
            </div>
            <div
              ref={refPortfolio}
              className={`${isVisiblePortfolio ? "animate-fade-right" : ""} flex max-w-xl flex-col px-4 pb-8 `}
            >
              <div>
                <div className="mb-3 flex w-full items-center justify-start ">
                  <span className="mr-4 h-0 w-14 border-4 border-secondary "></span>
                  <span className="text-sm font-light tracking-widest md:text-lg">
                    APLICAÇÃO WEB
                  </span>
                </div>
                <div className="mb-12">
                  <span className="font-serif text-5xl font-medium text-fontPrimary md:text-7xl">
                    Studium - Site de Cursos
                  </span>
                </div>
              </div>
              <div className="flex max-h-full ">
                <div className="">
                  <div className=" mb-9">
                    <p className="text-sans text-sm font-light leading-8 text-fontSecondary ">
                      Plataforma de Cursos online com frontend React e backend
                      NodeJS. Essa plataforma foi originalmente criada como
                      objeto de estudo das tecnologias. Mas posteriormente
                      adaptada para ser uma homepage para a ONG Janela Mágica do
                      Vale do Aço em Minas Gerais.
                    </p>
                  </div>
                  <div className="hidden max-w-60 md:block">
                    <Button text="VER PORTFOLIO" href={"/Portfolio"}></Button>
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
