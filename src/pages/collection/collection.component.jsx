import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";
import CollectionItem  from "../../components/collection-item/collection-item.component";

// import CollectionItem  from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, { match }) =>
  createStructuredSelector({
    collection: selectCollection(match.params.collectionId),
  });
export default connect(mapStateToProps)(CollectionPage);
