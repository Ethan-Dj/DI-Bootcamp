-- PT1
-- SELECT first_name AS first, last_name AS last FROM employees

-- PT2
-- SELECT DISTINCT department_id FROM employees ORDER BY department_id DESC

-- PT3
-- SELECT * FROM employees ORDER BY first_name DESC

-- PT4
-- SELECT first_name, last_name, salary, salary*0.15 AS FP FROM employees

-- PT5
-- SELECT employee_id, first_name, last_name, salary FROM employees ORDER BY salary DESC

-- PT6
-- SELECT SUM(salary) AS total_salary FROM employees 

-- PT7
-- SELECT MIN(salary), MAX(salary) FROM employees

-- PT8
-- SELECT AVG(salary) FROM employees

-- PT9
-- SELECT COUNT(*) FROM employees

-- PT10
-- SELECT UPPER(first_name) FROM employees

-- PT11
-- SELECT SUBSTRING(first_name,1,3) FROM employees

-- PT12
-- SELECT first_name, last_name FROM employees

-- PT13
-- SELECT first_name, last_name, LENGTH(first_name) + LENGTH(last_name) FROM employees

-- PT14
-- SELECT first_name FROM employees WHERE first_name LIKE '%[0-9]%'

-- PT15
-- SELECT * FROM employees LIMIT 10

-- ------------------------------------------------------------------------------------------------
-- Q2

-- PT1
-- SELECT first_name, last_name, salary FROM employees WHERE salary >10000 AND salary < 15000

-- PT2
-- SELECT first_name, last_name, hire_date FROM employees WHERE hire_date BETWEEN '1987-01-01' and '1987-12-31'

-- PT3
-- SELECT first_name FROM employees WHERE first_name LIKE '%c%' AND first_name LIKE '%e%'

-- PT4
-- SELECT last_name FROM employees 
-- INNER JOIN jobs 
-- ON employees.job_id = jobs.job_id
-- WHERE job_title != 'Programmer' AND
-- job_title != 'Shipping Clerks' AND
-- salary != 4500 AND
-- salary != 10000 AND
-- salary != 15000

-- PT5
-- SELECT last_name FROM employees WHERE LENGTH(last_name) = 6

-- PT6
-- SELECT first_name FROM employees WHERE SUBSTRING(first_name,3,1) ='e'

-- PT7
-- SELECT DISTINCT job_title FROM employees 
-- INNER JOIN jobs 
-- ON employees.job_id = jobs.job_id

-- PT8
-- SELECT * FROM employees WHERE last_name = 'Jones'
-- OR last_name = 'Blake'
-- OR last_name = 'Scott'
-- OR last_name = 'King'
-- OR last_name = 'Ford'



