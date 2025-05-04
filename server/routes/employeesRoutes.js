const express = require('express');
const router = express.Router();
const {
  fetchEmployees,
  fetchEmployeeById,
  deleteEmployee,
  createEmployee,
  saveEmployee,
} = require('@/api/employees.js');

// Получение всех сотрудников
router.get('/api/data', async (req, res) => {
  try {
    const data = await fetchEmployees();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

// Получение сотрудника по ID
router.get('/api/data/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchEmployeeById(id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

// Удаление сотрудника по ID
router.delete('/api/data/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteEmployee(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

// Создание нового сотрудника
router.post('/api/data', async (req, res) => {
  try {
    const newEmployee = req.body;
    const data = await createEmployee(newEmployee);
    res.status(201).json(data[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

// Редактирование сотрудника по ID
router.put('/api/data/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployee = req.body;
    const data = await saveEmployee(id, updatedEmployee);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

module.exports = router;
