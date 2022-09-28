// import React, { Component } from 'react'
// import EmployeeService from '../services/EmployeeService'
// import { withRouter } from 'react-router-dom'
// class ListEmployeeComponen extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             employees: []
//         }
//         this.addEmployee = this.addEmployee.bind(this);
//     }
//     componentDidMount() {
//         EmployeeService.getEmployees().then((response) => {
//             this.setState({ employees: response.data })
//         })
//     }
//     addEmployee() {
//         this.props.history.push('add-employee');
//     }

//     render() {
//         return (
//             <div>
//                 <h2 className='text-center'>Employee List</h2>
//                 <div className='row'>
//                     <button className='btn btn-primary' onClick={this.addEmployee}> Add Employee</button>
//                 </div>
//                 <div className='row'>
//                     <table className='table table-striped table-bordered'>
//                         <thead>
//                             <tr>
//                                 <th>First name</th>
//                                 <th>Last name</th>
//                                 <th>Department</th>
//                                 <th>Job level</th>
//                                 <th>Email</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {this.state.employees.map(
//                                 employee =>
//                                     <tr key={employee.empId}>
//                                         <td>{employee.firstName}</td>
//                                         <td>{employee.lastName}</td>
//                                         <td>{employee.department}</td>
//                                         <td>{employee.jobLevel}</td>
//                                         <td>{employee.email}</td>
//                                     </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }
// export default withRouter(ListEmployeeComponen)
