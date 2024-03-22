<?php
include('../config/autoload.php');
// required headers
header("Access-Control-Allow-Origin:" . $ORIGIN);
header("Content-Type:" . $CONTENT_TYPE);
header("Access-Control-Allow-Methods:" . $GET_METHOD);
header("Access-Control-Max-Age:" . $MAX_AGE);
header("Access-Control-Allow-Headers:" . $ALLOWED_HEADERS);

// initialize object
$db = new Database();
$user = new User($db);

$data = json_decode(file_get_contents("php://input"));

// read user id will be here
$user_id = $_GET['user_id'] ?? $data->user_id;


if ((empty($user_id) || $user_id == null || !is_numeric($user_id) || $user_id=='' || $user_id==' ')) {
    // No valid user id provided

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no products found
    echo json_encode(
        array("message" => "Plaese provide a valid user ID or Admission number", "status"=>2)
    );

    return;
}

// query users
$user->user_id = $user_id;
// var_dump($user_id);
// return;

$stmt = $user->getUser();
// $num = $stmt->rowCount();
// var_dump($stmt);
// return;

// check if more than 0 record found
if($stmt['outputStatus'] == 1000) {

    // users array
    
    $user_arr = $stmt['output']->fetchALL(PDO::FETCH_ASSOC);
    var_dump($user_arr);
     print_r(count($users_arr));
      return;

    if (count($users_arr['records']) == 0) {
        // set response code - 200 OK
        http_response_code(200);

        if($user_id != null){
        // show users data in json format
        echo json_encode(array("message" => "No user found with this ID.", "status"=>3));
        }
        elseif($user_admin_no != null){
        // show users data in json format
        echo json_encode(array("message" => "No user found with this Admission Number.", "status"=>3));
        }

        return;
    }

    // set response code - 200 OK
    http_response_code(200);

    // show users data in json format
    echo json_encode($users_arr);
} 
elseif($stmt['outputStatus'] == 1200) {
    errorDiag($stmt['output']);
}
else {
    // no users found will be here

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no products found
    echo json_encode(
        array("message" => "Something went wrong. Not able to fetch user.", "status"=>4)
    );
}
