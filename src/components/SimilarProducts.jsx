import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SimilarProducts = ({ category, idProd }) => {
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    //SIMILAR PRODUCTS
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((elems) => {
        const similarProducts = elems.filter(
          (item) => item.category === category && item.id !== idProd
        );

        setSimilar(similarProducts);
      });
  }, [category, idProd]);

  return (
    <>
      <h2 className="font-semibold text-xl mb-4">Artículos Similares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
        {similar.length > 0 ? (
          similar.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
              <div className="border py-4 relative rounded-lg overflow-hidden group hover:shadow-lg h-full">
                <figure className="h-1/2 flex items-center">
                  <img
                    className="max-h-[120px] max-w-[120px] mx-auto group-hover:scale-110 transition duration-300 ease-in-out"
                    src={item.image}
                    alt={item.title}
                  />
                </figure>
                {item.title.length <= 28 ? (
                  <p className="text-center my-2 px-2">{item.title}</p>
                ) : (
                  <p
                    className={`text-center my-2 px-2 ${
                      item.title.length <= 28 && "mb-7"
                    }`}
                  >
                    {item.title.length >= 45
                      ? `${item.title.substring(0, 45)}...`
                      : item.title}
                  </p>
                )}

                <div className="absolute top-0 left-0 bg-secondary p-1 rounded-e-lg">
                  <p className="text-center text-white">
                    -{Math.round(Math.random() * 20 + 10)}%
                  </p>
                </div>
                <div className="flex justify-center">
                  <p className="text-xl px-12 py-2 text-gray-300 bg-primary rounded-lg">
                    S/{item.price.toFixed(2)}
                  </p>
                </div>
                <p className="text-center mt-1">
                  Vendidos: {item.rating.count}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center">
            UPS..!! NO SE ENCONTRARON RESULTADOS
          </div>
        )}
      </div>
    </>
  );
};

export default SimilarProducts;
