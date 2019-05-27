const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: {type: String, required: [true, 'Podaj prawidlowe pole tytul'] },
    description: { type: String, required: [true, 'Podaj prawidlowe pole opis'] },
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('News', newsSchema);