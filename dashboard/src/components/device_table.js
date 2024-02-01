import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell } from '../common/styles';
import Row from './row';


export default function DeviceTable({data}) {
  return (
    <TableContainer component={Paper}
      sx={{
        marginLeft: 'auto',
        marginRight: 'auto',
        width: "99%",
        border: "1px solid rgba(0,0,0,0)"
      }}
    >
      <Table aria-label="device-table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>Device Name</StyledTableCell>
            <StyledTableCell align="right">Trusted</StyledTableCell>
            <StyledTableCell align="right">IP Address</StyledTableCell>
            <StyledTableCell align="right">MAC Address</StyledTableCell>
            <StyledTableCell align="right">Created By</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <Row key={item.id} row={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
