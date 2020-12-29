import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectMenuSections } from '../../redux/menu/menu.selectors'

import MenuItem from '../MenuItem/MenuItem'

import './Menu.scss'

const Menu = ({ sections }) => (
  <div className="menu">
    {
      sections.map(({id, ...menuProps}) => (
        <MenuItem key={id} {...menuProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectMenuSections
})

export default connect(mapStateToProps)(Menu)