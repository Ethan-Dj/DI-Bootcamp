-- CREATE TABLE items (
-- 	item_id SERIAL PRIMARY KEY,
-- 	price SMALLINT NOT NULL
-- )

-- CREATE TABLE users (
-- 	user_id SERIAL PRIMARY KEY,
-- 	user_name VARCHAR(25) NOT NULL
-- )

-- CREATE TABLE orders (
-- 	order_id SERIAL PRIMARY KEY,
-- 	user_id INTEGER REFERENCES users (user_id)
-- )

-- CREATE table orders_items (
-- 	order_id INTEGER REFERENCES orders (order_id),
-- 	item_id INTEGER REFERENCES items (item_id)
-- )

-- INSERT INTO items(price)
-- VALUES (3),(4),(5),(6)
-- RETURNING *

-- INSERT INTO users (user_name)
-- VALUES ('John'),('Sam'),('Noa')
-- RETURNING *

-- INSERT INTO orders (user_id)
-- VALUES(1),(3)

-- INSERT INTO orders_items (order_id, item_id)
-- VALUES (1,2), (2,3), (1,3), (1,4)
-- RETURNING *

SELECT SUM(items.price), user_id FROM items
INNER JOIN orders_items on items.item_id = orders_items.item_id
INNER JOIN orders on orders_items.order_id = orders.order_id
GROUP BY orders.order_id



