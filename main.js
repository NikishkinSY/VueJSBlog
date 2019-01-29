Vue.component('description', {
  template: '#description'
})

var app = new Vue({
  el: '#app',
  data: {
    search: '',
    choosenPlace: {},
    places: [
      {
        name: "Caucasian Mountains",
        img: "./img/CaucasianMountains.jpg",
        description: "The Caucasus Mountains[a] are a mountain system in West Asia between the Black Sea and the Caspian Sea in the Caucasus region."
      },
      {
        name: "New-York City",
        img: "./img/NewYorkCity.jpg",
        description: "The City of New York, often called New York City (NYC) or simply New York (NY), is the most populous city in the United States."
      },
      {
        name: "Thailand Sea",
        img: "./img/ThailandSea.jpg",
        description: "The Gulf of Thailand, also known as the Gulf of Siam, is a shallow inlet[1][2] in the western part of the South China Sea, a marginal body of water in the western Pacific Ocean."
      },
    ]
  },
  methods: {
    choosePlace: function(place) {
      this.choosenPlace = place;
    }
  },
  computed: {
    filteredPlaces() {
      return this.places.filter(event => {
        return event.name.includes(this.search)      
      })
    }
  }
})