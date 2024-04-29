import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

function Root() {

  return (
    <>

      <div className="flex flex-col h-full">
        <Header/>
          <main role="main" className="flex-grow">

            <section id="ana-eloisa" className="w-full" >
              <div className="w-full h-[64rem] md:h-[86rem] bg-cover relative overflow-hidden" style={{backgroundImage: "url('home/main-banner/banner@2x.png')"}}>
                <div className="flex h-full w-full max-w-[120.8rem] mx-auto px-6">
                  <img src="home/main-banner/ana-banner@2x.png" className="w-auto h-[48rem] md:h-[76rem] self-end" alt="ana loisa" />
                  <div className="block self-center">
                    <div className="mb-5 md:mb-15">
                      <h1 className="text-white roboto-bold text-40 leading-[5.6rem] md:text-80 md:leading-[10.4rem]">
                        SOY ANA ELOISA
                      </h1>
                      <h2 className="text-white roboto-medium text-40 leading-[5.6rem] md:text-60 md:leading-[7.2rem]">
                        Mentora y Speaker
                      </h2>
                    </div>
                    <div className="bg-[#CED5F6] w-full rounded-s-40 py-8 px-10 absolute">
                      <h1 className="text-40 leading-[5.6rem] md:text-90 text-pigment-indigo-900 roboto-bold">
                        PERENNIAL
                      </h1>
                      <h2 className="text-40 leading-[5.6rem] md:text-60 md:leading-[10rem] text-pigment-indigo-900 roboto-bold">
                        Mindset & Life Style
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="que-es-pennials" className="w-full" >
              <div className="w-full bg-dove-gray-50 py-5">
                <img src="home/perennals/PERENIALS@2x.png" className="block mx-auto w-auto h-17" alt="perennals" />
              </div>

              <div className="bg-white w-full py-20">
                <article className="w-full max-w-[120.8rem] mx-auto px-6">
                  <figure className="mb-12">
                    <p className="text-30">
                      <span className="roboto-bold">Soy una apasionada por empoderar a individuos y organizaciones a través de la adopción de la mentalidad y estilo de vida “Perennial”.</span> Con una trayectoria destacada en consultoría empresarial y comunicación estratégica. <br /> <br /> Mi enfoque único combina experiencia, innovación y una profunda comprensión de las dinámicas generacionales, ayudando a mis clientes a superar estereotipos y a alcanzar sus objetivos con visión y propósito.
                    </p>
                  </figure>
                  <footer>
                    <a href="/movimiento-perennial" className="inline-flex items-center gap-x-5 text-white bg-pigment-indigo-700 hover:bg-pigment-indigo-600 focus:ring-4 focus:ring-pigment-indigo-300 roboto-medium rounded-20 text-30 px-8 py-5 focus:outline-none leading-[3.6rem] ">
                      <span>Más de perennials</span>
                      <FontAwesomeIcon icon={['far', 'arrow-right']} className="w-8 h-8 text-white" />
                    </a>
                  </footer>
                </article>
              </div>
            </section>

            <section id="historias-de-exito" className="w-full">
              <div className="w-full bg-pigment-indigo-900 py-15">
                <article>
                  <header className="text-white mb-25">
                    <div className="w-full max-w-[118.6rem] mx-auto px-3">
                      <h1 className="roboto-bold text-center text-60 leading-[7.6rem] md:text-80 md:leading-[9.6rem] mb-12">
                        HISTORIAS DE ÉXITO
                      </h1>
                      <p className="text-center text-30 leading-[3.4rem]">
                        Inspírate con las transformaciones reales de quienes han trabajado con Ana. Desde individuos hasta corporaciones, estas historias destacan el impacto positivo de adoptar cambios significativos en sus vidas y empresas. Conéctate con las experiencias que motivan.
                      </p>
                    </div>
                  </header>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[182.4rem] mx-auto px-6">
                    <div className="w-full bg-white rounded-40 py-13 px-8">
                      <div className="flex flex-col items-center">
                        <img
                          className="w-49 h-49 mb-8 rounded-full shadow-lg"
                          src="home/historias-de-exito/Adriana-Saenz@2x.png"
                          alt="Bonnie image"
                        />
                        <h5 className="roboto-medium mb-8 text-30 text-black ">
                          Adriana Saenz
                        </h5>
                        
                        <div className="">
                          <p className="text-center text-black text-30 leading-[3.4rem] md:text-20 md:leading-[2.4rem] roboto-light-italic">
                              Participar en la mentoría de Ana Eloísa fue una revelación en mi crecimiento personal. Me enseñó a explorar profundidades de mí que desconocía y a convertir mis debilidades en fortalezas. Este viaje no solo me transformó profesionalmente, sino que también enriqueció mi vida personal, dándome las herramientas para abrazar el cambio y avanzar con propósito y claridad.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-white rounded-40 py-13 px-8">
                      <div className="flex flex-col items-center">
                        <img
                          className="w-49 h-49 mb-8 rounded-full shadow-lg"
                          src="home/historias-de-exito/Jessica-Perez@2x.png"
                          alt="Bonnie image"
                        />
                        <h5 className="roboto-medium mb-8 text-30 text-black ">
                          Jessica Pérez
                        </h5>
                        
                        <div className="">
                          <p className="text-center text-black text-30 leading-[3.4rem] md:text-20 md:leading-[2.4rem] roboto-light-italic">
                              Mi experiencia con Ana Eloísa fue un verdadero punto de inflexión. Sus mentorías me ayudaron a identificar y derribar las barreras que impedían mi crecimiento personal y profesional. Con su apoyo, logré desbloquearme y avanzar con confianza hacia la realización de mis proyectos. Gracias a ella, ahora me muevo a una velocidad superior en la consecución de mis objetivos.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-white rounded-40 py-13 px-8">
                      <div className="flex flex-col items-center">
                        <img
                          className="w-49 h-49 mb-8 rounded-full shadow-lg"
                          src="home/historias-de-exito/Stephanie-De-Sales@2x.png"
                          alt="Bonnie image"
                        />
                        <h5 className="roboto-medium mb-8 text-30 text-black ">
                          Stephanie De Sales
                        </h5>
                        
                        <div className="">
                          <p className="text-center text-black text-30 leading-[3.4rem] md:text-20 md:leading-[2.4rem] roboto-light-italic">
                              La colaboración con Ana me proporcionó una valiosa perspectiva profesional. Su mentoría no solo me ofreció un modelo excepcional a seguir, sino que también incrementó mi disciplina y me reveló la amplitud de aprendizaje necesario para ser excelente en mi campo. La experiencia fue integral, influyendo positivamente tanto en mi desarrollo profesional como personal.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </section>

            <section id="mis-libros" className="w-full">
              <div className="w-full bg-white py-25">
                <div className="w-full max-w-[120.8rem] mx-auto px-6">
                  <h1 className="roboto-bold text-center text-pigment-indigo-900 text-60 leading-[7.6rem] md:text-80 md:leading-[9.6rem] mb-8 uppercase tracking-[0.8rem]">Libros</h1>
                  <p className="text-black text-center text-30 mb-20 leading-[3.4rem]">
                    Sumérgete en las profundidades del conocimiento y la experiencia de Ana a través de sus libros y publicaciones. Aquí encontrarás detalles sobre cada obra, incluyendo sinopsis, puntos clave y enlaces directos para su compra o descarga.
                  </p>
                </div>

                <div className="w-full max-w-[120.8rem] mx-auto px-6">
                  <article className="w-full bg-mercury rounded-40 p-8 mb-8">
                    <div className="flex items-center gap-x-10 lg:gap-x-28">
                      <img src="home/libros/ni-juniors-ni-seniors-perennials@2x.png" className="w-69 h-95"  alt="libro" />

                      <div className="block w-full max-w-[57.2rem]">
                        <h2 className="text-pigment-indigo-900 roboto-medium text-30 mb-8">
                          NI JUNIOR NI SENIOR PERENNIALS
                        </h2>
                        <p className="text-20 text-black leading-[2.4rem] mb-8">
                          Sumérgete en las profundidades del conocimiento y la experiencia de Ana a través de sus libros y publicaciones. Aquí encontrarás detalles sobre cada obra, incluyendo sinopsis, puntos clave y enlaces directos para su compra o descarga.
                        </p>
                        <a href="https://lideditorial.com.co/product/ni-juniors-ni-seniors-perennials/" target="_blank" className="inline-flex items-center gap-x-5 text-white bg-pigment-indigo-900 hover:bg-pigment-indigo-800 focus:ring-4 focus:ring-pigment-indigo-300 roboto-medium rounded-20 text-30 px-8 py-5 focus:outline-none leading-[3.6rem] ">
                          <span>Ver más</span>
                          <FontAwesomeIcon icon={['far', 'arrow-right']} className="w-8 h-8 text-white" />
                        </a>
                      </div>

                    </div>
                  </article>
                  <article className="w-full bg-mercury rounded-40 p-8 mb-8">
                    <div className="flex items-center gap-x-10 lg:gap-x-28">
                      <img src="home/libros/mujer-perennial@2x.png" className="w-69 h-95"  alt="libro" />

                      <div className="block w-full max-w-[57.2rem]">
                        <h2 className="text-pigment-indigo-900 roboto-medium text-30 mb-8">
                          DESCUBRE LA MUJER PERENNIAL QUE HAY EN TI
                        </h2>
                        <p className="text-20 text-black leading-[2.4rem] mb-8">
                          Este libro está dirigido a mujeres como tú, a través de 7 pasos te llevo a explorar toda tu esencia a que te encuentres contigo misma y logres sacar toda la fuerza y todo ese potencial que llevas dentro,
                        </p>
                        <a href="https://www.buscalibre.com.co/libro-descubre-la-mujer-perennial-que-hay-en-ti/9789587578928/p/52779693" target="_blank" className="inline-flex items-center gap-x-5 text-white bg-pigment-indigo-900 hover:bg-pigment-indigo-800 focus:ring-4 focus:ring-pigment-indigo-300 roboto-medium rounded-20 text-30 px-8 py-5 focus:outline-none leading-[3.6rem] ">
                          <span>Ver más</span>
                          <FontAwesomeIcon icon={['far', 'arrow-right']} className="w-8 h-8 text-white" />
                        </a>
                      </div>

                    </div>
                  </article>
                  <article className="w-full bg-mercury rounded-40 p-8 mb-8">
                    <div className="flex items-center gap-x-10 lg:gap-x-28">
                      <img src="home/libros/transformate-y-vuela@2x.png" className="w-69 h-95"  alt="libro" />

                      <div className="block w-full max-w-[57.2rem]">
                        <h2 className="text-pigment-indigo-900 roboto-medium text-30 mb-8">
                          TRANSFÓRMATE Y VUELA
                        </h2>
                        <p className="text-20 text-black leading-[2.4rem] mb-8">
                          En este libro hablamos sobre el símil de la vida de una mariposa con la vida de una mujer; conocemos la belleza de la mariposa y nos deslumbra su capacidad de transformación y adaptación.
                        </p>
                        <a href="https://www.amazon.com/-/es/Ana-Eloisa-Zu%C3%B1iga-Bonfante-ebook/dp/B08231P7QJ" target="_blank" className="inline-flex items-center gap-x-5 text-white bg-pigment-indigo-900 hover:bg-pigment-indigo-800 focus:ring-4 focus:ring-pigment-indigo-300 roboto-medium rounded-20 text-30 px-8 py-5 focus:outline-none leading-[3.6rem] ">
                          <span>Ver más</span>
                          <FontAwesomeIcon icon={['far', 'arrow-right']} className="w-8 h-8 text-white" />
                        </a>
                      </div>

                    </div>
                  </article>
                  <article className="w-full bg-mercury rounded-40 p-8 mb-8">
                    <div className="flex items-center gap-x-10 lg:gap-x-28">
                      <img src="home/libros/etiqueta-moderna@2x.png" className="w-69 h-95"  alt="libro" />

                      <div className="block w-full max-w-[57.2rem]">
                        <h2 className="text-pigment-indigo-900 roboto-medium text-30 mb-8">
                          ETIQUETA MODERNA
                        </h2>
                        <p className="text-20 text-black leading-[2.4rem] mb-8">
                          El propósito fundamental de este libro es desmitificar muchos de los conceptos tejidos alrededor de la etiqueta, a la que se considera un arte exclusivo de las más altas esferas sociales.
                        </p>
                        <a href="https://www.librerianorma.com/producto/producto?p=fPj6siKlEQhY4IKAphL2Mmi0muFkonKf" target="_blank" className="inline-flex items-center gap-x-5 text-white bg-pigment-indigo-900 hover:bg-pigment-indigo-800 focus:ring-4 focus:ring-pigment-indigo-300 roboto-medium rounded-20 text-30 px-8 py-5 focus:outline-none leading-[3.6rem] ">
                          <span>Ver más</span>
                          <FontAwesomeIcon icon={['far', 'arrow-right']} className="w-8 h-8 text-white" />
                        </a>
                      </div>

                    </div>
                  </article>
                </div>

              </div>
            </section>

          </main>
        <Footer/>
      </div>

    </>
  );
}

export default Root
