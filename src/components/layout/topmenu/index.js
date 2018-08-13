import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import styles from './topmenu-styles'

function TopMenu(props) {
  const { classes, links } = props
  const Buttons = links.map((item, index) => (
    <Button key={index} className={classes.button} onClick={item.onClick}>
      {item.name}
    </Button>
  ))
  return <div className={classes.wrapper}>{Buttons}</div>
}

TopMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired,
}

export default withStyles(styles)(TopMenu)
