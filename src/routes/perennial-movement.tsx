// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ScrollRestoration } from 'react-router-dom';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

function PerennialMovement() {

  return (
    <>

    <ScrollRestoration />
    
      <div className="flex flex-col h-full">
        <Header/>
          <main role="main" className="flex-grow">

            <section className="w-full" id="banner">
              <div className="w-full h-[64rem] md:h-[86rem] bg-pigment-indigo-900 relative overflow-hidden">
                <div className="flex items-center h-full w-full max-w-[120.8rem] mx-auto px-6 gap-x-4">

                  <img src="home/movimiento-perennial.png" className="w-[36rem]  md:w-[68rem] md:h-[18rem]" alt="Movimineto perennial" />
                  <img src="home/main-banner/ana-banner@2x.png" className="w-auto h-[48rem] md:h-[76rem] self-end" alt="ana loisa" />
                  
                </div>
              </div>
            </section>

            <section className="w-full overflow-hidden mb-25" id="movimiento-perennial">
              <div className="w-full bg-white">
                <div className="w-full max-w-[118.6rem] mx-auto px-3 py-15 md:py-25">
                  <article className="w-full">
                    <figure>
                      <p className="text-30 leading-[3.4rem] text-black">
                        Es un movimiento inclusivo y dinámico que une a personas de todas las edades y experiencias que comparten una mentalidad dispuesta al cambio y adaptable. Nuestro movimiento valora la conexión y la comunidad, fomentando la creatividad, la innovación y el bienestar personal y social. 

                        <br />
                        <br />
                        Creemos en la importancia de buscar un propósito significativo en la vida, promoviendo la flexibilidad laboral y un equilibrio entre vida laboral y personal. Abogamos por un estilo de vida activo y saludable, manteniéndonos física y mentalmente activos a lo largo de nuestras vidas.
                        
                        <br />
                        <br />
                        Somos optimistas y resilientes, enfrentando los desafíos con una actitud positiva y la capacidad de recuperarnos rápidamente. 
                        
                        <br />
                        <br />
                        Nuestros intereses son diversos y nos encanta explorar diferentes aspectos de la vida, desde la cultura hasta la tecnología. 
                        <br />
                        <br />
                        Creemos en el espíritu emprendedor, dispuestos a tomar riesgos en busca de nuevas oportunidades y experiencias. 

                        <br />
                        <br />
                        <span className="block text-pigment-indigo-900 roboto-bold">Defendemos el precepto que la edad no debe ser un factor limitante, y que las personas pueden seguir siendo activas, creativas y contribuyendo a la sociedad en todas las etapas de la vida.</span> 

                        <br />
                        <br />
                        Valoramos la conexión intergeneracional y creemos en la importancia de aprender de personas de todas las edades y experiencias. 

                        <br />
                        <br />
                        <span className="block text-pigment-indigo-900 roboto-bold">
                          Nos oponemos a la idea de que una vez que se alcanza cierta edad, se deben retirar o limitar en términos de oportunidades de trabajo, participación en la sociedad o capacidad para aprender y crecer.
                        </span>

                      </p>
                    </figure>
                  </article>
                </div>
              </div>
 
              <div className="w-full bg-gradient-periwinkle-gray h-auto md:h-[58rem] py-20">
                <div className="w-full h-full flex justify-center items-center">
                  <img src="home/ana-loaisa-02.png" className="w-auto h-[68.4rem] hidden md:block" alt="person-02" />
                  <div className="w-full max-w-[92.8rem] px-6">
                    <h1 className="text-40 leading-[5.6rem] md:text-80 md:leading-[9.6rem] text-pigment-indigo-900 roboto-bold mb-5">
                      PROPÓSITO SUPERIOR:
                    </h1>
                    <p className="text-30 text-black leading-[3.4rem]">
                      Fomentar la conexión y la colaboración entre nuestros seguidores, inspirándolos a vivir vidas activas a lo largo de los años, creativas y significativas.
                    </p>
                  </div>
                </div>
              </div>
 
            </section>

            <section className="w-full mb-25">
              <div className="w-full max-w-[146.2rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <article className="bg-pigment-indigo-900 text-white rounded-40 p-13">
                  <header>
                    <h1 className="text-40 leading-[5.6rem] md:text-80 md:leading-[9.6rem] text-center roboto-bold mb-5">
                      Visión
                    </h1>
                  </header>
                  <figure>
                    <p className="text-28 text-center mb-12">
                      Lograr un mundo donde las personas de todas las edades se sientan valoradas y empoderadas, donde la edad no sea un factor limitante en la vida de una persona. Fomentando una cultura de respeto mutuo, aprendizaje intergeneracional, crecimiento personal y profesional continuo.
                    </p>
                  </figure>
                </article>
                <article className="bg-pigment-indigo-900 text-white rounded-40 p-13">
                  <header>
                    <h1 className="text-40 leading-[5.6rem] md:text-80 md:leading-[9.6rem] text-center roboto-bold mb-5">
                      Misión
                    </h1>
                  </header>
                  <figure>
                    <p className="text-28 text-center mb-12">
                      Crear espacios virtuales y físicos donde nuestros seguidores puedan conectarse entre sí, compartir sus experiencias y conocimientos, e inspirarse mutuamente para seguir aprendiendo, creciendo y contribuyendo a la sociedad en todas las etapas de la vida.
                    </p>
                  </figure>
                </article>
              </div>
            </section>

            <section className="w-full">
              <div className="w-full bg-gradient-periwinkle-gray py-20">
                <div className="w-full max-w-[120.8rem] mx-auto px-6">
                    <h1 className="text-40 leading-[5.6rem] md:text-80 md:leading-[9.6rem] text-pigment-indigo-900 roboto-bold mb-5">
                      ¿CUÁL ES EL ORIGEN DE LOS PERENNIAL?
                    </h1>
                    <p className="text-30 text-black leading-[3.4rem]">
                      El término “perennial” en inglés se refiere a algo que es duradero, que persiste a lo largo del tiempo, y Gina Pell, en el año 2016, lo utilizó para describir a las personas que se sienten jóvenes de espíritu y que tienen una actitud positiva y activa hacia la vida, independientemente de su edad cronológica. <br /> <br /> A diferencia de las generaciones tradicionales basadas en fechas de nacimiento, los Perennial se definen más por su actitud y mentalidad que por su edad. El nombre refleja la idea de que estas cualidades son “perennes” o eternas, y pueden encontrarse en personas de todas las edades.
                    </p>
                </div>
              </div>
            </section>

            <section className="w-full">
              <div className="w-full bg-white py-25">
                <div className="max-w-[118.4rem] mx-auto px-3">
                  <h1 className="text-40 leading-[5.6rem] md:text-[8rem] md:leading-[9.6rem] text-pigment-indigo-900 roboto-medium mb-8">
                    ¿QUÉ LOS CARACTERIZA?
                  </h1>
                  <div className="flex items-center w-full gap-x-4">
                    <div className="max-w-[88rem]">
                      <ul className="text-30 list-disc marker:text-pigment-indigo-900 pl-8">
                        <li className="mb-4">
                          <span>Tienen una mentalidad dispuesta al cambio y adaptable.</span>
                        </li>
                        <li className="mb-4">
                          <span>Valoran la conexión y la comunidad.</span>
                        </li>
                        <li className="mb-4">
                          <span>Son creativos e innovadores.</span>
                        </li>
                        <li className="mb-4">
                          <span>Se preocupan por el bienestar personal y social.</span>
                        </li>
                        <li className="mb-4">
                          <span>Buscan un propósito significativo en la vida.</span>
                        </li>
                        <li className="mb-4">
                          <span>Valoran trabajos que les permitan un equilibrio entre vida laboral y personal, así como la oportunidad de seguir aprendiendo y creciendo profesionalmente.</span>
                        </li>
                        <li className="mb-4">
                          <span>Viven un estilo de vida física y mentalmente activos, cuidando su salud y bienestar a lo largo de su vida.</span>
                        </li>
                        <li className="mb-4">
                          <span>Mantienen una actitud optimista hacia la vida y tienen la capacidad de recuperarse rápidamente de los desafíos y las adversidades.</span>
                        </li>
                        <li className="mb-4">
                          <span>Son personas con una amplia gama de intereses y pasiones, y disfrutan explorando diferentes aspectos de la vida, desde la cultura hasta la tecnología.</span>
                        </li>
                        <li className="mb-4">
                          <span>Emprendedores por naturaleza están dispuestos a tomar riesgos en busca de nuevas oportunidades y experiencias.</span>
                        </li>
                      </ul>
                    </div>
                    <img src="home/ana-loaisa-03.png" className="w-auto h-[80rem] hidden md:block" alt="Ana loaisa" />
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full">
              <div className="w-full bg-pigment-indigo-900 py-15">
                <div className="w-full max-w-[120.8rem] mx-auto px-6 ">
                  <h1 className="text-40 leading-[5.6rem] md:text-80 md:leading-[9.6rem] text-white roboto-medium mb-8">
                  ¿QUÉ LOS CARACTERIZA?
                  </h1>
                  <ul className="text-30 list-disc list-inside text-white marker:text-white">
                    <li className="mb-10">
                      <span>La idea de que la edad no debe ser un factor limitante en la vida de una persona.</span>
                    </li>
                    <li className="mb-10">
                      <span>Que las personas pueden seguir siendo activas, creativas y contribuyendo a la sociedad en todas las etapas de la vida. </span>
                    </li>
                    <li className="mb-10">
                      <span>Valoran la conexión intergeneracional y creen en la importancia de aprender de las personas de diferentes edades y experiencias.</span>
                    </li>
                    <li className="mb-10">
                      <span>Se oponen a la idea de que una vez que se alcanza cierta edad, se deben retirar o limitar en términos de oportunidades de trabajo, participación en la sociedad o capacidad para aprender y crecer.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="w-full">
              <div className="w-full bg-gradient-periwinkle-gray pt-20 mb-25">
                <div className="w-full max-w-[120.8rem] mx-auto px-6">
                  <h1 className="text-40 leading-[5.6rem] md:text-80 md:leading-[9.6rem] text-pigment-indigo-900 roboto-bold mb-5">
                    ¿CÓMO ES LA MENTALIDAD DE UN PERENNIAL?
                  </h1>

                  <div className="flex items-center gap-x-12">
                    <img src="home/people-02.png" className="w-[57.2rem] h-auto hidden md:block" alt="mentalidad perennial" />
                    <div className="block mb-25 md:mb-0">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="flex justify-center items-center w-20 h-20 flex-shrink-0">
                          <img src="home/pennial-mind/icono-01@2x.png" className="w-20 h-20 bg-cover" alt="" />
                        </div>
                        <p className="text-20 text-pigment-indigo-900 leading-[2.4rem]">
                          <span className="roboto-bold">Tienen una positiva hacia la vida</span> y ven el envejecimiento como una oportunidad para crecer y aprender.
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="flex justify-center items-center w-20 h-20 flex-shrink-0">
                          <img src="home/pennial-mind/icono-02@2x.png" className="w-20 h-20 bg-cover" alt="" />

                        </div>
                        <p className="text-20 text-pigment-indigo-900 leading-[2.4rem]">
                          <span className="roboto-bold">Son flexibles y están abiertos al cambio,</span> dispuestos a aprender nuevas habilidades y adaptarse a nuevas situaciones.
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="flex justify-center items-center w-20 h-20 flex-shrink-0">
                          <img src="home/pennial-mind/icono-03@2x.png" className="w-20 h-20 bg-cover" alt="" />

                        </div>
                        <p className="text-20 text-pigment-indigo-900 leading-[2.4rem]">
                          Mantienen una mentalidad de <span className="roboto-bold">aprendizaje continuo, siempre buscando nuevas</span> experiencias y conocimientos.
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="flex justify-center items-center w-20 h-20 flex-shrink-0">
                          <img src="home/pennial-mind/icono-04@2x.png" className="w-20 h-20 bg-cover" alt="" />

                        </div>
                        <p className="text-20 text-pigment-indigo-900 leading-[2.4rem]">
                          <span className="roboto-bold">Son curiosos, creativos e innovadores,</span> dispuestos a pensar de manera diferente y a probar nuevas ideas.
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="flex justify-center items-center w-20 h-20 flex-shrink-0">
                          <img src="home/pennial-mind/icono-05@2x.png" className="w-20 h-20 bg-cover" alt="" />

                        </div>
                        <p className="text-20 text-pigment-indigo-900 leading-[2.4rem]">
                          Dan <span className="roboto-bold">valor a las relaciones y la conexión con los demás</span>, tanto con personas de su misma edad como con personas de diferentes generaciones.
                        </p>
                      </div>
                    </div>
                  </div>

                    
                </div>
              </div>
            </section>

            <section className="w-full">
              <div className="w-full max-w-[120.8rem] mx-auto px-6 mb-25">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                  <article className="bg-mercury px-20 pt-15">
                    <figure className="text-pigment-indigo-900 mb-12">
                      <div className="w-38 h-38 md:w-51 md:h-51 mb-6 mx-auto">
                        <img src="home/pennial-mind/icono-06@2x.png" alt="icono-06" />
                      </div>
                      <h1 className="text-center text-40 roboto-bold leading-[4.4rem] mb-6">
                        ¿Cómo es el estilo de vida Perennial?
                      </h1>
                      <p className="text-center text-30 leading-[3.4rem]">
                        Su estilo de vida se centra en el aprendizaje continuo, la adaptabilidad y la apertura a nuevas experiencias.
                      </p>
                    </figure>
                  </article>
                  <article className="bg-mercury px-20 pt-15">
                    <figure className="text-pigment-indigo-900 mb-12">
                      <div className="w-38 h-38 md:w-51 md:h-51 mb-6 mx-auto">
                        <img src="home/pennial-mind/icono-08@2x.png" alt="icono-06" />
                      </div>
                      <h1 className="text-center text-40 roboto-bold leading-[4.4rem] mb-6">
                        ¿Qué inspira a un Perennial?
                      </h1>
                      <p className="text-center text-30 leading-[3.4rem]">
                        Un Perennial se inspira en la creatividad, la innovación y la posibilidad de cambio positivo en el mundo
                      </p>
                    </figure>
                  </article>
                  <article className="bg-mercury px-20 pt-15">
                    <figure className="text-pigment-indigo-900 mb-12">
                      <div className="w-38 h-38 md:w-51 md:h-51 mb-6 mx-auto">
                        <img src="home/pennial-mind/icono-07@2x.png" alt="icono-06" />
                      </div>
                      <h1 className="text-center text-40 roboto-bold leading-[4.4rem] mb-6">
                        ¿Con qué sueña un Perennial?
                      </h1>
                      <p className="text-center text-30 leading-[3.4rem]">
                        Sueñan con un futuro donde la edad no sea un factor limitante y donde las personas puedan seguir creciendo y contribuyendo a la sociedad en todas las etapas de la vida.
                      </p>
                    </figure>
                  </article>
                  <article className="bg-mercury px-20 pt-15">
                    <figure className="text-pigment-indigo-900 mb-12">
                      <div className="w-38 h-38 md:w-51 md:h-51 mb-6 mx-auto">
                        <img src="home/pennial-mind/icono-09@2x.png" alt="icono-06" />
                      </div>
                      <h1 className="text-center text-40 roboto-bold leading-[4.4rem] mb-6">
                        ¿Son los Perennial una Generación?
                      </h1>
                      <p className="text-center text-30 leading-[3.4rem]">
                        No son necesariamente una generación específica, sino más bien una forma de pensar y vivir que trasciende las barreras generacionales.
                      </p>
                    </figure>
                  </article>
                </div>
              </div>
            </section>

          </main>
        <Footer/>
      </div>

    </>
  )

}

export default PerennialMovement