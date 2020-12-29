import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import Collection from '../Collection/Collection'

const Shop = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={Collection} />
  </div>
)

export default Shop