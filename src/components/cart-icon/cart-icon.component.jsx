import React from "react";
import { connect } from "react-redux";
import "./cart-icon.styles.scss";

import toggleCartActive from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartActive }) => (
  <div className="cart-icon" onClick={toggleCartActive}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToCart = (dispatch) => ({
  toggleCartActive: () => dispatch(toggleCartActive())
});

export default connect(null, mapDispatchToCart)(CartIcon);
