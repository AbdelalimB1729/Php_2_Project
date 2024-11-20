drop database if exists DB_Library ;
create database DB_Library ;
use DB_Library;

-- créer la table Produits:

CREATE TAble  livres(
    ID_livre INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom varchar(30) NOT NULL,
    typeLivre varchar(50),
    PRIX double(10,2) NOT NULL ,
    Sourceimg varchar(255) ,
    Description text 
);

-- créer la table user:
CREATE TABLE Users(
    ID_user INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(30) NOT NULL,
    prenom VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    numere_cellulaire INT NOT NULL,
    role VARCHAR(255) NOT NULL,
    Adresse VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- créer la table Panier:

CREATE TABLE Panier (
    cart_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    ID_user INT NOT NULL,
    ID_livre INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    FOREIGN KEY (ID_user) REFERENCES Users(ID_user),
    FOREIGN KEY (ID_livre) REFERENCES livres(ID_livre)
);
-- creer la table newsletter: 
CREATE TABLE Newsletter (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- creer la table payment :
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    panier_id INT NOT NULL,
    montant DECIMAL(10, 2) NOT NULL,
    date_paiement DATETIME DEFAULT CURRENT_TIMESTAMP,
    methode_paiement VARCHAR(50) NOT NULL,
    statut ENUM('En attente', 'Complété', 'Annulé') DEFAULT 'En attente',
    FOREIGN KEY (user_id) REFERENCES Users(ID_user),
    FOREIGN KEY (panier_id) REFERENCES panier(cart_id)
);

-- creer la table des codes promos:
CREATE TABLE promo_codes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    pourcentage int,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO promo_codes (code, description,pourcentage) VALUES
('ETE2024', "Promotion d'ete 2024",20),
('BIENVENUE', 'PROMO POUR LES NOUVEAUX',50),
('REDUCTION20', 'reduction de 20% sur les achats',10),
('HIVER24',"Promo d hiver ",40);

INSERT INTO livres(nom,typeLivre,PRIX,Sourceimg, Description) VALUES 
('1052420-f', 'science', 79.61, '../DB/Images_Livres/science/1052420-f.jpg', 'Description for 1052420.'),
('1213473-f', 'roman', 75.36, '../DB/Images_Livres/roman/1213473-f.jpg', 'Description for 1213473.'),
('1261741-f', 'science', 61.86, '../DB/Images_Livres/science/1261741-f.jpg', 'Description for 1261741.'),
('1462516-f', 'philosophie', 52.93, '../DB/Images_Livres/philosophie/1462516-f.jpg', 'Description for 1462516.'),
('1521573-f', 'philosophie', 74.24, '../DB/Images_Livres/philosophie/1521573-f.jpg', 'Description for 1521573.'),
('1554131-f', 'roman', 95.89, '../DB/Images_Livres/roman/1554131-f.jpg', 'Description for 1554131.'),
('1896221-f', 'roman', 21.87, '../DB/Images_Livres/roman/1896221-f.jpg', 'Description for 1896221.'),
('2146141-f', 'roman', 61.63, '../DB/Images_Livres/roman/2146141-f.jpg', 'Description for 2146141.'),
('2162278-f', 'philosophie', 21.3, '../DB/Images_Livres/philosophie/2162278-f.jpg', 'Description for 2162278.'),
('2250705-f', 'roman', 40.34, '../DB/Images_Livres/roman/2250705-f.jpg', 'Description for 2250705.'),
('2264162-f', 'science', 20.43, '../DB/Images_Livres/science/2264162-f.jpg', 'Description for 2264162.'),
('3229558-f', 'philosophie', 39.68, '../DB/Images_Livres/philosophie/3229558-f.jpg', 'Description for 3229558.'),
('3342040-f', 'roman', 69.02, '../DB/Images_Livres/roman/3342040-f.jpg', 'Description for 3342040.'),
('3570872-f', 'philosophie', 44.92, '../DB/Images_Livres/philosophie/3570872-f.jpg', 'Description for 3570872.'),
('3628502-f', 'science', 26.19, '../DB/Images_Livres/science/3628502-f.jpg', 'Description for 3628502.'),
('3681290-f', 'roman', 54.77, '../DB/Images_Livres/roman/3681290-f.jpg', 'Description for 3681290.'),
('3693952-f', 'philosophie', 81.13, '../DB/Images_Livres/philosophie/3693952-f.jpg', 'Description for 3693952.'),
('3750028-f', 'roman', 90.9, '../DB/Images_Livres/roman/3750028-f.jpg', 'Description for 3750028.'),
('3787525-f', 'roman', 77.73, '../DB/Images_Livres/roman/3787525-f.jpg', 'Description for 3787525.'),
('3801100-f', 'philosophie', 62.11, '../DB/Images_Livres/philosophie/3801100-f.jpg', 'Description for 3801100.'),
('3952179-f', 'roman', 36.51, '../DB/Images_Livres/roman/3952179-f.jpg', 'Description for 3952179.'),
('4011758-f', 'philosophie', 38.32, '../DB/Images_Livres/philosophie/4011758-f.jpg', 'Description for 4011758.'),
('4182452-f', 'science', 40.98, '../DB/Images_Livres/science/4182452-f.jpg', 'Description for 4182452.'),
('4200510-f', 'science', 79.0, '../DB/Images_Livres/science/4200510-f.jpg', 'Description for 4200510.'),
('4218689-f', 'science', 33.39, '../DB/Images_Livres/science/4218689-f.jpg', 'Description for 4218689.'),
('4219879-f', 'science', 77.35, '../DB/Images_Livres/science/4219879-f.jpg', 'Description for 4219879.'),
('4251544-gf.jpg', 'philosophie', 57.57, '../DB/Images_Livres/philosophie/4251544-gf.jpg', 'Description for 4251544-gf.jpg.'),
('4253270-f', 'science', 66.32, '../DB/Images_Livres/science/4253270-f.jpg', 'Description for 4253270.'),
('4266094-gf.jpg', 'roman', 12.9, '../DB/Images_Livres/roman/4266094-gf.jpg', 'Description for 4266094-gf.jpg.'),
('4281661-f', 'science', 40.84, '../DB/Images_Livres/science/4281661-f.jpg', 'Description for 4281661.'),
('5301-f', 'roman', 88.4, '../DB/Images_Livres/roman/5301-f.jpg', 'Description for 5301.'),
('5863-f', 'roman', 86.16, '../DB/Images_Livres/roman/5863-f.jpg', 'Description for 5863.'),
('612631-f', 'roman', 79.94, '../DB/Images_Livres/roman/612631-f.jpg', 'Description for 612631.'),
('956972-f', 'philosophie', 58.85, '../DB/Images_Livres/philosophie/956972-f.jpg', 'Description for 956972.'),
('956973-f', 'philosophie', 56.68, '../DB/Images_Livres/philosophie/956973-f.jpg', 'Description for 956973.'),
('la_nausse.jpg', 'philosophie', 80.33, '../DB/Images_Livres/philosophie/la_nausse.jpg', 'Description for la_nausse.jpg.');

