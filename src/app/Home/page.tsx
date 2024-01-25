"use client";

import Image from "next/image";
import Header from "../Components/Header";
import SocialMediaMenu from "../Components/SocialMediaMenu";
import Card from "../Components/Card";
import Button from "../Components/Button";
import { FiChevronsRight, FiPhone, FiMail } from "react-icons/fi";
import GrayImageText from "../Components/GrayImageText";
import Input from "../Components/Input";
import TextArea from "../Components/TextArea";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <div>
        <Header />
        <section>
          <div className="relative w-screen mb-4">
            <div className="mx-24 mt-10 flex flex-col">
              <div className="ml-12">
                <div className="flex w-full mb-3 items-center justify-start ">
                  <span className="border-4 h-0 border-secondary w-14 mr-4 "></span>
                  <span className="font-light text-lg tracking-widest">
                    FULL-STACK WEB DEVELOPER
                  </span>
                </div>
                <div>
                  <span className="font-medium text-fontPrimary text-9xl font-serif">
                    VICTOR <br /> CAVALCANTI
                  </span>
                </div>
              </div>
              <div className="flex max-w-xl max-h-full mt-20">
                <div className="flex">
                  <div className="bg-secondary h-full w-6 mr-4 "></div>
                </div>
                <div className="ml-4">
                  <SocialMediaMenu />
                  <div className="mt-5 mb-8">
                    <p className="text-fontSecondary text-sans text-sm leading-8 font-light ">
                      Sou Goiano, tenho 22 anos e estou no ultimo periodo da
                      minha graduação em Engenharia de Computação pelo Centro
                      Federal de Educação Tecnológica de Minas Gerais (CEFET).
                      Atualmente sou Desenvolvedor Web Full-Stack Júnior, pelo
                      HomeDeveloper, empresa de Desenvolvimento de Software.
                    </p>
                  </div>
                  <div className="max-w-60">
                    <Button text="VER PORTIFOLIO"></Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-16 -z-20 ">
              <Image
                width={450}
                height={300}
                src={"/Victor.png"}
                alt={""}
              ></Image>
            </div>
          </div>
        </section>

        <section>
          <div className="h-630 bg-tertiary">
            <div className="py-24 px-72 flex flex-col justify-center items-center h-full font-normal w-screen text-center">
              <span className=" font-serif text-5xl font-thin text-fontSecondary mb-4">
                “Se eu vi mais longe, foi porque estava sobre os ombros de
                gigantes”
              </span>
              <span className="border-4 h-0 border-secondary w-14 my-6 "></span>
              <span className="font-serif">Isaac Newton</span>
            </div>
          </div>
        </section>

        <section>
          <div className="relative mb-4 flex items-center justify-center mt-9">
            <div className="w-11/12">
              <div className="px-4 py-24 flex flex-col">
                <div>
                  <div className="flex w-full mb-3 items-center justify-start ">
                    <span className="border-4 h-0 border-secondary w-14 mr-4 "></span>
                    <span className="font-light text-lg tracking-widest">
                      SOBRE MIM
                    </span>
                  </div>
                  <div className="mb-12">
                    <span className="font-medium text-fontPrimary text-7xl font-serif">
                      Sou Desenvolvedor Web <br /> Full-Stack
                    </span>
                  </div>
                </div>
                <div className="flex max-w-xl max-h-full">
                  <div className="">
                    <div className=" mb-9">
                      <p className="text-fontSecondary text-sans text-sm leading-8 font-light ">
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
                    <hr className="border-fontSecondary opacity-15 my-6" />
                    <div className="">
                      <span className="text-secondary font-light text-LG tracking-widest">
                        HABILIDADES
                      </span>
                      <div className="flex items-center justify-start mt-5">
                        <FiChevronsRight className="text-secondary mr-3" />
                        <span className="text-fontSecondary text-sm font-thin font-sans">
                          React, Next, Angular
                        </span>
                      </div>
                      <div className="flex items-center justify-start mt-5">
                        <FiChevronsRight className="text-secondary mr-3" />
                        <span className="text-fontSecondary text-sm font-thin font-sans">
                          Node, SpringBoot
                        </span>
                      </div>
                      <div className="flex items-center justify-start mt-5">
                        <FiChevronsRight className="text-secondary mr-3" />
                        <span className="text-fontSecondary text-sm font-thin font-sans">
                          Typescript, Javascript, Java
                        </span>
                      </div>
                      <div className="flex items-center justify-start mt-5">
                        <FiChevronsRight className="text-secondary mr-3" />
                        <span className="text-fontSecondary text-sm font-thin font-sans">
                          HTML, CSS, SASS, Tailwind, Bootstrap
                        </span>
                      </div>
                      <div className="flex items-center justify-start mt-5">
                        <FiChevronsRight className="text-secondary mr-3" />
                        <span className="text-fontSecondary text-sm font-thin font-sans">
                          GraphQL, Restful API, AWS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-28 right-16 -z-20 ">
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
          <div className="mb-4 flex items-center justify-center py-10 bg-tertiary">
            <div className="w-11/12 flex justify-around items-center h-screen">
              <div className="flex justify-between items-center w-5/12 h-5/6">
                <span className="bg-secondary h-full p-1 mr-10 "></span>
                <Image
                  width={450}
                  height={300}
                  src={"/Victor.png"}
                  alt={""}
                ></Image>
              </div>
              <div className="w-full flex justify-end">
                <div className="px-4 py-24 flex flex-col">
                  <div className="flex w-full mb-3 items-center justify-start ">
                    <span className="border-4 h-0 border-secondary w-14 mr-4 "></span>
                    <span className="font-light text-lg tracking-widest">
                      CURRÍCULO
                    </span>
                  </div>
                  <div className="mb-12">
                    <span className="font-medium text-fontPrimary text-7xl font-serif">
                      Minhas Experiências
                    </span>
                  </div>
                  <div className="flex max-w-3xl max-h-full">
                    <div className="flex flex-col">
                      <div className=" flex flex-col">
                        <span className="mb-1 text-fontPrimary text-2xl font-bold font-serif">
                          Desenvolvedor Web Full Stack
                        </span>
                        <span className="mb-2 text-fontSecondary text-lg font-thin font-serif">
                          Home Developer LTDA - São Paulo-SP (Remoto)
                        </span>
                        <span className="mb-1 text-secondary text-sm font-thin font-sans">
                          FEVEREIRO 2023 - ATUAL
                        </span>
                        <p className="text-fontSecondary text-sans text-sm leading-8 font-light ">
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
                      <span className="bg-secondary h-full w-1 py-6 ml-2 my-2 "></span>
                      <div className=" mb-9 flex flex-col">
                        <span className="mb-1 text-fontPrimary text-2xl font-bold font-serif">
                          Estagiário em Desenvolvimento Web Full Stack
                        </span>
                        <span className="mb-2 text-fontSecondary text-lg font-thin font-serif">
                          Tokenlab Tecnologia da Informação LTDA - São Carlos-SP
                          (Remoto)
                        </span>
                        <span className="mb-1 text-secondary text-sm font-thin font-sans">
                          OUTUBRO 2021 - FEVEREIRO 2023
                        </span>
                        <p className="text-fontSecondary text-sans text-sm leading-8 font-light ">
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
          <div className="mb-4 flex items-center justify-center mt-9">
            <div className="w-11/12 flex justify-around items-center">
              <div className="px-4 py-24 flex flex-col">
                <div>
                  <div className="flex w-full mb-3 items-center justify-start ">
                    <span className="border-4 h-0 border-secondary w-14 mr-4 "></span>
                    <span className="font-light text-lg tracking-widest">
                      MEU PORTIFOLIO
                    </span>
                  </div>
                  <div className="mb-12">
                    <span className="font-medium text-fontPrimary text-7xl font-serif">
                      Trabalho Recente Concluído
                    </span>
                  </div>
                </div>
                <div className="flex max-w-xl max-h-full">
                  <div className="">
                    <div className=" mb-9">
                      <p className="text-fontSecondary text-sans text-sm leading-8 font-light ">
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
                    <div className="max-w-60">
                      <Button text="VER PORTIFOLIO"></Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
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
          <div className="mb-4 flex items-center justify-center mt-9 py-28 px-5 bg-tertiary">
            <div className="w-11/12 flex items-center">
              <div className="flex h-full w-full justify-between items-center">
                <Card photoAddress="/Foto1.jpg" postAddress={""}></Card>
                <Card photoAddress="/Foto2.jpg" postAddress={""}></Card>
              </div>
              <div className="py-16 pl-14 pr-4 flex flex-col max-w-lg">
                <div>
                  <div className="flex w-full mb-3 items-center justify-start ">
                    <span className="border-4 h-0 border-secondary w-14 mr-4 "></span>
                    <span className="font-light text-lg tracking-widest">
                      PUBLICAÇÕES RECENTES
                    </span>
                  </div>
                  <div className="mb-12">
                    <span className="font-medium text-fontPrimary text-7xl font-serif">
                      Veja Meus Artigos Recentes
                    </span>
                  </div>
                </div>
                <div className="flex max-w-xl max-h-full">
                  <div className="">
                    <div className=" mb-9">
                      <p className="text-fontSecondary text-sans text-sm leading-8 font-light ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Libero explicabo, dolorem perspiciatis eligendi
                        accusantium eveniet consequuntur possimus facere officia
                        deserunt animi aperiam odio maiores, impedit dicta,
                        neque illo rem voluptate.
                      </p>
                    </div>
                    <div className="max-w-60">
                      <Button text="VISITAR BLOG"></Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-center mt-9">
            <div className="w-11/12 flex justify-around items-center">
              <div className="px-4 py-24 flex flex-col">
                <div>
                  <div className="flex w-full mb-3 items-center justify-start ">
                    <span className="border-4 h-0 border-secondary w-14 mr-4 "></span>
                    <span className="font-light text-lg tracking-widest">
                      FALE COMIGO
                    </span>
                  </div>
                  <div className="mb-12">
                    <span className="font-medium text-fontPrimary text-7xl font-serif">
                      Vamos Conversar
                    </span>
                  </div>
                </div>
                <div className="flex max-w-xl max-h-full">
                  <div className="">
                    <div className=" mb-9">
                      <p className="text-fontSecondary text-sans text-sm leading-8 font-light ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat debitis explicabo eius inventore dignissimos
                        deserunt dolores, fugit qui aliquam iusto perspiciatis,
                        dolor cupiditate, labore aut pariatur laboriosam
                        accusamus magni a.
                      </p>
                    </div>
                    <div className="max-w-96">
                      <Button text="ENTRE EM CONTATO"></Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
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
          <div className="mb-4 flex items-center justify-center mt-9 py-28 bg-tertiary ">
            <div className="w-11/12 flex items-start justify-center">
              <div className="flex flex-col justify-center items-center w-1/2 ">
                <GrayImageText
                  photoAddress={"/Foto3.jpg"}
                  text={"ENTRE EM CONTATO"}
                ></GrayImageText>
                <div className="flex w-full justify-center items-center">
                  <form className="w-full" action="">
                    <div className="flex items-center justify-between my-8">
                      <div className="w-80 mr-4">
                        <Input type={""} placeholder={"Nome"}></Input>
                      </div>
                      <div className="w-80">
                        <Input type={""} placeholder={"Email"}></Input>
                      </div>
                    </div>
                    <div className="w-full">
                      <TextArea placeholder={"Mensagem"}></TextArea>
                    </div>
                    <Button text={"ENVIAR"}></Button>
                  </form>
                </div>
              </div>

              <div className="pt-12 pl-12 pr-4 flex flex-col items-start h-full max-w-1/2">
                <div>
                  <div className="flex w-full mb-3 items-center justify-start ">
                    <span className="border-4 h-0 border-secondary w-14 mr-4 "></span>
                    <span className="font-light text-lg tracking-widest">
                      ENCOMENDE JÁ
                    </span>
                  </div>
                  <div className="mb-12">
                    <span className="font-medium text-fontPrimary text-7xl font-serif w-full">
                      Tem um Projeto?
                    </span>
                  </div>
                </div>
                <div className="flex flex-col max-w-xl max-h-full">
                  <div className="">
                    <div className=" mb-9">
                      <p className="text-fontSecondary text-sans text-sm leading-8 font-light ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Libero explicabo, dolorem perspiciatis eligendi
                        accusantium eveniet consequuntur possimus facere officia
                        deserunt animi aperiam odio maiores, impedit dicta,
                        neque illo rem voluptate.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between max-w-full">
                    <div className="flex justify-center items-center">
                      <FiMail className="text-secondary text-5xl mr-4"></FiMail>
                      <div>
                        <span className="font-thin tracking-widest text-fontPrimary font-sans text-xl mb-2">
                          Email
                        </span>
                        <p className="font-thin tracking-widest text-fontSecondary font-sans text-base mb-2">
                          vitimendoza@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <FiPhone className="text-secondary text-5xl mr-4"></FiPhone>
                      <div>
                        <span className="font-thin tracking-widest text-fontPrimary font-sans text-xl mb-2">
                          Telefone
                        </span>
                        <p className="font-thin tracking-widest text-fontSecondary font-sans text-base mb-2">
                          (62) 9 9918-9082
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>
    </main>
  );
}
