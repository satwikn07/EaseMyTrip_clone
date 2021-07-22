import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import {LeftFilters } from '../LeftFilters/LeftFilters'
import { TopFilters } from '../TopFilters/TopFilters'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
  }));

export const FiltersAlign = () => {
    const classes = useStyles();

    return (
        <div className = {classes.root} >
            <LeftFilters/>
            <TopFilters/>
        </div>
    )
}
