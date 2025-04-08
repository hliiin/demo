import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  updateQuantity,
} from "../store/modules/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
  ];

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - 商品价格：${product.price}
          </span>
          <button onClick={() => dispatch(addItem(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default function Cart() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  return (
    <div>
      <ProductList />
      <hr />
      <div>
        <h2>Shopping Cart</h2>
        {items.length === 0 ? (
          <p>The cart is empty.</p>
        ) : (
          items.map((item) => (
            <div key={item.id}>
              <span>
                {item.name} - ${item.price} x 数量：{item.quantity}
              </span>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) =>dispatch( updateQuantity({id: item.id,quantity: parseInt(e.target.value, 10) || 1,}))}
              />
              <button onClick={() => dispatch(removeItem(item.id))}>
                删除
              </button>
            </div>
          ))
        )}
        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
}
