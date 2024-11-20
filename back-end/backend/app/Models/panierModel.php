<?php
require_once  __DIR__ . '/../CLasses/panier.php';

class Panier {
    private $db;

    public function __construct(PDO $db){
        $this->db = $db ;
    }


    public function getAllPaniers() {
        $query = "SELECT * FROM Panier";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function addToPanier($userId, $livreId, $quantity) {
        $query = "INSERT INTO Panier (ID_user, ID_livre, quantity) VALUES (:userId, :livreId, :quantity)";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':userId', $userId);
        $stmt->bindParam(':livreId', $livreId);
        $stmt->bindParam(':quantity', $quantity);
        return $stmt->execute();
    }

    public function deleteFromPanier($cartId) {
        $query = "DELETE FROM Panier WHERE cart_id = :cartId";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':cartId', $cartId, PDO::PARAM_INT);
        return $stmt->execute();
    }

    public function getPanierByUserId($userId) {
        $query = "SELECT * FROM Panier WHERE ID_user = :userId";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':userId', $userId, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
