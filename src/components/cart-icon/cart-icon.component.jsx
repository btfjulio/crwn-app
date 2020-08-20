import React from "react";
import { connect } from "react-redux";
import "./cart-icon.styles.scss";
import { createStructuredSelector } from "reselect";

import { toggleCartActive } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartActive, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartActive}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartActive: () => dispatch(toggleCartActive()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
