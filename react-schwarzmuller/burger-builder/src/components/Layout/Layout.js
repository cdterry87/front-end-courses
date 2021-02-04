import React from 'react'

import Wrapper from '../../hoc/Wrapper'
import classes from './Layout.module.css'

const Layout = (props) => (
  <Wrapper>
    <div>
      Toolbar
      Drawer
      Backdrop
    </div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Wrapper>
)

export default Layout