
// import React from 'react';

// const Table = ({ employees, handleEdit, handleDelete }) => {
//   const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: null,
//   });

//   return (
//     <div className="contain-table">
//       <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Admin Dashboard</h2>
//       <table className="striped-table">
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
//             <th style={{ border: '1px solid black', padding: '8px' }}>Gmail</th>
//             <th style={{ border: '1px solid black', padding: '8px' }}>Empty</th>
//             <th colSpan={2} className="text-center" style={{ border: '1px solid black', padding: '8px' }}>
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees ? (
//             employees.map((employee, i) => (
//               <tr key={employee.id}>
//                 <td style={{ border: '1px solid black', padding: '8px' }}>{employee.id}</td>
//                 <td style={{ border: '1px solid black', padding: '8px' }}>{employee.email}</td>
//                 <td style={{ border: '1px solid black', padding: '8px' }}></td>
//                 <td className="text-right" style={{ border: '1px solid black', padding: '8px' }}>
//                   <button
//                     onClick={() => handleEdit(employee.id)}
//                     className="button muted-button"
//                   >
//                     Edit
//                   </button>
//                 </td>
//                 <td className="text-left" style={{ border: '1px solid black', padding: '8px' }}>
//                   <button
//                     onClick={() => handleDelete(employee.id)}
//                     className="button muted-button"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={5} style={{ border: '1px solid black', padding: '8px' }}></td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;



import React from 'react';
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

function Dashboard({ employees, handleEdit, handleDelete, classes }) {

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>ID</CustomTableCell>
            <CustomTableCell align="right">Target AGeGroup</CustomTableCell>
            <CustomTableCell align="right">Budget</CustomTableCell>
            <CustomTableCell align="right">Location</CustomTableCell>
            <CustomTableCell align="right" >Mode</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees ? (
            employees.map((employee, i) => (
              <TableRow className={classes.row} key={employee.id}>
                <CustomTableCell component="th" scope="row">
                  {employee.id}
                </CustomTableCell>
                <CustomTableCell align="right">{employee.ageGroup}</CustomTableCell>
                <CustomTableCell align="right">{employee.budget}</CustomTableCell>
                <CustomTableCell align="right">{employee.location}
                  {/* <button
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button> */}
                </CustomTableCell>
                <CustomTableCell align="right">{employee.Advertisment_Type}
                  {/* <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button> */}
                </CustomTableCell>
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
