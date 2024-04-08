
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role INT NOT NULL CHECK (role IN (0, 1, 2, 3, 9))
);

-- Insertion des données fournies
INSERT INTO users (id, username, password, email, role) VALUES
(3, 'toto', 'fdE4!Gfe', 'toto@totot.to', 0),
(4, 'staffy', 'pwD3#sT4', 'staffy@corp.com', 1),
(5, 'commu', 'hU89&Jk1', 'com@service.com', 2),
(6, 'cheffy', '98Gh^Tf0', 'chef@kitchen.com', 3),
(7, 'root', 'SuPer#4dM', 'admin@root.com', 9);
