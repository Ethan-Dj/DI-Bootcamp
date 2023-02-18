-- CREATE TABLE students (
-- 	student_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(20) NOT NULL,
-- 	last_name VARCHAR(20) NOT NULL,
-- 	DOB date NOT NULL
-- )

-- INSERT INTO students (first_name, last_name, DOB)
-- VALUES ('Marc','Benichou', '1998-11-02'),
-- ('Yoan','Cohen', '2010-12-03'),
-- ('Lea','Benichou', '1987-07-27'),
-- ('Amelia','Dux', '1996-04-07'),
-- ('David','Grez', '2003-06-14'),
-- ('Omer','Simpson', '1980-10-03')

-- SELECT first_name, last_name FROM students

-- SELECT first_name, last_name FROM students WHERE student_id = 2 

-- SELECT first_name, last_name FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou'

-- SELECT first_name FROM students WHERE first_name ILIKE '%a%'

-- SELECT first_name FROM students WHERE first_name ILIKE 'a%'

-- SELECT first_name FROM students WHERE first_name ILIKE '%a'

-- SELECT first_name FROM students WHERE (SUBSTRING(first_name, LENGTH(first_name) -1 ,1) = 'a');

-- SELECT first_name FROM students WHERE student_id = 3 OR student_id = 1

SELECT students FROM students WHERE EXTRACT(YEAR FROM DOB) >= 2000







