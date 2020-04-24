import * as React from "react"
import { Link } from "gatsby"
import Bio from "./bio"
import {AppBar, Toolbar, Typography, InputBase, Container, Divider} from '@material-ui/core'
import { fade, makeStyles } from "@material-ui/core/styles"
import SearchIcon from '@material-ui/icons/Search'


type Props = {
  location: Location
  title: string
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  const classes = useStyles()
  header = (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
      <Typography className={classes.title} variant="h6" noWrap>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
              {title}
            </Link>
      </Typography>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      </Toolbar>
      </AppBar>
    </div>
  )
  return (
    <div>
      <header>{header}</header>
      <Container fixed>
        <Container className={classes.main}>
          <main>{children}</main>
        </Container>
        <Divider className={classes.divider}/>
        <footer className={classes.footer}>
          <Bio />
          © {new Date().getFullYear()}, ys-0-sy. All rights reserved.
        </footer>
      </Container>
    </div>
  )
}

export default Layout

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  divider: {
    marginTop: 100,
  },
  footer: {
    marginBottom: 40,
    marginTop: 10,
    marginLeft: 40,
  },
  main: {
    marginTop: 30,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "white",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },
}))
