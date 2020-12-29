import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollections } from '../../redux/shop/shop.selectors'

import CollectionPreview from '../CollectionPreview/CollectionPreview'

import './CollectionsOverview.scss'

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {
      collections.map(({ id, ...shopProps}) => (
        <CollectionPreview key={id} {...shopProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)