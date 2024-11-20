<?php
require_once  __DIR__ . '/../../config/Headers.php';
require_once  __DIR__ . '/../Models/panierModel.php';

class PanierController {
    private $db;

    public function __construct($db) {
        $this->db = $db; 
    }

    public function handleRequest($action) {
        $panierModel = new Panier($this->db);

        switch ($action) {
            case 'getAllPaniers':
                $paniers = $panierModel->getAllPaniers();
                echo json_encode($paniers);
                break;

            case 'getPanierByUserId':
                if (isset($_GET['userId'])) {
                    $paniers = $panierModel->getPanierByUserId($_GET['userId']);
                    echo json_encode($paniers);
                } else {
                    echo json_encode(['error' => 'User ID not provided']);
                }
                break;

            case 'addToPanier':
                if (isset($_POST['userId'], $_POST['livreId'], $_POST['quantity'])) {
                    $result = $panierModel->addToPanier($_POST['userId'], $_POST['livreId'], $_POST['quantity']);
                    echo json_encode(['success' => $result]);
                } else {
                    echo json_encode(['error' => 'Missing parameters']);
                }
                break;

            case 'deleteFromPanier':
                if (isset($_GET['cartId'])) {
                    $result = $panierModel->deleteFromPanier($_GET['cartId']);
                    echo json_encode(['success' => $result]);
                } else {
                    echo json_encode(['error' => 'Cart ID not provided']);
                }
                break;

            default:
                echo json_encode(['error' => 'Invalid action']);
                break;
        }
    }
}

require_once  __DIR__ . '/../CLasses/Database.php';
$db = Database::getConnection();
if (isset($_GET['action'])) {
    $controller = new PanierController($db);
    $controller->handleRequest($_GET['action']);
}
