import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section className=" flex justify-center items-center h-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-bold lg:text-9xl text-primary-green">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-primary-brown md:text-4xl ">
            Algo falta, algo está faltando.
          </p>
          <p className="mb-4 text-lg font-light text-gray-03">
            Lo sentimos, no podemos encontrar esa página. Encontrarás mucho para explorar en la casa.{" "}
          </p>
          <Link
            to="/"
            id="btn-come-back-root"
            className="block text-white bg-primary-green hover:bg-primary-green/80 focus:ring-4 focus:outline-none focus:ring-primary-green/30 font-medium rounded-md text-lg px-4 py-2 text-center "
          >
            Volver a la página de inicio
          </Link>
        </div>
      </div>
    </section>

  );
}