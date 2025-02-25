<?php
require 'flight/Flight.php';

$link =   pg_connect("host=localhost port=5432 dbname=PDI09 user=postgres password=postgres");
Flight::set('db', $link);

Flight::route('/', function() {
    Flight::render('accueil'); 
});

Flight::route('/api/fichiers', function() {  
    $db = Flight::get('db');
    $table = $_GET["t"];
    if (isset($_GET['id']) && !empty($_GET['id'])) {
        $reponse = pg_query($db,"SELECT ST_AsGeoJson(geom) AS geom FROM " .$table." where fid = '". $_GET['id']."'");
        $resultats = pg_fetch_all($reponse, PGSQL_ASSOC);
    }

    else{
        $reponse = pg_query($db, "SELECT ST_AsGeoJson(geom) AS geom from ".$table);
        $resultats = pg_fetch_all($reponse, PGSQL_ASSOC);
    }

    Flight::json(['geom' => $resultats]);
});




Flight::start();

?>
