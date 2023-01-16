const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const passport = require("passport");

// const ThirdPartyProviderSchema = new mongoose.Schema({
//     provider_name: {
//         type: String,
//         default: null
//     },
//     provider_id: {
//         type: String,
//         default: null
//     },
//     provider_data: {
//         type: {},
//         default: null
//     }
// })

// Create Schema
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            default: null
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String
        },
        referred_by: {
            type: String,
            default: null
        },
        //third_party_auth: [ThirdPartyProviderSchema],
        date: {
            type: Date,
            default: Date.now
        }
    },
    { strict: false }
);

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User = mongoose.model("users", UserSchema);