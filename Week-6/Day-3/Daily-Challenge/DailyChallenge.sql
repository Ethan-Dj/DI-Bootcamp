-- PT1.1
-- CREATE TABLE customer (
-- 	customer_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(25),
-- 	last_name VARCHAR(25) NOT NULL
-- )

-- CREATE TABLE customer_profile (
-- 	customer_profile_id SERIAL PRIMARY KEY,
-- 	is_logged_in BOOLEAN DEFAULT false,
-- 	customer_id INTEGER REFERENCES customer (customer_id) ON DELETE CASCADE
-- )

-- PT1.2
-- INSERT INTO customer (first_name, last_name)
-- VALUES ('John','Doe'),('Jerome','Lalu'),('Lea','Rive')
-- RETURNING *

-- PT1.3
-- INSERT INTO customer_profile (is_logged_in, customer_id)
-- 	VALUES (true, (SELECT customer_id FROM customer WHERE first_name='John'))
-- 	RETURNING *
	
-- INSERT INTO customer_profile (is_logged_in, customer_id)
-- 	VALUES (false, (SELECT customer_id FROM customer WHERE first_name='Jerome'))
-- 	RETURNING *
	
-- PT1.4
-- SELECT first_name FROM customer
-- INNER JOIN customer_profile 
-- ON customer.customer_id = customer_profile.customer_id

-- SELECT first_name, is_logged_in FROM customer
-- LEFT JOIN customer_profile 
-- ON customer.customer_id = customer_profile.customer_id

-- SELECT COUNT (*) FROM customer
-- LEFT JOIN customer_profile 
-- ON customer.customer_id = customer_profile.customer_id
-- WHERE is_logged_in IS NULL or customer_profile.is_logged_in = false

-- PT2
-- CREATE TABLE book(
-- 	book_id SERIAL PRIMARY KEY,
-- 	title VARCHAR(25) NOT NULL,
-- 	author VARCHAR(25) NOT NULL
-- )

-- INSERT INTO book (title, author)
-- Values ('Alice in Wonderland','Lewis Caroll'),
-- 	('Harry Potter','J.K. Rowling'),
-- 	('To Kill a Mockingbird', 'Harper Lee')
-- RETURNING *

-- CREATE TABLE Student (
-- 	studend_id SERIAL PRIMARY KEY,
-- 	name VARCHAR(25) UNIQUE NOT NULL,
-- 	age smallint NOT NULL, 
-- 	CONSTRAINT age_bigger CHECK (age <= 15)
-- )

-- INSERT INTO Student (name, age)
-- VALUES ('John',12),
-- 	('Lera',11),
-- 	('Patrick',10),
-- 	('Bob',14)
-- RETURNING *

-- CREATE TABLE Library (
-- 	book_fk_id INTEGER REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	student_id INTEGER REFERENCES student (studend_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	borrowed_date DATE
-- )

-- INSERT INTO Library (book_fk_id, student_id, borrowed_date)
-- 	VALUES ((SELECT book_id FROM book WHERE title ='Alice in Wonderland'),
-- 			(SELECT studend_id FROM student WHERE name ='John'),'2022-02-15'), 
-- 		   ((SELECT book_id FROM book WHERE title ='To Kill a Mockingbird'),
-- 			(SELECT studend_id FROM student WHERE name ='Bob'),'2021-03-03'),
-- 		   ((SELECT book_id FROM book WHERE title ='Alice in Wonderland'),
-- 			(SELECT studend_id FROM student WHERE name ='Lera'),'2021-05-23'),
-- 		   ((SELECT book_id FROM book WHERE title ='Harry Potter'),
-- 			(SELECT studend_id FROM student WHERE name ='Bob'),'2021-08-12')
-- RETURNING *

-- PT7
-- SELECT * FROM Library

-- SELECT Student.name, book.title, student.age
-- FROM Student
-- INNER JOIN Library ON Student.studend_id = Library.student_id 
-- INNER JOIN book ON library.book_fk_id = book.book_id

-- SELECT AVG(age) FROM Student WHERE studend_id IN 
-- (SELECT student_id FROM Library WHERE book_fk_id = 
-- (SELECT book_id FROM book WHERE title ='Alice in Wonderland'))

DELETE FROM Student WHERE name = 'Bob'
-- His data from library table is also deleted







		   



	
	

