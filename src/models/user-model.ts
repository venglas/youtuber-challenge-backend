import mongoose from 'mongoose'
import { generateConfirmationCode } from '../services/helpers/random-number'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  },
  password: {
    type: String,
    required: true
  },
  signupDate: {
    type: Date,
    required: true
  },
  registrationConfirmed: {
    type: Boolean,
    default: false
  },
  confirmationCode: {
    type: String,
    default: generateConfirmationCode()
  },
  avatar: {
    type: String
  },
  userType: {
    type: String,
    default: 'user'
  }
})

const User = mongoose.model('user', userSchema)


export { User }