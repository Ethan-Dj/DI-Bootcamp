-- Q1

-- PT1
-- SELECT name, COUNT (*) FROM language GROUP BY language_id

-- PT2
-- Inner Join
-- SELECT film.title, film.description, language.name FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id

-- Total Join
-- SELECT film.title, film.description, language.name FROM film
-- FULL JOIN language
-- ON film.language_id = language.language_id

-- Right Join
-- SELECT film.title, film.description, language.name FROM film
-- RIGHT JOIN language
-- ON film.language_id = language.language_id

-- PT3
-- CREATE TABLE new_film (
-- 	new_film_id SERIAL PRIMARY KEY,
-- 	new_film_name VARCHAR(25) NOT NULL
-- )

-- INSERT INTO new_film (new_film_name)
-- VALUES('Star Wars, The Clone Wars'),
-- ('UP!'),
-- ('Toy Story')
-- RETURNING *

-- PT4
-- CREATE TABLE customer_review (
-- 	customer_review_id SERIAL PRIMARY KEY NOT NULL,
-- 	film_id INTEGER REFERENCES new_film (new_film_id) ON DELETE CASCADE,
-- 	language_id INTEGER REFERENCES language (language_id) ON DELETE CASCADE,
-- 	review_title VARCHAR(25) NOT NULL,
-- 	score smallint NOT NULL,
-- 	review_text TEXT NOT NULL,
-- 	last_update DATE NOT NULL
-- )

-- PT5
-- INSERT INTO customer_review (film_id, language_id, review_title, score, review_text, last_update)
-- VALUES ((SELECT new_film_id FROM new_film WHERE new_film_name = 'UP!'),
-- 	    (SELECT language_id FROM language WHERE name = 'German'),
-- 		'Good Film',
-- 		7,
-- 		'Really Good Film!',
-- 		'2016-02-02'
-- 	   ),
-- 	   ((SELECT new_film_id FROM new_film WHERE new_film_name = 'Toy Story'),
-- 	    (SELECT language_id FROM language WHERE name = 'English'),
-- 		'Great Film',
-- 		8,
-- 		'Really amazing Film!',
-- 		'2019-02-02'
-- 	   )
-- RETURNING *

-- PT6
-- DELETE FROM new_film WHERE new_film_name = 'UP!'

-- SELECT * FROM customer_review

-- ///////////////////////////////////////////////////////////
-- Q2
-- PT1
-- UPDATE film SET language_id = (SELECT language_id FROM language WHERE name = 'French')
-- WHERE film_id = 2
-- Returning *

-- PT2
-- The Foreign keys in the customer table are store_id and address_id, this means that we need to use the
-- select subquery

-- PT3
-- DROP TABLE customer_review

-- PT4
-- SELECT COUNT(*) FROM rental

-- PT5
-- SELECT rental.rental_id, payment.amount FROM payment 
-- INNER JOIN rental
-- ON rental.rental_id = payment.rental_id
-- ORDER BY payment.amount DESC LIMIT 30

-- PT6.1
-- SELECT title, description, first_name, last_name FROM film
-- INNER JOIN film_actor ON film.film_id = film_actor.film_id
-- INNER JOIN actor ON actor.actor_id = film_actor.actor_id
-- WHERE description ILIKE '%sumo wrestler%' AND first_name = 'Penelope' AND last_name = 'Monroe'

-- PT6.2
-- SELECT * FROM film WHERE rating = 'R' AND length < 60 AND description ILIKE '%documentary%'

-- PT6.3
SELECT customer.first_name, customer.last_name, film.title, film.description, film.replacement_cost
FROM customer
INNER JOIN rental ON rental.customer_id = customer.customer_id
INNER JOIN inventory ON inventory.inventory_id = rental.inventory_id
INNER JOIN film ON film.film_id = inventory.film_id
WHERE first_name = 'Matthew' AND last_name = 'Mahan' OR description ILIKE '%boat%' OR title ILIKE '%boat%'
ORDER BY film.replacement_cost DESC LIMIT 5


	








