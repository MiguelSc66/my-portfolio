import React from "react";
import {
  DiNodejsSmall,
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiReact,
} from "react-icons/di";
import { BiLogoTailwindCss, BiLogoGmail } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-scroll";

export default function Home() {
  const copyEmailToClipboard = () => {
    const email = "miguel.scaccia1@gmail.com"; // Reemplaza con tu dirección de correo electrónico
    navigator.clipboard.writeText(email);
    toast("Se realizo una copia", {
      icon: "👍",
      style: {
        borderRadius: "10px",
        background: "white",
        color: "green",
      },
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-slate-700 relative">
      <nav className=" w-full h-[60px] flex justify-center items-center fixed top-0 left-0 right-0 shadow-lg bg-slate-800 py-2 z-10">
        <div>
          <ul className="flex space-x-52 font-semibold">
            <li className="text-gray-400">
              <Link
                to="section1"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                className="cursor-pointer"
              >
                Inicio
              </Link>
            </li>
            <li className="text-gray-400">
              <Link
                to="section2"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                className="cursor-pointer"
              >
                Sobre mí
              </Link>
            </li>
            <li className="text-gray-400">
              <Link
                to="section3"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                className="cursor-pointer"
              >
                Habilidades
              </Link>
            </li>
            <li className="text-gray-400">
              <Link
                to="section4"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                className="cursor-pointer"
              >
                Proyectos
              </Link>
            </li>
            <li className="text-gray-400">
              <Link
                to="section5" // Reemplaza "section5" con el identificador correcto del footer
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                className="cursor-pointer"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        id="section1"
        className="w-[130vh] min-h-[40vh] mt-[33vh] relative justify-center items-center bg-slate-800 shadow-lg shadow-black  rounded-lg "
      >
        <p className="text-[24px] font-semibold text-red-700 mx-4">
          Bienvenido, mi nombre es
        </p>
        <h1 className="text-[65px] font-semibold text-gray-400 mx-4">
          Miguel Scaccia
        </h1>
        <h1 className="text-[65px] font-semibold text-yellow-700 mx-4">
          Soy desarrollador Full Stack
        </h1>
        <div className="mt-4">
          <p className="text-gray-400 text-[20px] mx-4">
            ¡Hola! Soy Miguel Iván Scaccia, un apasionado desarrollador web con
            una profunda afinidad por la tecnología y la programación. <br />
            Mi personalidad introvertida coexiste con un espíritu amigable y
            sociable, lo que me permite conectarme con personas de diversas{" "}
            <br /> perspectivas y trabajar eficazmente en equipo.
          </p>
        </div>
      </div>
      <div
        id="section2"
        className="w-[130vh] min-h-[40vh] mt-[50vh] shadow-lg bg-slate-800 shadow-black relative"
      >
        <h2 className="text-4xl font-semibold text-red-700 mt-6 mx-4">
          Sobre mí
        </h2>
        <div className="overflow-y-auto max-h-[30vh] mt-[45px] mx-4">
          <p className="text-gray-400 font-semibold text-[20px]">
            Mi interés por el mundo tech comenzó cuando era niño. Jugaba mucho a
            los videojuegos y le dedicaba una buena parte de mi tiempo libre.
            <br />
            A medida que pasaba el tiempo, comencé a interesarme por varias
            tecnologías, como el funcionamiento de una computadora, cómo
            funciona y se desarrolla una web, y también las aplicaciones. Este
            interés cambió mi forma de pensar y ver las cosas cotidianas de
            manera diferente. <br />
            Actualmente, estoy avanzando por este largo camino, adquiriendo todo
            tipo de tecnología e información nueva que pueda aumentar mi
            conocimiento y fortalecer mis habilidades.
          </p>
        </div>
      </div>
      <div
        id="section3"
        className="w-[130vh] min-h-[40vh] mt-[20vh] bg-slate-800 shadow-lg shadow-black relative"
      >
        <h2 className="text-4xl flex font-semibold text-red-700 mt-6 mx-4 justify-center">
          Habilidades
        </h2>
        <div className="flex flex-wrap justify-center mt-6">
          {/* Cuadro 1 */}
          <div className="bg-white w-[25vh] rounded-xl shadow-md overflow-hidden mx-2 mb-4">
            <DiNodejsSmall
              className="h-[150px] w-full object-cover text-green-700"
              alt="Imagen de la habilidad 1"
            />
            <div className="p-4">
              <p className="text-gray-700 text-lg text-center font-semibold">
                Node
              </p>
            </div>
          </div>

          {/* Cuadro 2 */}
          <div className="bg-white rounded-xl w-[25vh] shadow-md overflow-hidden mx-2 mb-4">
            <DiJsBadge
              className="h-[150px] w-full object-cover text-yellow-400"
              alt="Imagen de la habilidad 2"
            />
            <div className="p-4">
              <p className="text-gray-700 text-lg font-semibold text-center">
                JavaScript
              </p>
            </div>
          </div>

          {/* Cuadro 3 */}
          <div className="bg-white rounded-xl  w-[25vh] shadow-md overflow-hidden mx-2 mb-4">
            <DiHtml5
              className="h-[150px] w-full object-cover text-orange-600"
              alt="Imagen de la habilidad 3"
            />
            <div className="p-4">
              <p className="text-gray-700 text-lg font-semibold text-center">
                HTML
              </p>
            </div>
          </div>

          {/* Cuadro 4 */}
          <div className="bg-white rounded-xl w-[25vh] shadow-md overflow-hidden mx-2 mb-4">
            <DiCss3
              className="h-[150px] w-full object-cover text-blue-700"
              alt="Imagen de la habilidad 4"
            />
            <div className="p-4">
              <p className="text-gray-700 text-lg font-semibold text-center">
                CSS
              </p>
            </div>
          </div>
          {/* Cuadro 5 */}
          <div className="bg-white rounded-xl w-[25vh] shadow-md overflow-hidden mx-2 mb-4">
            <DiReact
              className="h-[150px] w-full object-cover text-blue-500"
              alt="Imagen de la habilidad 4"
            />
            <div className="p-4">
              <p className="text-gray-700 text-lg font-semibold text-center">
                REACT
              </p>
            </div>
          </div>
          {/* Cuadro 6 */}
          <div className="bg-white rounded-xl w-[25vh] shadow-md overflow-hidden mx-2 mb-4">
            <BiLogoTailwindCss
              className="h-[150px] w-full object-cover text-blue-700"
              alt="Imagen de la habilidad 4"
            />

            <div className="p-4">
              <p className="text-gray-700 text-lg font-semibold text-center">
                Tailwind css
              </p>
            </div>
          </div>
          {/* Cuadro 7 */}
          <div className="bg-white rounded-xl w-[25vh] flex flex-col justify-center items-center shadow-md overflow-hidden mx-2 mb-4">
            <img
              src="/vite.png"
              className="h-[150px] w-[20vh] "
              alt="Imagen de la habilidad 4"
            />
            <div className="p-2 text-gray-700 text-lg font-semibold text-center">
              <p>Vite</p>
            </div>
          </div>

          {/* Cuadro 8 */}
          <div className="bg-white rounded-xl w-[25vh] flex flex-col justify-center items-center shadow-md overflow-hidden mx-2 mb-4">
            <img
              src="/postgresql.png"
              className="h-[150px] w-[23vh]"
              alt="Imagen de la habilidad 4"
            />
            <div className="p-4">
              <p className="text-gray-700 text-lg font-semibold text-center">
                POSTGRESQL
              </p>
            </div>
          </div>

          {/* Repite este patrón para más cuadros de habilidades */}
        </div>
      </div>
      <div
        id="section4"
        className="w-[130vh] min-h-[70vh] mt-[40vh] bg-slate-800 shadow-lg mb-[30vh] shadow-black relative"
      >
        <p className="flex text-4xl text-red-700 font-semibold justify-center">
          Proyectos
        </p>
        <div className="max-w-md  h-[23vh] mx-auto flex flex-col bg-white rounded-xl shadow-md mt-8 overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-[25vh] w-full object-cover md:w-48"
                src="https://res.cloudinary.com/duclhjrri/image/upload/v1695010629/webPF_pcilty.png"
                alt="Imagen de la tarjeta"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Vinyls-Trade
              </div>
              <a
                href="https://github.com/franjavi8776/Vinils_Trade_Client"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Enlace a más información
              </a>
              <p className="mt-2 text-gray-500 text-[15px]">
                Proyecto grupal que consiste en un E-commerce de
                Vinilos, consistió en la creación de una plataforma dedicada a la compra,
                venta de vinilos musicales. Conectamos a amantes de la música y coleccionistas en un espacio donde pueden descubrir
                y adquirir vinilos de alta calidad.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-md h-[23vh] mx-auto flex flex-col bg-white rounded-xl shadow-md mt-[8vh] overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-[25vh] w-full object-cover md:w-48"
                src="https://res.cloudinary.com/duclhjrri/image/upload/v1695012344/webPii_zeyczy.png"
                alt="Imagen de la tarjeta"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Countries
              </div>
              <a
                href="https://github.com/MiguelSc66/PI-Countries"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Enlace a más información
              </a>
              <p className="mt-2 text-gray-500 text-[15px]">
                Web para registar actividades para realizar en distintos paises
                del mundo, vas designando actividades a los paises que vas a
                vistiar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer id="section5" className="w-full bg-slate-800 text-gray-400 py-12">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="text-xl font-semibold text-center">
            <p className="text-[40px]">Miguel Scaccia</p>
            <br />
            <p className="text-lg">Desarrollador Full Stack</p>
            <br />
            <p>Redes</p>
          </div>
          <div className="flex space-x-8 mt-6">
            <a
              href="https://www.linkedin.com/in/miguel-ivan-scaccia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-3xl"
            >
              <BsLinkedin size={32} />
            </a>
            <a
              href="https://github.com/MiguelSc66"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-3xl"
            >
              <AiFillGithub size={32} />
            </a>
            <button
              onClick={copyEmailToClipboard}
              className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-3xl"
            >
              <BiLogoGmail size={32} />
            </button>
          </div>
        </div>
        <Toaster />
      </footer>
    </div>
  );
}
