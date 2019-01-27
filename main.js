var app = new Vue({
  el: '#app',
  data: {
    search: '',
    places: [
      {
        name: "Caucasian Mountains",
        img: "./img/CaucasianMountains.jpg"
      },
      {
        name: "New-York City",
        img: "./img/NewYorkCity.jpg"
      },
      {
        name: "Thailand Sea",
        img: "./img/ThailandSea.jpg"
      },
    ]
  },
  computed: {
    filteredPlaces() {
      return this.places.filter(event => {
        return event.name.includes(this.search)      
      })
    }
  }
})