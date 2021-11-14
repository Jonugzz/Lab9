var {model, Schema, Mongoose} = require("mongoose");

var BlogSchema = Schema ({
    title: String,
    author: String,
    post_date: {
        type: Date,
        default: Date.now
    },
    post_data: String
});

module.exports = model("blogposts", BlogSchema);