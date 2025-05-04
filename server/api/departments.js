
import { supabase } from '../db/supabaseClient.js';

export const fetchDepartments = async () => {
  const { data, error } = await supabase.from('departments').select();
  if (error) throw error;
  return data;
};

export const fetchDepartmentById = async (id) => {
  const { data, error } = await supabase.from('departments').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
};

export const deleteDepartment = async (id) => {
  const { error } = await supabase.from('departments').delete().eq('id', id);
  if (error) throw error;
};

export const createDepartment = async (department) => {
  const { data, error } = await supabase.from('departments').insert([department]);
  if (error) throw error;
  return data;
};

export const saveDepartment = async (id, department) => {
  const { name, description, number, head } = department;
  const updatedDepartment = { name, description, number, head };

  const { data, error } = await supabase.from('departments').update(updatedDepartment).eq('id', id).select('*');
  if (error) throw error;
  return data;
};
