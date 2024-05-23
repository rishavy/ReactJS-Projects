import PropTypes from "prop-types";
import { products } from "../data";
import { useCart } from "react-use-cart";

function ProductList() {
  const { addItem } = useCart();
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {products.map((product) => (
          <div key={product.id} className="product bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow w-80">
            <div className="h-64">
              <img src={product.img} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <button
                onClick={() => addItem(product)}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
};

export default ProductList;
