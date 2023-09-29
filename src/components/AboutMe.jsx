import React from "react";
import Dave from "../assets/images/unnamed.png";
import Skills from "./Skills";

const AboutMe = () => {
  return (
    <div id="about-me" className="">
      <div className="mt-20 lg:mt-40 max-w-[95%]  mx-auto ">
        <h2
          style={{
            filter: "drop-shadow(0px 20px 10px rgba(0, 0, 0, 0.30))",
          }}
          className="text-9xl font-bold text-[#ff5533fb] text-center mb-16"
        >
          ¿Quién es Dave?
        </h2>
        <div className="flex flex-col  px-16 ">
          <div className=" top-20 grid grid-cols-10  lg:gap-14 ">
            <div className="col-start-1 col-span-4">
              <div className="flex flex-col h-full flex-wrap justify-center items-center">
                <figure className=" rounded-full overflow-hidden h-80 w-80 ">
                  <img src={Dave} alt="Im Dave" className="h-full w-full " />
                </figure>
              </div>
            </div>
            <div className="col-span-6 ">
              <div className="rounded-[64px] py-[4rem] px-[4rem] bg-[#00C9C3]/70 shadow-xl">
                <p className="text-xl  text-[#2f2f2f]">
                  David de Jesús Martínez Mayeta, un apasionado desarrollador
                  Frontend con 2 años de experiencia en el emocionante mundo del
                  desarrollo web. Mi enfoque esencial es proporcionar soluciones
                  web que no solo sean visualmente impresionantes, sino que
                  también cumplan con altos estándares de usabilidad y
                  rendimiento. Creo firmemente en el poder de las habilidades
                  blandas para enriquecer la colaboración y la comunicación en
                  equipos de desarrollo. Mi capacidad para adaptarme rápidamente
                  a nuevos desafíos, mi atención meticulosa a los detalles y mi
                  deseo de aprendizaje continuo son cualidades que me han
                  permitido crecer y destacar en mi carrera.
                </p>
              </div>
            </div>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
