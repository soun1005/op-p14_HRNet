// export const Columns = [
//   { Header: 'First Name', accessorKey: 'firstName' },
//   { Header: 'Last Name', accessorKey: 'lastName' },
//   { Header: 'Start Date', accessorKey: 'startDate' },
//   { Header: 'Department', accessorKey: 'department' },
//   { Header: 'Date of Birth', accessorKey: 'birthDate' },
//   { Header: 'Street', accessorKey: 'street' },
//   { Header: 'City', accessorKey: 'city' },
//   { Header: 'State', accessorKey: 'state' },
//   { Header: 'Zip Code', accessorKey: 'zip' },
// ];

import { createColumnHelper } from '@tanstack/react-table';
import EmployeeType from '../../type/formType';

const columnHelper = createColumnHelper<EmployeeType>();

export const columns = [
  columnHelper.accessor('firstName', {
    header: 'First Name',
  }),
  columnHelper.accessor('lastName', {
    header: 'Last Name',
  }),
  columnHelper.accessor('startDate', {
    header: 'Start Date',
  }),
  columnHelper.accessor('department', {
    header: 'Department',
  }),
  columnHelper.accessor('birthDate', {
    header: 'Date of Birth',
  }),
  columnHelper.accessor('street', {
    header: 'Street',
  }),
  columnHelper.accessor('city', {
    header: 'City',
  }),
  columnHelper.accessor('state', {
    header: 'State',
  }),
  columnHelper.accessor('zip', {
    header: 'Zip Code',
  }),
];
