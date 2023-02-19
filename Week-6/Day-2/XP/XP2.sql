-- PT1
-- SELECT * FROM customer

-- PT2
-- SELECT (first_name, last_name) AS full_name FROM customer

-- PT3 
-- SELECT create_date FROM customer

-- PT4
-- SELECT * FROM CUSTOMER ORDER BY first_name DESC

-- PT5
-- SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC

-- PT6
-- SELECT address, phone FROM address 
-- INNER JOIN city
-- ON address.city_id = city.city_id
-- WHERE city='Texas'

-- PT7
-- SELECT * FROM film WHERE film_id = 15 OR film_id = 150

-- PT8
-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title ='Star Wars'

-- PT9
-- SELECT film_id, title, description, length, rental_rate FROM film 
-- WHERE (SUBSTRING('Star Wars', 1, 2)) = (SUBSTRING (title, 1, 2))

-- PT10
-- SELECT * FROM film ORDER BY Replacement_cost ASC LIMIT 10

-- PT 11
-- SELECT * FROM film ORDER BY Replacement_cost ASC LIMIT 10 OFFSET 9

-- PT12
-- SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
-- FROM customer
-- INNER JOIN payment 
-- ON payment.customer_id = customer.customer_id

-- PT13
-- SELECT title, film_id FROM film WHERE film_id NOT IN(SELECT film_id FROM inventory)

-- PT14
-- Write a query to find which city is in which country.
-- SELECT city.city, country.country FROM city 
-- INNER JOIN country
-- ON city.country_id = country.country_id

-- PT15
-- Write a query to get the customer’s id, names (first and last), 
-- the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
-- SELECT  customer.first_name,customer.last_name, payment.amount, payment.payment_date, staff.staff_id FROM payment 
-- INNER JOIN staff ON staff.staff_id = payment.staff_id
-- INNER JOIN customer ON customer.customer_id = payment.customer_id
-- SELECT COUNT(staff_id)



