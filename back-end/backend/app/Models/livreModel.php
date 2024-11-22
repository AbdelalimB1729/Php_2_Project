<?php
require_once  __DIR__ . '/../CLasses/livre.php';

class LivreModel {
    private $db;

    public function __construct(PDO $db){
        $this->db = $db ;
    }

    public function getAllLivres() {
        $query = "SELECT * FROM livres";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getLivreById($id) {
        $query = "SELECT * FROM livres WHERE ID_livre = :id";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function addLivre($nom, $description, $sourceImg, $typeLivre, $prix) {
        $query = "INSERT INTO livres (nom, description, sourceImg, typeLivre, prix) VALUES (:nom, :description, :sourceImg, :typeLivre, :prix)";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':sourceImg', $sourceImg);
        $stmt->bindParam(':typeLivre', $typeLivre);
        $stmt->bindParam(':prix', $prix);
        return $stmt->execute();
    }

    public function deleteLivre($id) {
        $query = "DELETE FROM livres WHERE ID_livre = :id";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }
}
