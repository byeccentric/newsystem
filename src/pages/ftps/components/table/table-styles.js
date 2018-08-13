const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  hidden: {
    opacity: 0,
    position: 'absolute',
    left: '-99999px',
  },
  centered: {
    textAlign: 'center',
  },
})

export default styles
