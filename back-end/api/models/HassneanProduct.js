var mongoose = require('mongoose');

var HassneanproductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: false
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    component: {
        type: String,
        required: false,
        lowercase: true,
        default: "C4"
    },
    seller: {
        type: String,
        required: false,
        lowercase: false
    }
});

mongoose.model('HassneanProduct', HassneanproductSchema);
