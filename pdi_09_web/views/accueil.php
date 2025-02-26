<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>PDI09</title>
        <link rel="stylesheet" href="/assets/style.css">
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css">
        <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    </head>

    <body>

        <header>
        <img src="/images/pnmgl.png" alt="Logo du Parc Naturel Marin du Golfe du Lion">
        <p>Parc Naturel Marin du Golfe du Lion</p>
        <P>SITE DE VISUALISATION CARTOGRAPHIQUE</P>
        <img src="/images/OFB.png" alt="Logo de l'Office Français de la Biodiversité">
        <img src="/images/Republique_Francaise_RVB.png" alt="Logo de la République Française">
        </header>

        <div id = "map"></div>

        <div id = "app">

        <div id = "selection">
            <div><h1>Données</h1></div>
            <div><label><input v-model="perpignan" @change="cocher" type="checkbox" name="perpignan" >Perpignan</label></div>
            <div><label><input v-model="habitat" @change="cocher2" type="checkbox" name="habitat" >Habitats d'intérêt</label></div>
            <div><label><input v-model="eco" @change="cocher3" type="checkbox" name="eco" ></label>Données éco ?</div>
        </div>
        
        </div>
        
                
      
        <script src="/assets/javascript.js"></script>  
         
    </body>    

</html>