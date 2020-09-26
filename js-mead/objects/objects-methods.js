let restaurant = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize
  }
}

console.log(restaurant)

restaurant.seatParty(10)
restaurant.checkAvailability(4)
restaurant.seatParty(4)
restaurant.removeParty(2)

console.log(restaurant)

console.log(restaurant.checkAvailability(4))