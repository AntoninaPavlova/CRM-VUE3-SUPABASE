const Routes = {
  START: {
    name: 'Start',
    path: '/',
    meta: {
      title: 'Start',
    },
  },
  DEPARTMENTS: {
    name: 'Departments',
    path: '/departments',
    meta: {
      title: 'Departments',
    },
  },
  DEPARTMENTID: {
    name: 'DepartmentId',
    path: '/departments/:id',
    meta: {
      title: 'DepartmentId',
    },
  },
  EMPLOYEES: {
    name: 'Employees',
    path: '/employees',
    meta: {
      title: 'Employees',
    },
  },
  EMPLOYEEID: {
    name: 'EmployeeId',
    path: '/employees/:id',
    meta: {
      title: 'EmployeeId',
    },
  },
};

export { Routes };
