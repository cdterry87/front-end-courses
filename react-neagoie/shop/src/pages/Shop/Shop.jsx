import React, { Component } from 'react'
import ShopData from './data'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

class Shop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: ShopData
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div className="shop">
        <h1>Shop</h1>
        {
          collections.map(({ id, ...shopProps}) => (
            <CollectionPreview key={id} {...shopProps} />
          ))
        }
      </div>
    )
  }
}

export default Shop