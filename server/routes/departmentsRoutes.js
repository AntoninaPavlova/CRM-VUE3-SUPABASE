
const express = require('express');
const router = express.Router();
const {
  fetchDepartments,
  fetchDepartmentById,
  deleteDepartment,
  createDepartment,
  saveDepartment,
} = require('@/api/departments.js');

// Получение всех департаментов
router.get('/api/data', async (req, res) => {
  try {
    const data = await fetchDepartments();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

// Получение департамента по ID
router.get('/api/data/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await fetchDepartmentById(id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

// Удаление департамента по ID
router.delete('/api/data/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteDepartment(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

// Создание нового департамента
router.post('/api/data', async (req, res) => {
  try {
    const newDepartment = req.body;
    const data = await createDepartment(newDepartment);
    res.status(201).json(data[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

// Редактирование департамента по ID
router.put('/api/data/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDepartment = req.body;
    const data = await saveDepartment(id, updatedDepartment);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ошибка сервера');
  }
});

module.exports = router;
