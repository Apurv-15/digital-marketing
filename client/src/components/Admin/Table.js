
// // import React from 'react';

// // const Table = ({ employees, handleEdit, handleDelete }) => {
// //   const formatter = new Intl.NumberFormat('en-US', {
// //     style: 'currency',
// //     currency: 'USD',
// //     minimumFractionDigits: null,
// //   });

// //   return (
// //     <div className="contain-table">
// //       <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Admin Dashboard</h2>
// //       <table className="striped-table">
// //         <thead>
// //           <tr>
// //             <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
// //             <th style={{ border: '1px solid black', padding: '8px' }}>Gmail</th>
// //             <th style={{ border: '1px solid black', padding: '8px' }}>Empty</th>
// //             <th colSpan={2} className="text-center" style={{ border: '1px solid black', padding: '8px' }}>
// //               Actions
// //             </th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {employees ? (
// //             employees.map((employee, i) => (
// //               <tr key={employee.id}>
// //                 <td style={{ border: '1px solid black', padding: '8px' }}>{employee.id}</td>
// //                 <td style={{ border: '1px solid black', padding: '8px' }}>{employee.email}</td>
// //                 <td style={{ border: '1px solid black', padding: '8px' }}></td>
// //                 <td className="text-right" style={{ border: '1px solid black', padding: '8px' }}>
// //                   <button
// //                     onClick={() => handleEdit(employee.id)}
// //                     className="button muted-button"
// //                   >
// //                     Edit
// //                   </button>
// //                 </td>
// //                 <td className="text-left" style={{ border: '1px solid black', padding: '8px' }}>
// //                   <button
// //                     onClick={() => handleDelete(employee.id)}
// //                     className="button muted-button"
// //                   >
// //                     Delete
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan={5} style={{ border: '1px solid black', padding: '8px' }}></td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Table;



// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';

// const CustomTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 700,
//   },
//   row: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
// });

// const TableRowWithRandomNumber = ({ classes, employee }) => {
//   // Function to generate a random number from 1 to 5
//   const getRandomNumber = () => {
//     return Math.floor(Math.random() * 5) + 1;
//   };
// }

// function Dashboard({ employees, handleEdit, handleDelete, classes }) {

//   return (
//     <Paper className={classes.root}>
//       <Table className={classes.table}>
//         <TableHead>
//           <TableRow>
//             <CustomTableCell>ID</CustomTableCell>
//             <CustomTableCell align="center">Target AGeGroup</CustomTableCell>
//             <CustomTableCell align="center">Budget</CustomTableCell>
//             <CustomTableCell align="center">Location</CustomTableCell>
//             <CustomTableCell align="center" >Mode</CustomTableCell>
//             <CustomTableCell align="center" >Alloted To</CustomTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {employees ? (
//             employees.map((employee, i) => (
//               <TableRow className={classes.row} key={employee.id}>
//                 <CustomTableCell component="th" scope="row">{employee.id} </CustomTableCell>
//                 <CustomTableCell align="center">{employee.ageGroup}</CustomTableCell>
//                 <CustomTableCell align="center">{employee.budget}</CustomTableCell>
//                 <CustomTableCell align="center">{employee.location}</CustomTableCell>
//                 <CustomTableCell align="center">{employee.Advertisment_Type}</CustomTableCell>
//                 <CustomTableCell align="center">{getRandomNumber()}</CustomTableCell>
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <CustomTableCell colSpan={5}></CustomTableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }

// Dashboard.propTypes = {
//   classes: PropTypes.object.isRequired,
//   employees: PropTypes.array.isRequired,
//   handleEdit: PropTypes.func.isRequired,
//   handleDelete: PropTypes.func.isRequired,
// };

// export default withStyles(styles)(Dashboard);

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

function Dashboard({ employees, handleEdit, handleDelete, classes }) {
  const [randomNumber, setRandomNumber] = useState(() => {
    const storedNumber = localStorage.getItem('randomNumber');
    return storedNumber ? parseInt(storedNumber, 10) : getRandomNumber();
  });

  useEffect(() => {
    localStorage.setItem('randomNumber', randomNumber);
  }, [randomNumber]);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>ID</CustomTableCell>
            <CustomTableCell align="center">Target AGeGroup</CustomTableCell>
            <CustomTableCell align="center">Budget</CustomTableCell>
            <CustomTableCell align="center">Location</CustomTableCell>
            <CustomTableCell align="center" >Mode</CustomTableCell>
            <CustomTableCell align="center" >Alloted To</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees ? (
            employees.map((employee, i) => (
              <TableRow className={classes.row} key={employee.id}>
                <CustomTableCell component="th" scope="row">{employee.id} </CustomTableCell>
                <CustomTableCell align="center">{employee.ageGroup}</CustomTableCell>
                <CustomTableCell align="center">{employee.budget}</CustomTableCell>
                <CustomTableCell align="center">{employee.location}</CustomTableCell>
                <CustomTableCell align="center">{employee.Advertisment_Type}</CustomTableCell>
                <CustomTableCell align="center">{randomNumber}</CustomTableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <CustomTableCell colSpan={5}></CustomTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  employees: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default withStyles(styles)(Dashboard);
