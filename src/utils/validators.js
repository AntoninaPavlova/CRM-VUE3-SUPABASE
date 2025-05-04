export const validateColumns = (value) => value.every((col) => col.hasOwnProperty('field'));

export const validateRows = (value) =>
  value.every(
    (row) =>
      row.hasOwnProperty('id') &&
      row.hasOwnProperty('firstName') &&
      row.hasOwnProperty('lastName') &&
      row.hasOwnProperty('age') &&
      row.hasOwnProperty('department') &&
      row.hasOwnProperty('technologies') &&
      row.hasOwnProperty('id') &&
      row.hasOwnProperty('name') &&
      row.hasOwnProperty('description') &&
      row.hasOwnProperty('number') &&
      row.hasOwnProperty('head')
  );

export const validatePaginationOptions = (value) => value.hasOwnProperty('enabled') && value.hasOwnProperty('perPage');
