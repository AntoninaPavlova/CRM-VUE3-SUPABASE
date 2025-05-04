const express = require('express');
const app = express();
const departmentsRoutes = require('@/routes/departmentsRoutes');
const employeesRoutes = require('@/routes/employeesRoutes');

const PORT = 3000;

app.use(express.json());
app.use(departmentsRoutes);
app.use(employeesRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
