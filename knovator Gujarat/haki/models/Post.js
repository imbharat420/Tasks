import { Schema, model } from 'mongoose'

const postSchema = new Schema({
    title: {
       type: String,
       required: true 
    },
    body: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    geolocation: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number, 
            required: true
        }
    }
}, { timestamps: true})


export default model('Post', postSchema)

