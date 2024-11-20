<?php
require_once  __DIR__ . '/../../config/Headers.php';
require_once  __DIR__ . '/../Models/modelUser.php';

class UserController {
    private $db;

    public function __construct($db) {
        $this->db = $db; 
    }

    public function handleRequest($action) {
        $userModel = new User($this->db); 

        switch ($action) {
            case 'getAllUsers':
                $users = $userModel->getAllUsers();
                echo json_encode($users);
                break;

            case 'getUserById':
                if (isset($_GET['id'])) {
                    $user = $userModel->getUserById($_GET['id']);
                    echo json_encode($user);
                } else {
                    echo json_encode(['error' => 'ID not provided']);
                }
                break;

            case 'addUser':
                if (isset($_POST['nom'], $_POST['email'], $_POST['password'], $_POST['role'])) {
                    $result = $userModel->addUser($_POST['nom'], $_POST['email'], $_POST['password'], $_POST['role']);
                    echo json_encode(['success' => $result]);
                } else {
                    echo json_encode(['error' => 'Missing parameters']);
                }
                break;

            case 'deleteUser':
                if (isset($_GET['id'])) {
                    $result = $userModel->deleteUser($_GET['id']);
                    echo json_encode(['success' => $result]);
                } else {
                    echo json_encode(['error' => 'ID not provided']);
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
    $controller = new UserController($db);
    $controller->handleRequest($_GET['action']);
}
