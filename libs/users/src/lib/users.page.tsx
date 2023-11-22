import React, { forwardRef, useState } from 'react';
import { BasicLayout } from './_components/BasicLayout';
import bgImage from '../../../theme/src/lib/_images/bg-sign-in-basic.jpeg';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { TableComponents, TableVirtuoso } from 'react-virtuoso';
import { MDBox, SideNav } from '@cashier/components';
import { useNavigate } from 'react-router-dom';
// import { useUsersStore } from './UsersStore';
// import { UserModel } from './user.model';

interface Data {
  calories: number;
  carbs: number;
  dessert: string;
  fat: number;
  id: number;
  protein: number;
}

interface ColumnData {
  dataKey: keyof Data;
  label: string;
  numeric?: boolean;
}

type Sample = [string, number, number, number, number];

// const usersStore = useUsersStore([
//   new UserModel('Use MobX'),
// ]);

const sample: readonly Sample[] = [
  ['User 1', 159, 6.0, 24, 4.0],
];

function createData(
  id: number,
  dessert: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
): Data {
  return { id, dessert, calories, fat, carbs, protein };
}

const columns: ColumnData[] = [
  {
    label: 'Name',
    dataKey: 'dessert',
  },
  {
    label: 'Calories\u00A0(g)',
    dataKey: 'calories',
    numeric: true,
  },
  {
    label: 'Fat\u00A0(g)',
    dataKey: 'fat',
    numeric: true,
  },
];

const rows: Data[] = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

export function UsersPage(props) {
  const { appRoutes } = props;

  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState(false);

  const VirtuosoTableComponents: TableComponents<Data> = {
    Scroller: forwardRef<HTMLDivElement>((props, ref) => (
      <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
      <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead,
    TableRow: ({ item, ...props }) => <TableRow {...props} onClick={() => navigate('/widget-builder', { state: { id: item.id } })} />,
    TableBody: forwardRef<HTMLTableSectionElement>((props, ref) => (
      <TableBody {...props} ref={ref} />
    )),
  };

  function fixedHeaderContent() {
    return (
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            variant="head"
            align={column.numeric || false ? 'right' : 'left'}
            sx={{
              backgroundColor: 'background.paper',
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  function rowContent(_index: number, row: Data) {
    return (
      <React.Fragment>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric || false ? 'right' : 'left'}
          >
            {row[column.dataKey]}
          </TableCell>
        ))}
      </React.Fragment>
    );
  }

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage}>
      <SideNav appRoutes={appRoutes}/>
      <MDBox style={{ marginLeft: 270, height: 400 }}>
        <TableVirtuoso
          data={rows}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
        />
      </MDBox>
    </BasicLayout>
  );
}
