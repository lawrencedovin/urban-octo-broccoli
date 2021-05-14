-- Gets employee name and their department
SELECT name, departments.dept_name
FROM employees
JOIN departments
ON employees.dept_code = departments.dept_code;