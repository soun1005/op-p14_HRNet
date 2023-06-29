// import { useTable } from 'react-table';
// import { useMemo } from 'react';

const Table = () => {
  //   const data = useMemo(() => employeeData, [employeeData]);

  //   const columns = useMemo(
  //     () => [
  //       // header -> 표 상단 머리통에 표시되는 내용
  //       // accessor -> 내 데이터 안에서 표시되어있는 내용(header내용 매치되는 데이터)
  //       {
  //         Header: 'First Name',
  //         accessor: 'firstName',
  //       },
  //       {
  //         Header: 'Last Name',
  //         accessor: 'lastName',
  //       },
  //       {
  //         Header: 'Start Date',
  //         accessor: 'startDate',
  //       },
  //       {
  //         Header: 'Department',
  //         accessor: 'department',
  //       },
  //       {
  //         Header: 'Date of Birth',
  //         accessor: 'birthDate',
  //       },
  //       {
  //         Header: 'Street',
  //         accessor: 'street',
  //       },
  //       {
  //         Header: 'City',
  //         accessor: 'city',
  //       },
  //       {
  //         Header: 'State',
  //         accessor: 'state',
  //       },
  //       {
  //         Header: 'Zip Code',
  //         accessor: 'zip',
  //       },
  //     ],
  //     []
  //   );

  //   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //     useTable({ columns, data });

  return (
    <div className="container">
      {/* {data ? (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2> No employees </h2>
      )} */}
    </div>
  );
};

export default Table;
