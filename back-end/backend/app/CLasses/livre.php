<?php
class Livre {
    private $id;
    private $nom;
    private $description;
    private $sourceImg;
    private $typeLivre;
    private $prix;

    public function __construct($id, $nom, $description, $sourceImg, $typeLivre, $prix) {
        $this->id = $id;
        $this->nom = $nom;
        $this->description = $description;
        $this->sourceImg = $sourceImg;
        $this->typeLivre = $typeLivre;
        $this->prix = $prix;
    }

    // Getters
    public function getId() {
        return $this->id;
    }

    public function getNom() {
        return $this->nom;
    }

    public function getDescription() {
        return $this->description;
    }

    public function getSourceImg() {
        return $this->sourceImg;
    }

    public function getTypeLivre() {
        return $this->typeLivre;
    }

    public function getPrix() {
        return $this->prix;
    }
}
