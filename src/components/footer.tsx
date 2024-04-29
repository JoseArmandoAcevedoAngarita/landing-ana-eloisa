import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  return (
    <>

      <section className="w-full" id="contactame">
        <div className="bg-pigment-indigo-900 w-full py-18 overflow-hidden">
          <div className="flex w-full max-w-[120.8rem] mx-auto px-6 relative">
            <div className="block w-full md:w-auto">
              <div className="block mb-30">
                <h1 className="text-40 text-white roboto-bold mb-5">
                  PERENNIALS NEWS
                </h1>
                <div className="mb-5">
                  <input type="email" id="email" className="bg-white border border-gray-300 text-dove-gray-900 text-16 rounded-10 focus:ring-pigment-indigo-500 focus:border-pigment-indigo-500 block w-full py-5 px-7 placeholder:text-16" placeholder="Correo electrónico" required />
                </div>
                <div className="flex items-center mb-4">
                  <input id="checkbox-1" type="checkbox" value="" className="w-4 h-4 text-pigment-indigo-600 bg-white rounded-5 focus:ring-pigment-indigo-500 focus:ring-2" />
                  <label htmlFor="checkbox-1" className="ms-2 text-16 font-medium text-white ">Acepto la política de tratamiento de datos.</label>
                </div>
                <button type="button" className="w-full inline-block gap-x-5 text-white bg-pigment-indigo-700 hover:bg-pigment-indigo-600 focus:ring-4 focus:ring-pigment-indigo-300 roboto-medium rounded-20 text-30 px-8 py-5 focus:outline-none leading-[3.6rem] ">
                  <span>Enviar</span>
                </button>
              </div>
              <div className="block mb-5">
                <h1 className="text-40 text-white roboto-bold mb-2.5">
                  CONTÁCTAME
                </h1>
                <p className="text-20 text-white">
                  Si estas interesado en recibir alguna información.
                </p>
              </div>
              <div className="flex items-center gap-5 ">
                {/* <a href="" className="bg-white p-5 rounded-20 shadow">
                  <div className="w-15 h-15 flex justify-center items-center rounded-full bg-pigment-indigo-900 text-white">
                    <FontAwesomeIcon icon={['fab', 'tiktok']} className="w-8 h-8 text-white" />
                  </div>
                </a>
                <a href="" className="bg-white p-5 rounded-20 shadow">
                  <div className="w-15 h-15 flex justify-center items-center rounded-full bg-pigment-indigo-900 text-white">
                    <FontAwesomeIcon icon={['far', 'envelope']} className="w-8 h-8 text-white" />
                  </div>
                </a> */}
                <a href="" className="bg-white p-5 rounded-20 shadow">
                  <div className="w-15 h-15 flex justify-center items-center rounded-full bg-pigment-indigo-900 text-white">
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="w-8 h-8 text-white" />
                  </div>
                </a>
                {/* <a href="" className="bg-white p-5 rounded-20 shadow">
                  <div className="w-15 h-15 flex justify-center items-center rounded-full bg-pigment-indigo-900 text-white">
                    <FontAwesomeIcon icon={['fab', 'instagram']} className="w-8 h-8 text-white" />
                  </div>
                </a> */}
              </div>
            </div>
            <img src="home/device-mobile.png" className="w-full max-w-[75.6rem] h-auto absolute -top-31 right-0 translate-x-38 hidden lg:block" alt="mobile web" />
          </div>
        </div>
      </section>

      {/* <footer className="bg-purple-800">
        <div className="w-full max-w-[120.8rem] mx-auto px-6 pt-4 pb-12">
          <nav className="flex flex-col-reverse md:flex-row justify-between md:items-center w-full text-white py-8">
            <ul className="flex flex-col md:flex-row gap-x-20 text-20 roboto-medium">
              <li className="mb-5">
                <a href="">About</a>
              </li>
              <li className="mb-5">
                <a href="">Servicios</a>
              </li>
              <li className="mb-5">
                <a href="">Categorías</a>
              </li>
              <li className="mb-5">
                <a href="">Blog</a>
              </li>
              <li className="mb-5">
                <a href="">Contacto</a>
              </li>
            </ul>
            <ul className="flex gap-x-20 text-20 roboto-medium">
              <li className="mb-5">
                <a href="">Inicio</a>
              </li>
            </ul>
          </nav>
          <hr className="mb-8" />
          <ul className="flex gap-x-20 text-16 text-white">
            <li>
              <a href="">Pólitica de privacidad</a>
            </li>
          </ul>
        </div>
      </footer> */}

    </>
  );
};
