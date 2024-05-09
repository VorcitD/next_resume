"use client";

import Image from "next/image";
import { useRef } from "react";
import { FiChevronsRight } from "react-icons/fi";
import Button from "./Components/Button";
import SocialMediaMenu from "./Components/SocialMediaMenu";
import { useIsVisible } from "./Hooks/useIsVisible";

export default function Home() {
  const refIntro = useRef<HTMLDivElement | null>(null);
  const isVisibleIntro = useIsVisible(refIntro);

  const refQuote = useRef<HTMLDivElement | null>(null);
  const isVisibleQuote = useIsVisible(refQuote);

  const refAbout = useRef<HTMLDivElement | null>(null);
  const isVisibleAbout = useIsVisible(refAbout);

  const refExp = useRef<HTMLDivElement | null>(null);
  const isVisibleExp = useIsVisible(refExp);

  const refPortfolio = useRef<HTMLDivElement | null>(null);
  const isVisiblePortfolio = useIsVisible(refPortfolio);

  const refBlog = useRef<HTMLDivElement | null>(null);
  const isVisibleBlog = useIsVisible(refBlog);

  const refChat = useRef<HTMLDivElement | null>(null);
  const isVisibleChat = useIsVisible(refChat);

  const refProject = useRef<HTMLDivElement | null>(null);
  const isVisibleProject = useIsVisible(refProject);

  return (
    <main>
      <div className=" w-full ">
        <section>
          <div className="flex w-full items-center justify-center ">
            <div className="relative mb-4 flex w-11/12 items-center justify-between ">
              <div
                ref={refIntro}
                className={`${isVisibleIntro ? "animate-fade-right" : ""} mt-10 flex flex-col`}
              >
                <div className="md:ml-12">
                  <div className="mb-3 flex w-full items-center justify-start py-4">
                    <span className="mr-4 h-0 w-14 border-4 border-secondary "></span>
                    <span className="text-sm font-light text-fontPrimary tracking-widest md:text-lg">
                      FULL-STACK WEB DEVELOPER
                    </span>
                  </div>
                  <div>
                    <span className="font-serif text-4xl font-medium text-fontPrimary md:text-8xl lg:text-9xl">
                      VICTOR <br /> CAVALCANTI
                    </span>
                  </div>
                </div>
                <div className="mt-10 flex max-h-full max-w-xl">
                  <div className="flex">
                    <div className="mr-4 hidden h-full w-6 bg-secondary md:block "></div>
                  </div>
                  <div className="ml-4">
                    <SocialMediaMenu />
                    <div className="mb-8 mt-5">
                      <p className="text-sans text-sm font-light leading-8 text-fontSecondary ">
                        Sou Goiano, tenho 22 anos e estou no ultimo periodo da
                        minha graduação em Engenharia de Computação pelo Centro
                        Federal de Educação Tecnológica de Minas Gerais (CEFET).
                        Atualmente sou Desenvolvedor Web Full-Stack Júnior, pelo
                        HomeDeveloper, empresa de Desenvolvimento de Software.
                      </p>
                    </div>
                    <div className="max-w-60 flex items-center">
                      <Button
                        text="VER PORTFOLIO"
                        href={"https://github.com/VorcitD"}
                      ></Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 -z-20  hidden w-full justify-end lg:flex">
                <Image
                  width={450}
                  height={300}
                  src={"/Victor.png"}
                  alt={""}
                ></Image>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="w-full flex bg-tertiary items-center justify-center">
          <div className="flex h-630 w-11/12 items-center justify-center bg-tertiary">
            <div
              ref={refQuote}
              className={`${isVisibleQuote ? "animate-fade-up" : ""} flex h-full w-screen flex-col items-center justify-center px-12 md:px-24 py-24 text-center font-normal`}
            >
              <span
                className={`mb-4 animate-fade-up font-serif text-3xl md:text-5xl font-thin text-fontSecondary`}
              >
                “Se eu vi mais longe, foi porque estava sobre os ombros de
                gigantes”
              </span>
              <span className="my-6 h-0 w-14 border-4 border-secondary "></span>
              <span className="font-serif">Isaac Newton</span>
            </div>
          </div>
          </div>
        </section>

        <section>
          <div className="relative mt-9 flex items-center justify-center">
            <div className="w-11/12">
              <div
                ref={refAbout}
                className={`${isVisibleAbout ? "animate-fade-right" : ""} flex flex-col px-4 pb-8 pt-24`}
              >
                <div>
                  <div className="mb-3 flex w-full items-center justify-start ">
                    <span className="mr-4 h-0 w-14 border-4 border-secondary "></span>
                    <span className="text-sm text-fontPrimary md:text-lg font-light tracking-widest">
                      SOBRE MIM
                    </span>
                  </div>
                  <div className="mb-12">
                    <span className="font-serif text-5xl md:text-7xl font-medium text-fontPrimary">
                      Sou Desenvolvedor Web <br /> Full-Stack
                    </span>
                  </div>
                </div>
                <div className="flex max-h-full max-w-xl">
                  <div className="">
                    <div className=" mb-9">
                      <p className="text-sans text-sm font-light leading-8 text-fontSecondary ">
                        Graduando em Engenharia de Computação. Possuo
                        experiência com Angular, React, Next, Spring Boot,
                        trabalhei com AWS e estou habituado com metodologias
                        ágeis. Atuei no time de desenvolvimento responsável pelo
                        portal Seguros Unimed, realizando adição de novas
                        features e novos produtos, tal qual o novo portal odonto
                        e o odonto-lite. Também atuei no desenvolvimento do
                        software de gestão de ativos ao qual a Home Developer é
                        responsável. Realizei treinamentos em GraphQL, RxJS.
                      </p>
                    </div>
                    <SocialMediaMenu />
                    <hr className="my-6 border-fontSecondary opacity-15" />
                    <div className="">
                      <span className="text-LG font-light tracking-widest text-secondary">
                        HABILIDADES
                      </span>
                      <div className="mt-5 flex items-center justify-start">
                        <FiChevronsRight className="mr-3 text-secondary" />
                        <span className="font-sans text-sm font-thin text-fontSecondary">
                          React, Next, Angular
                        </span>
                      </div>
                      <div className="mt-5 flex items-center justify-start">
                        <FiChevronsRight className="mr-3 text-secondary" />
                        <span className="font-sans text-sm font-thin text-fontSecondary">
                          Node, SpringBoot
                        </span>
                      </div>
                      <div className="mt-5 flex items-center justify-start">
                        <FiChevronsRight className="mr-3 text-secondary" />
                        <span className="font-sans text-sm font-thin text-fontSecondary">
                          Typescript, Javascript, Java
                        </span>
                      </div>
                      <div className="mt-5 flex items-center justify-start">
                        <FiChevronsRight className="mr-3 text-secondary" />
                        <span className="font-sans text-sm font-thin text-fontSecondary">
                          HTML, CSS, SASS, Tailwind, Bootstrap
                        </span>
                      </div>
                      <div className="mt-5 flex items-center justify-start">
                        <FiChevronsRight className="mr-3 text-secondary" />
                        <span className="font-sans text-sm font-thin text-fontSecondary">
                          GraphQL, Restful API, AWS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-16 top-28 -z-20 hidden lg:block ">
                <Image
                  width={550}
                  height={300}
                  src={"/VictorCavalcanti2.png"}
                  alt={""}
                ></Image>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-center bg-tertiary py-10">
            <div className="flex w-11/12 items-start justify-around py-24">
              <div className="hidden w-2/5 items-start justify-start border-l-8 border-secondary lg:flex">
                <Image
                  className="h-full pl-10 grayscale transition duration-300 hover:grayscale-0 "
                  width={430}
                  height={300}
                  src={"/FotoSetup2.jpeg"}
                  alt={""}
                ></Image>
              </div>

              <div
                ref={refExp}
                className={`${isVisibleExp ? "animate-fade-left" : ""} flex w-full justify-end lg:w-3/5`}
              >
                <div className="flex flex-col px-4">
                  <div className="mb-3 flex w-full items-center justify-start ">
                    <span className="mr-4 h-0 w-14 border-4 border-secondary "></span>
                    <span className="text-sm md:text-lg font-light tracking-widest text-fontPrimary">
                      CURRÍCULO
                    </span>
                  </div>
                  <div className="mb-8 md:mb-12">
                    <span className="font-serif text-5xl md:text-7xl font-medium text-fontPrimary">
                      Minhas Experiências
                    </span>
                  </div>
                  <div className="flex max-h-full">
                    <div className="flex flex-col">
                      <div className=" flex flex-col">
                        <span className="mb-1 font-serif text-xl md:text-2xl font-bold text-fontPrimary">
                          Desenvolvedor Web Full Stack
                        </span>
                        <span className="mb-2 font-serif text-base md:text-lg font-thin text-fontSecondary">
                          Home Developer LTDA - São Paulo-SP (Remoto)
                        </span>
                        <span className="mb-1 font-sans text-xs md:text-sm font-thin text-secondary">
                          FEVEREIRO 2023 - ATUAL
                        </span>
                        <p className="text-sans text-sm font-light leading-8 text-fontSecondary ">
                          Experiência focada em Back End usando Spring Boot e
                          banco de dados SQL, exercendo manutenção de sistemas
                          legados, modelagem e desenvolvimento de novos
                          softwares. Desenvolvimento de aplicações Front End em
                          Angular e React. O trabalho é realizado em uma empresa
                          prestadora de serviços com clientes de grande porte,
                          como bancos e empresas de informações de crédito e
                          FinTechs.
                        </p>
                      </div>
                      <span className="my-2 ml-2 h-full w-1 bg-secondary py-6 "></span>
                      <div className="mb-4 md:mb-9 flex flex-col">
                        <span className="mb-1 font-serif text-xl md:text-2xl font-bold text-fontPrimary">
                          Estagiário em Desenvolvimento Web Full Stack
                        </span>
                        <span className="mb-2 font-serif text-base md:text-lg font-thin text-fontSecondary">
                          Tokenlab Tecnologia da Informação LTDA - São Carlos-SP
                          (Remoto)
                        </span>
                        <span className="mb-1 font-sans text-xs md:text-sm font-thin text-secondary">
                          OUTUBRO 2021 - FEVEREIRO 2023
                        </span>
                        <p className="text-sans text-sm font-light leading-8 text-fontSecondary ">
                          Experiência com desenvolvimento Web, focado em Front
                          End. Utilizando Typescript, Angular com integração
                          Wordpress, estilização SCSS, a serviço do Portal
                          Seguros Unimed e React + Next e AWS a serviço de um
                          software interno da empresa. Experiência com
                          metodologias ágeis, controle de versionamento com Git,
                          Bitbucket + Jira. Membro de comissões internas,
                          participação em organização de eventos e realização de
                          apresentações. Treinamentos em GraphQL, AWS, RxJS e
                          Node.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 mt-9 flex items-center justify-center">
            <div className="flex w-11/12 flex-wrap items-center justify-around">
              <div
                ref={refPortfolio}
                className={`${isVisiblePortfolio ? "animate-fade-right" : ""} flex max-w-xl flex-col px-4 py-24`}
              >
                <div>
                  <div className="mb-3 flex w-full items-center justify-start ">
                    <span className="mr-4 h-0 w-14 border-4 border-secondary "></span>
                    <span className="text-sm md:text-lg font-light tracking-widest text-fontPrimary">
                      MEU PORTFOLIO
                    </span>
                  </div>
                  <div className="mb-12">
                    <span className="font-serif text-5xl md:text-7xl font-medium text-fontPrimary">
                      Trabalho Recente Concluído
                    </span>
                  </div>
                </div>
                <div className="flex max-h-full ">
                  <div className="">
                    <div className=" mb-9">
                      <p className="text-sans text-sm font-light leading-8 text-fontSecondary ">
                        Conheça um pouco do meu trabalho visitando meu
                        Portfolio. Nele temos alguns dos sites que programei
                        nas tecnologias que domino. Cada página é uma
                        oportunidade para compartilhar minha criatividade e
                        habilidades. Espero que sua visita te traga alguma
                        inspiração para seu projeto. <br /> <br /> Sinta-se à
                        vontade para navegar e conhecer mais sobre meu trabalho!
                      </p>
                    </div>
                    <div className="max-w-60">
                      <Button
                        text="VER PORTFOLIO"
                        href={"/Portfolio"}
                      ></Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <Image
                  className="grayscale transition duration-300 hover:grayscale-0"
                  width={450}
                  height={300}
                  src={"/Example1.png"}
                  alt={""}
                ></Image>
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div className="mb-4 mt-9 flex items-center justify-center bg-tertiary py-28">
            <div className="flex w-11/12 flex-wrap-reverse items-center lg:flex-nowrap">
              <div className="flex h-full flex-wrap items-center justify-between md:flex-nowrap">
                <Card photoAddress="/Foto1.jpg" postAddress={""}></Card>
                <Card photoAddress="/Foto2.jpg" postAddress={""}></Card>
              </div>
              <div
                ref={refBlog}
                className={`${isVisibleBlog ? "animate-fade-left" : ""} flex flex-col px-8 py-16 lg:max-w-lg`}
              >
                <div>
                  <div className="mb-3 flex w-full items-center justify-start ">
                    <span className="mr-4 h-0 w-14 border-4 border-secondary "></span>
                    <span className="text-sm md:text-lg font-light tracking-widest">
                      PUBLICAÇÕES RECENTES
                    </span>
                  </div>
                  <div className="mb-12">
                    <span className="font-serif text-5xl md:text-7xl font-medium text-fontPrimary">
                      Veja Meus Artigos Recentes
                    </span>
                  </div>
                </div>
                <div className="flex max-h-full max-w-xl">
                  <div className="">
                    <div className=" mb-9">
                      <p className="text-sans text-sm font-light leading-8 text-fontSecondary ">
                        Explore meu blog e mergulhe nas tecnologias que aprendi
                        e nos projetos que criei. É um espaço onde compartilho
                        minhas experiências e insights, oferecendo uma visão
                        mais aprofundada sobre meu percurso tecnológico. Convido
                        você a descobrir as histórias por trás dos códigos e a
                        participar das conversas sobre inovação e
                        desenvolvimento.
                      </p>
                    </div>
                    <div className="max-w-60">
                      <Button text="VISITAR BLOG" href={"/Blog"}></Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section>
          <div className="mb-4 mt-9 flex items-center justify-center  bg-tertiary">
            <div className="flex w-11/12 flex-wrap items-center justify-around md:flex-nowrap">
              <div
                ref={refChat}
                className={`${isVisibleChat ? "animate-fade-right" : ""} flex flex-col px-4 py-24`}
              >
                <div>
                  <div className="mb-3 flex w-full items-center justify-start ">
                    <span className="mr-4 h-0 w-14 border-4 border-secondary "></span>
                    <span className="text-sm md:text-lg font-light tracking-widest text-fontPrimary">
                      FALE COMIGO
                    </span>
                  </div>
                  <div className="mb-12">
                    <span className="font-serif text-6xl md:text-7xl font-medium text-fontPrimary">
                      Vamos Conversar
                    </span>
                  </div>
                </div>
                <div className="flex max-h-full max-w-xl">
                  <div className="">
                    <div className=" mb-9">
                      <p className="text-sans text-sm font-light leading-8 text-fontSecondary ">
                        Estou à disposição para conversar! Seja para esclarecer
                        dúvidas, discutir projetos ou simplesmente trocar ideias
                        sobre tecnologia, estou aqui para ajudar. Sinta-se à
                        vontade para entrar em contato, será um prazer
                        colaborar!
                      </p>
                    </div>
                    <div className="max-w-96">
                      <Button
                        text="ENTRE EM CONTATO"
                        href={"https://wa.me//5562999189082?text=Olá Victor! Vi seu currículo e me interessei pelos seus serviços!"}
                      ></Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hover:animate-jump hover:animate-duration-700 hover:animate-ease-linear">
                <Image
                  width={450}
                  height={300}
                  src={"/LogoSemNome.png"}
                  alt={""}
                ></Image>
              </div>
            </div>
          </div>
        </section>
{/* 
        <section>
          <div className="mb-4 mt-9 flex items-center justify-center bg-tertiary py-28">
            <div className="bg:flex-nowrap flex w-11/12 flex-wrap-reverse items-start justify-center">
              <div className="hidden md:block">
                <GrayImageText
                  photoAddress={"/Foto3.jpg"}
                  text={"ENTRE EM CONTATO"}
                ></GrayImageText>
                <div className="flex w-full items-center justify-center">
                  <form className="w-full"action="https://formsubmit.co/vitimendoza@gmail.com" method="POST" >
                    <div className="my-8 flex items-center justify-between">
                      <div className="mr-4 w-80">
                        <Input type={"text"} placeholder={"Nome"}></Input>
                      </div>
                      <div className="w-80">
                        <Input type={"email"} placeholder={"Email"}></Input>
                      </div>
                    </div>
                    <div className="w-full">
                      <TextArea placeholder={"Mensagem"}></TextArea>
                    </div>
                    <Button text={"ENVIAR"} href={""}></Button>
                  </form>
                </div>
              </div>

              <div
                ref={refProject}
                className={`${isVisibleProject ? "animate-fade-left" : ""} max-w-1/2 flex h-full flex-col items-start px-4 pt-12 `}
              >
                <div>
                  <div className="mb-3 flex w-full items-center justify-start ">
                    <span className="mr-4 h-0 w-14 border-4 border-secondary "></span>
                    <span className="text-sm md:text-lg font-light tracking-widest">
                      ENCOMENDE JÁ
                    </span>
                  </div>
                  <div className="mb-12">
                    <span className="w-full font-serif text-6xl md:text-7xl font-medium text-fontPrimary">
                      Tem um Projeto?
                    </span>
                  </div>
                </div>
                <div className="flex max-h-full max-w-xl flex-col">
                  <div className=" mb-9">
                    <p className="text-sans text-sm font-light leading-8 text-fontSecondary ">
                      Compartilhe sua ideia! Estou animado para ouvir sobre o
                      projeto que você tem em mente. Seja qual for a sua visão,
                      estou aqui para transformá-la em realidade. Vamos
                      trabalhar juntos para dar vida ao seu projeto e alcançar
                      resultados incríveis. Aguardo ansiosamente para conhecer
                      mais sobre a sua ideia e explorar as possibilidades de
                      desenvolvimento!
                    </p>
                  </div>
                  <div className="flex max-w-full flex-wrap justify-between">
                    <div className="mb-2 flex items-center justify-center">
                      <FiMail className="mr-4 text-4xl md:text-5xl text-secondary"></FiMail>
                      <div>
                        <span className="mb-2 font-sans text-base md:text-xl font-thin tracking-widest text-fontPrimary">
                          Email
                        </span>
                        <p className="mb-2 font-sans text-sm md:text-base font-thin tracking-widest text-fontSecondary">
                          vitimendoza@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="mb-2 flex items-center justify-center">
                      <FiPhone className="mr-4 text-4xl md:text-5xl text-secondary"></FiPhone>
                      <div>
                        <span className="mb-2 font-sans text-base md:text-xl font-thin tracking-widest text-fontPrimary">
                          Telefone
                        </span>
                        <p className="mb-2 font-sans text-sm md:text-base font-thin tracking-widest text-fontSecondary">
                          (62) 9 9918-9082
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
