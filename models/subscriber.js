const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    required: true
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

// const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// const amadeus = new Subscriber({ name: 'Amadeus', subscribedToChannel: "music"});

// amadeus.save()


module.exports = mongoose.model('Subscriber', subscriberSchema)