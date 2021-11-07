import mongoose from 'mongoose'
const Schema = mongoose.Schema

const accountSchema = new Schema({
    platform: {type: String, required: true},
    username: {type: String, required: true},
    preference: {type: Boolean}
})

const Account = mongoose.model('Account', accountSchema)


export {
    Account
}