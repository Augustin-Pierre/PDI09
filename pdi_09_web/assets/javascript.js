Vue.createApp({
  data() {
    return {
      map : L.map('map',{zoomAnimation: false}).setView([42.70089753241175, 3.347071849162483], 10),
      marker : L.marker([42.69193509203, 2.8972979683846556]),
      layer_test1 : null,
      layer_test2 : null,

      perpignan : false,
      habitat : false,
      eco : false,
    };
  },

  computed :{
  },

  mounted () {

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
           maxZoom: 19,
           attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);

      this.layer_test1 = L.tileLayer.wms("https://wxs.ofb.fr/geoserver/habitat/ows?", {
          service: "WMS",
          version: "1.1.1", 
          layers: "habitat d'intérêt",
          format: "image/png",
          attribution: "Données OFB",
          transparent: true,
          tiled: true,        
      });

      this.couche_test_bdd();
      
      
  },

  methods : {

    couche_test_bdd(){
      fetch('/api/fichiers?t=eco_med_pnmgl_export—eco_med_pnmgl_pagure_ifremer_pt_4326',{
        method : 'get',
      })
      .then(r => r.json())
      .then(r => {
        console.log(r.geom)
        r.geom.forEach(obj => {
          // console.log(obj)
          // console.log(obj.geom)
          geoJ = JSON.parse(obj.geom);
          this.layer_test2 = geoJ;
      });
      // this.layer_test2.addTo(this.map);

      })
    },

      cocher(){
          if(this.perpignan){
              this.marker.addTo(this.map);
          }else{
            this.map.removeLayer(this.marker);
          }
        },

        cocher2(){
          if(this.habitat){
              this.layer_test1.addTo(this.map);
          }else{
            this.map.removeLayer(this.layer_test1);
          }
        },

        cocher3(){
          if(this.eco){
             this.layer_test2.addTo(this.map);
          }else{
            this.map.removeLayer(this.layer_test2);
          }
        },
  },

}).mount('#app');