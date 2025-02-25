Vue.createApp({
    data() {
      return {
        map : L.map('map',{zoomAnimation: false}).setView([42.70089753241175, 3.347071849162483], 10),
        marker : L.marker([42.69193509203, 2.8972979683846556]),
        layer : null,
        perpignan : false,
        habitat : false,
      };
    },

    computed :{
    },

    mounted () {

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
             maxZoom: 19,
             attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);

        this.layer = L.tileLayer.wms("https://wxs.ofb.fr/geoserver/habitat/ows?", {
            service: "WMS",
            version: "1.1.1", 
            layers: "habitat d'intérêt",
            format: "image/png",
            attribution: "Données OFB",
            transparent: true,
            tiled: true,        
        })
        
        
    },

    methods : {
        cocher(){
            if(this.perpignan){
                this.marker.addTo(this.map);
            }else{
              this.map.removeLayer(this.marker);
            }
          },

          cocher2(){
            if(this.habitat){
                this.layer.addTo(this.map);
            }else{
              this.map.removeLayer(this.layer);
            }
          },


    },

  }).mount('#app');
