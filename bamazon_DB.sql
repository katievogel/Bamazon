DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (50) NOT NULL,
    dept_name VARCHAR (30) NOT NULL, 
    price DECIMAL (10,2) NOT NULL,
    stock_qty INT NOT NULL, 
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, dept_name, price, stock_qty)
VALUES ("Toilet paper - 4 Roll Pack", "Bathroom", 4.00, 30),
    ("Tooth Paste", "Toiletries", 2.00, 100),
    ("Bread Machine", "Kitchen", 60.00, 50),
    ("Robo-Vacuum", "Technology", 250.00, 15),
    ("Flip Flops - Size 7", "Shoes", 10.00, 45),
    ("Ball Point Pens - 12 Pen Box, Black", "Office", 8.00, 20),
    ("Wolf Howling at Moon T-shirt", "Clothing", 5.50, 75),
    ("Cat Condo", "Pet Supplies", 75.00, 20),
    ("Dog Goggles", "Pet Supplies", 12.00, 30),
    ("Genuine Unicorn Poop", "Arcane", 1500.00, 2),
    ("Flux Capacitor", "Automotive", 250000.00, 1),
    ("Infinity Gaunlet", "Jewelry", 70000000.00, 1);

    SELECT * FROM products;