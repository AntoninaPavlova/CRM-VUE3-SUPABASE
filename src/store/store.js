import { defineStore } from 'pinia';
import { fetchData, fetchDataById, deleteData, createData, updateData } from '@/utils/fetchUtils.js';
import {
  fetchDepartments,
  fetchDepartmentById,
  deleteDepartment,
  createDepartment,
  saveDepartment,
} from '/server/api/departments.js';

import {
  fetchEmployees,
  fetchEmployeeById,
  deleteEmployee,
  createEmployee,
  saveEmployee,
} from '/server/api/employees.js';

import { messages } from '@/consts/Messages.js';

export const useAppStore = defineStore('app-store', {
  state: () => ({
    departments: [],
    openedDepartment: null,
    selectedDepartment: null,
    newDepartment: {},

    employees: [],
    openedEmployee: null,
    selectedEmployee: null,
    newEmployee: {},

    isEditModalOpen: false,
    isCreateModalOpen: false,
  }),

  actions: {
    async fetchDepartments() {
      return fetchData(
        fetchDepartments,
        messages.departments.success,
        messages.departments.error,
        messages.departments.key,
        this
      );
    },

    async fetchEmployees() {
      return fetchData(
        fetchEmployees,
        messages.employees.success,
        messages.employees.error,
        messages.employees.key,
        this
      );
    },

    async fetchDepartmentById(id) {
      return fetchDataById(
        fetchDepartmentById,
        id,
        messages.departmentById.success,
        messages.departmentById.error,
        messages.departmentById.key,
        this
      );
    },

    async fetchEmployeeById(id) {
      return fetchDataById(
        fetchEmployeeById,
        id,
        messages.employeeById.success,
        messages.employeeById.error,
        messages.employeeById.key,
        this
      );
    },

    async deleteDepartment(id) {
      return deleteData(
        deleteDepartment,
        id,
        messages.deleteDepartment.success,
        messages.deleteDepartment.error,
        messages.deleteDepartment.key,
        this
      );
    },

    async deleteEmployee(id) {
      return deleteData(
        deleteEmployee,
        id,
        messages.deleteEmployee.success,
        messages.deleteEmployee.error,
        messages.deleteEmployee.key,
        this
      );
    },

    async createDepartment() {
      return createData(
        createDepartment,
        this.newDepartment,
        fetchDepartments,
        messages.createDepartment.success,
        messages.createDepartment.error,
        messages.createDepartment.key,
        this
      );
    },

    async createEmployee() {
      return createData(
        createEmployee,
        this.newEmployee,
        fetchEmployees,
        messages.createEmployee.success,
        messages.createEmployee.error,
        messages.createEmployee.key,
        this
      );
    },

    async saveDepartment() {
      return updateData(
        saveDepartment,
        this.selectedDepartment.id,
        this.selectedDepartment,
        messages.updateDepartment.key,
        messages.updateDepartment.openedkey,
        messages.updateDepartment.success,
        messages.updateDepartment.error,
        this
      );
    },

    async saveEmployee() {
      return updateData(
        saveEmployee,
        this.selectedEmployee.id,
        this.selectedEmployee,
        messages.updateEmployee.key,
        messages.updateEmployee.openedkey,
        messages.updateEmployee.success,
        messages.updateEmployee.error,
        this
      );
    },

    closeModal() {
      this.selectedDepartment = null;
      this.newDepartment = {};
      this.selectedEmployee = null;
      this.newEmployee = {};

      this.isEditModalOpen = false;
      this.isCreateModalOpen = false;
    },

    openEditModal() {
      this.isEditModalOpen = true;
    },

    openCreateModal() {
      this.isCreateModalOpen = true;
    },
  },
});
