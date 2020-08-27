import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectShopCollections,
  selectCollectionForPreview,
} from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections, collectionsKeys }) => {
  return (
    <div className="collections-overview">
      {collectionsKeys.map((key) => {
        const { id, ...otherCollectionProps } = collections[key];
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
  collectionsKeys: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
