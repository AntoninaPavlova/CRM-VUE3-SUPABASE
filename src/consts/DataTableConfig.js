export const departmentColumns = [
  { label: 'Название департамента', field: 'name' },
  { label: 'Описание', field: 'description' },
  { label: 'Количество сотрудников', field: 'number' },
  { label: 'Заведующий', field: 'head' },
  { label: 'Действия', field: 'edit', sortable: false },
  { label: '', field: 'delete', sortable: false },
];

export const employeeColumns = [
  { label: 'Имя', field: 'firstName' },
  { label: 'Фамилия', field: 'lastName' },
  { label: 'Возраст', field: 'age' },
  { label: 'Департамент', field: 'department' },
  { label: 'Технологии', field: 'technologies' },
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
