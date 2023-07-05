import React, { useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { makeData } from './makeData';
import FormValues from '../../type/formType';

export function BasicTable({ tableData }: { tableData: FormValues[] }) {
  // columns
  const columns = React.useMemo<ColumnDef<FormValues>[]>(
    () => [
      {
        header: 'First Name',
        accessorKey: 'firstName',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'startDate',
        header: 'Start Date',
      },
      {
        accessorKey: 'department',
        header: 'Department',
      },
      {
        accessorKey: 'birthDate',
        header: 'Date of Birth',
      },
      {
        accessorKey: 'street',
        header: 'Street',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'zip',
        header: 'Zip Code',
      },
    ],
    []
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<FormValues[]>(() => makeData(tableData));
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [filtering, setFiltering] = useState('');
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setFiltering,
    debugTable: true,
  });

  // console.log('filtered value:', table.getRowModel().rows.length);
  // console.log('data:', data.length);

  return (
    <div className="tableWrap mb-10 mt-5 flex w-full flex-col items-center pb-5">
      <div className="optionWrap flex w-full justify-between">
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <div className="inputWrap">
          <span>Search: </span>
          <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            className="rounded border border-black"
          />
        </div>
      </div>
      {/* <div /> */}
      <table className="mt-3 h-full w-full">
        <thead className="mt-6 h-11  border bg-sub-green text-slate-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' ⬆️',
                          desc: ' ⬇️',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody className="text-center">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className="h-9">
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id} className="capitalize">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          {table.getRowModel().rows.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="pt-5 text-center">
                No employees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* <button onClick={() => table.setPageIndex(0)}>First Page</button> */}

      {data.length > 10 && (
        <div className="btnWrap mt-16 flex w-full justify-between">
          <button
            className=" rounded-lg border bg-sub-green px-5 py-1 text-slate-100"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            Previous Page
          </button>
          <button
            className=" rounded-lg border bg-sub-green px-5 py-1 text-slate-100"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            Next Page
          </button>
        </div>
      )}

      {data.length > 0 && (
        <span className="mt-10 flex items-center">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
      )}

      {/* <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
        Last Page
      </button> */}
    </div>
  );
}
