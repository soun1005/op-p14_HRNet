import React, { useState } from 'react';
import {
  ColumnDef,
  // ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { makeData } from './makeData';
import FormValues from '../../type/formType';
import mockData from '../../data/mockEmployees';
// import columns from './columns';

export function Table() {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  // columns
  const columns = React.useMemo<ColumnDef<FormValues>[]>(
    () => [
      {
        header: () => <span>First Name</span>,
        accessorKey: 'firstName',
      },
      {
        accessorKey: 'lastName',
        header: () => <span>Last Name</span>,
      },
      {
        accessorKey: 'startDate',
        header: () => <span>Start Date</span>,
      },
      {
        accessorKey: 'department',
        header: () => <span>Department</span>,
      },
      {
        accessorKey: 'birthDate',
        header: () => <span>Date of Birth</span>,
      },
      {
        accessorKey: 'street',
        header: () => <span>Street</span>,
      },
      {
        accessorKey: 'city',
        header: () => <span>City</span>,
      },
      {
        accessorKey: 'state',
        header: () => <span>State</span>,
      },
      {
        accessorKey: 'zip',
        header: () => <span>Zip Code</span>,
      },
    ],
    []
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<FormValues[]>(() => makeData(mockData));

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <div className="p-2">
      <div className="h-2" />
      <table>
        <thead>
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
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
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
        </tbody>
      </table>
      <div> Total : {table.getRowModel().rows.length} Employees</div>
    </div>
  );
}
