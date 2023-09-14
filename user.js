const mongoose = require('mongoose')
const schema = mongoose.schema

const userSchema = new schema({
    id:{
        type: String
    },
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", userSchema)