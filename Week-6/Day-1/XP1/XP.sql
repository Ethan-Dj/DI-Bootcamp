-- CREATE TABLE items (
-- 	item_id SERIAL PRIMARY KEY,
-- 	item_name VARCHAR(20) NOT NULL,
-- 	number_of SMALLINT NOT NULL 
-- )

-- CREATE TABLE customer_names (
-- 	name_id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(20) NOT NULL,
-- 	last_name VARCHAR(20) NOT NULL
-- )

-- INSERT INTO items (item_name, number_of)
-- VALUES ('Small Desk', 100),('Large Desk', 300),('fan', 80)

-- INSERT INTO customer_names (first_name, last_name)
-- VALUES ('Greg','Jones'),
-- ('Sandra','Jones'),
-- ('Scott','Scott'),
-- ('Trevor','Green'),
-- ('Melanie','Johnson')

-- SELECT * FROM customer_names

-- SELECT * FROM items

-- SELECT * FROM items WHERE number_of > 80

-- SELECT * FROM customer_names WHERE last_name = 'Smith'

-- SELECT * FROM customer_names WHERE last_name = 'Jones'

SELECT * FROM customer_names WHERE last_name != 'Jones'


