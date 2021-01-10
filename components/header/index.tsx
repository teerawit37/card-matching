import { deflate } from "zlib"

import classes from './style.module.scss'

const Header = ({children}) => (
    <div className={classes.Header}>
        {children}
    </div>
)

export default Header;