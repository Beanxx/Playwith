import React from "react";
import styled from "styled-components";
import { useTable, useGlobalFilter, useSortBy, usePagination } from "react-table";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import lock_icon from "../image/lock_icon.png";
import enter_icon from "../image/enter_icon.png";

function RoomTable({ columns, data }){
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow,
        setGlobalFilter,
        pageOptions,
        page,
        gotoPage,
        pageCount,
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        { 
            columns, 
            data,
            initialState: { pageIndex: 0, pageSize: 7 },
        }, useGlobalFilter, useSortBy, usePagination)
    
    return(
        <>
        <Search onSubmit={setGlobalFilter} />
        <Table {...getTableProps()}>
            <TableHead>
                {headerGroups.map((headerGroup) => (
                    <TableTR {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <TableTH {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render("Header")}
                            </TableTH>
                        ))}
                        <TableTH>참여</TableTH>
                    </TableTR>
                ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
                {page.map((row, i) => { 
                    prepareRow(row)
                    return(
                        <TableTR {...row.getRowProps()}>
                            {/* <TableTD>{...cell.getCellProps()}</TableTD> */}
                            {row.cells.map((cell) => (
                                <TableTD {...cell.getCellProps()}>{cell.render("Cell")}</TableTD>
                            ))}
                            <TableTD>
                                <Link to="/partyroom">
                                    <img src={enter_icon}></img>
                                </Link>
                            </TableTD>
                        </TableTR>
                    );
                })}
            </TableBody>
            <TableFoot>
                <TableNavigation>
                    <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {'<<'}
                    </Button>{' '}
                    <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {'<'}
                    </Button>{' '}
                    <strong>{pageIndex + 1}{' '} of {pageOptions.length}</strong>{' '}
                    <Button onClick={() => nextPage()} disabled={!canNextPage}>
                        {'>'}
                    </Button>{' '}
                    <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {'>>'}
                    </Button>{' '}
                </TableNavigation>
            </TableFoot>
        </Table>
        </>
    );
}

const Table = styled.table`
    margin-top: 15px;
    width: 85%;
    border-spacing: 0px;
`;

const TableHead = styled.thead`
    background-color: #e895bc;
    font-size: 20px;
    color: white;
`;

const TableBody = styled.tbody`
    color: #e895bc;
    font-size: 17px;
    text-align: center;
    font-weight: bold;
`;

const TableFoot = styled.tfoot`
    color: #e895bc;
`;

const TableNavigation = styled.div`
    margin-top: 10px;
    position: absolute;
    left: 45%;
`;

const TableTR = styled.tr`
`;

const TableTH = styled.th`
    min-width: 50px;
`;

const TableTD = styled.td`
    border: 1px solid #e895bc;
    height: 30px;
`;

const Button = styled.button`
    background-color: #e895bc;
    border-radius: 5px;
    color: white;
    border: none;
    font-weight: bold;
`;

export default RoomTable;