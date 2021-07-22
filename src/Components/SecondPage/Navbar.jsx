import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import { useStyles } from '@material-ui/pickers/views/Calendar/Day'
import React from 'react'


export const Navbar = () => {

    const classes = useStyles()
    return (
        <div>
            <AppBar>
                <Toolbar>

                </Toolbar>
            </AppBar>
        </div>
    )
}
