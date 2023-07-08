import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../Styles/theme'
import {DataGrid } from '@mui/x-data-grid'
import {users} from './../../data/users'

const DataTable = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.colors)
    const columns = [{
        field: 'id',
        headerName: 'ID'
    },
    {
        field: 'name',
        headerName: 'NAME'
    },
    {
        flex:1,
        field: 'email',
        headerName: 'EMAIL'
    },
    {
        field: 'access',
        headerName: 'ACCESS Level'
    },
    {
        field: 'active',
        headerName: 'ACTIVE'
    },
]
    return (
    <Box >
        <DataGrid height='75vh' columns={columns} rows={users} />
    </Box>
  )
}

export default DataTable