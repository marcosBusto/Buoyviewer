var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var BuoySchema = new Schema({
    cruise: { type: Number, required: true },
    station: { type: Number, required: true },
    year: { type: Number, required: true },
    month: { type: Number, required: true },
    day: { type: Number, required: true },
    hour: { type: Number, required: true },
    minute: { type: Number, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    bottomdepth: { type: Number, required: true },
    maxsampdepth: { type: Number, required: true },
    bottle: { type: Number, required: true },
    pressure: { type: Number, required: true },
    depth: { type: Number, required: true },
    temperature: { type: Number, required: true },
    theta: { type: Number, required: true },
    salinity: { type: Number, required: true },
    sigma0: { type: Number, required: true },
    sigma1: { type: Number, required: true },
    sigma2: { type: Number, required: true },
    sigma3: { type: Number, required: true },
    sigma4: { type: Number, required: true },
    gamma: { type: Number, required: true },
    oxygen: { type: Number, required: true },
    aou: { type: Number, required: true },
    nitrate: { type: Number, required: true },
    nitrite: { type: Number, required: true },
    silicate: { type: Number, required: true },
    phosphate: { type: Number, required: true },
    tco2: { type: Number, required: true },
    talk: { type: Number, required: true },
    phts25p0: { type: Number, required: true },
    phtsinsitutp: { type: Number, required: true }
});

BuoySchema.virtual('date').get(function() {
    return this._id.getTimestamp();
});

mongoose.model('Buoy', BuoySchema);
