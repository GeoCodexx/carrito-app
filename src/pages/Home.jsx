import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../contexts/ProductProvider";
import heroImage from "../assets/carrito_compras_colorido.png"

const Home = () => {
  const { products } = useContext(ProductContext);
  //const {darkMode}

  return (
    <div className="main">
      {/**HERO HOMEPAGE */}
      <header className="pt-[68px]">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={heroImage}
              className="lg:max-w-2xl"
            />
            <div className="mt-8 md:mt-0">
              <h1 className="text-4xl md:text-5xl font-bold">Mini E-commerce</h1>
              <p className="py-6 text-justify px-2">
                Proyecto elaborado con tecnologías modernas y robustas;
                tales como ReactJS para el diseño de interfaces de usuario y Tailwind CSS como 
                framework CSS que permite un desarrollo ágil, basado en clases de utilidad que se 
                pueden aplicar con facilidad en el código HTML y unos flujos de desarrollo que 
                permiten optimizar mucho el peso del código CSS.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-10">
        <div className="container p-4 mx-auto">
          {/**SECTION PRODUCTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-3 px-6 sm:px-4">
            {products.map((item, i) => (
              <ProductCard key={i} product={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
