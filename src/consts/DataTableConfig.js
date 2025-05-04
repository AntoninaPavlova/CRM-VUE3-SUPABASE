export const departmentColumns = [
  { label: 'Название департамента', field: 'name', sortable: false },
  { label: 'Описание', field: 'description', sortable: false },
  { label: 'Количество сотрудников', field: 'number', sortable: false },
  { label: 'Заведующий', field: 'head', sortable: false },
  { label: 'Действия', field: 'edit', sortable: false },
  { label: '', field: 'delete', sortable: false },
];

export const employeeColumns = [
  { label: 'Имя', field: 'firstName', sortable: false },
  { label: 'Фамилия', field: 'lastName', sortable: false },
  { label: 'Возраст', field: 'age', sortable: false },
  { label: 'Департамент', field: 'department', sortable: false },
  { label: 'Технологии', field: 'technologies', sortable: false },
  { label: 'Действия', field: 'edit', sortable: false },
  { label: '', field: 'delete', sortable: false },
];

export const departmentInputs = [
  { label: 'Название департамента', field: 'name', type: 'text', validation: 'required' },
  { label: 'Описание', field: 'description', type: 'text', validation: 'required' },
  { label: 'Количество сотрудников', field: 'number', isNumber: true, validation: 'required|integer' },
  { label: 'Заведующий', field: 'head', type: 'text', validation: 'required' },
];

export const employeeInputs = [
  { label: 'Имя', field: 'firstName', validation: 'required' },
  { label: 'Фамилия', field: 'lastName', type: 'text', validation: 'required' },
  { label: 'Возраст', field: 'age', type: 'number', isNumber: true, validation: 'required|integer' },
  { label: 'Департамент', field: 'department', type: 'text', validation: 'required' },
  { label: 'Технологии', field: 'technologies', type: 'text', validation: 'required' },
];
