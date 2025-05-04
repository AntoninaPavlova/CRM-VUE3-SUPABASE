import { supabase } from '../db/supabaseClient.js';

export const fetchEmployees = async () => {
  const { data, error } = await supabase.from('employees').select();
  if (error) throw error;
  return data;
};

export const fetchEmployeeById = async (id) => {
  const { data, error } = await supabase.from('employees').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
};

export const deleteEmployee = async (id) => {
  const { error } = await supabase.from('employees').delete().eq('id', id);
  if (error) throw error;
};

export const createEmployee = async (employee) => {
  const { data, error } = await supabase.from('employees').insert([employee]);
  if (error) throw error;
  return data;
};

export const saveEmployee = async (id, employee) => {
  const { firstName, lastName, age, department, technologies } = employee;
  const updatedEmployee = { firstName, lastName, age, department, technologies };

  const { data, error } = await supabase.from('employees').update(updatedEmployee).eq('id', id).select('*');
  if (error) throw error;
  return data;
};
