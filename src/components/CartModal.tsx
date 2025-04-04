"use client";
import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-80 absolute p-5 bg-white top-5 right-0 flex flex-col gap-4 z-20 rounded-lg shadow-xl border border-gray-200">
      {!cartItems ? (
        <div className="text-gray-500 text-sm text-center py-4">
          Your cart is empty
        </div>
      ) : (
        <>
          <div className="flex items-center gap-4">
            {/* Product Image */}
            <Image
              src="/deer.jpg"
              alt="Product Image"
              width={72}
              height={96}
              className="object-cover rounded-md"
            />

            {/* Product Details */}
            <div className="flex flex-col gap-1 flex-grow">
              <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                [Limited] Spitting Australia Llama
              </h3>

              <span className="text-green-600 text-xs font-medium">
                Available
              </span>

              {/* Price & Quantity */}
              <div className="flex items-center justify-between text-sm font-medium">
                <span className="text-gray-700">$49</span>
                <span className="text-gray-500 text-xs">Qty: 6</span>
              </div>

              {/* Remove Button */}
              <button className="text-red-500 border-red-500 border px-2 py-1 text-xs font-medium rounded-md transition duration-200 hover:bg-red-500 hover:text-white hover:border-red-500">
                Remove
              </button>
            </div>
          </div>

          {/* Subtotal Section */}
          <div className="border-t pt-3">
            <div className="flex items-center justify-between font-semibold">
              <span className="text-gray-800">Subtotal</span>
              <span className="text-gray-800">$84</span>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              Shipping & taxes calculated at checkout.
            </p>
          </div>

          {/* Checkout & View Cart Buttons */}
          <div className="flex justify-between text-sm mt-3">
            <button className="rounded-md py-2 px-4 border border-gray-300 text-gray-700 transition duration-200 hover:bg-gray-100">
              View Cart
            </button>
            <button className="rounded-md py-2 px-4 bg-yellow-500 text-white font-medium transition duration-200 hover:bg-yellow-600">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
