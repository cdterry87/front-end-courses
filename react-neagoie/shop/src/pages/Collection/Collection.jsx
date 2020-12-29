import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/CollectionItem/CollectionItem'

import { selectCollection } from '../../redux/shop/shop.selectors'

import './Collection.scss'

const Collection = ({ collection }) => (
  <div className="collection-page">
    <h2>Collection PAGE</h2>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionid)(state)
})

export default connect(mapStateToProps)(Collection)