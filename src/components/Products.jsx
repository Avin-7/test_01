import { productItems } from "../../products.js";

function Products() {
  return (
    <div id="products" className=" bg-[#eeeeee] pt-60 pb-60">
      <h1 className="text-5xl font-kalnia font-semibold text-center text-[#892bc7] intersect:motion-preset-slide-up motion-delay-100">
        Go Ahead, Pick Your Treat
      </h1>
      {/* <div
        className=" pt-10 "
        style={{ height: "600px", position: "relative" }}
      >
        <CircularGallery
          bend={0}
          textColor="#000"
          font="bold 300px Montserrat"
          borderRadius={0.05}
          scrollEase={0.15}
        />
      </div> */}
      <div className="pt-20 px-20 max-sm:px-10 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-1 gap-y-32 max-md:gap-y-10 gap-x-5 ">
        {productItems &&
          productItems.map((product) => (
            <div className="grid place-items-center " key={Math.random() * 20}>
              <img
                src={product.image}
                className="rounded-xl object-cover h-72 w-72"
                alt="product-image"
              />
              <h2 className=" font-josefin text-2xl text-center mt-4 text-purple-950">
                {product.text}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
