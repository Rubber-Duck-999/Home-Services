import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableHead from '@mui/material/TableHead';
import { StyledTableCell } from '../common/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import GetDeviceBadge from './device_badge';
import { TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function Row({ row }) {
    const [open, setOpen] = React.useState(false);

    const trusted = row.trusted === null ? "Untrusted" : "Trusted";

    return (
        <React.Fragment>
            <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <StyledTableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    {
                        GetDeviceBadge(row)
                    }
                </StyledTableCell>
                <StyledTableCell align="right">{trusted}</StyledTableCell>
                <StyledTableCell align="right">{row.ipAddress}</StyledTableCell>
                <StyledTableCell align="right">{row.macAddress}</StyledTableCell>
                <StyledTableCell align="right">{row.createdBy}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <StyledTableRow>
                                        <StyledTableCell>ID</StyledTableCell>
                                        <StyledTableCell align="right">User</StyledTableCell>
                                        <StyledTableCell align="right">Created</StyledTableCell>
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <StyledTableRow key={historyRow.id}>
                                            <StyledTableCell component="th" scope="row">
                                                {historyRow.id}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{historyRow.user}</StyledTableCell>
                                            <StyledTableCell align="right">{historyRow.created}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </StyledTableCell>
            </StyledTableRow>
        </React.Fragment>
    );
}

