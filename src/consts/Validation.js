export const validationMessagesDepartments = {
  name: {
    required: 'Название департамента обязательно для заполнения.',
  },
  description: {
    required: 'Описание обязательно для заполнения.',
  },
  number: {
    required: 'Количество сотрудников обязательно для заполнения.',
    integer: 'Количество сотрудников должно быть целым числом.',
  },
  head: {
    required: 'Заведующий обязателен для заполнения.',
  },
};

export const validationMessagesEmployees = {
  firstName: {
    required: 'Имя обязательно для заполнения.',
  },
  lastName: {
    required: 'Фамилия обязательна для заполнения.',
  },
  age: {
    required: 'Возраст обязателен для заполнения.',
    integer: 'Возраст должен быть целым числом.',
  },
  department: {
    required: 'Департамент обязателен для заполнения.',
  },
  technologies: {
    required: 'Технологии обязательны для заполнения.',
  },
};
