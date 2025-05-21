CREATE TABLE IF NOT EXISTS users (
  username VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS ice_creams (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  brand VARCHAR(255),
  description TEXT,
  price DECIMAL(10,2),
  imageUrl VARCHAR(255),
  rating INT
);

INSERT INTO ice_creams (name, brand, description, price, imageUrl, rating) VALUES
('Vanilla Dream', 'Creamy Delights', 'Classic vanilla', 3.99, 'https://example.com/vanilla.jpg', 5),
('Chocolate Heaven', 'Sweet Treats', 'Rich chocolate with chips', 4.49, 'https://example.com/chocolate.jpg', 4);
