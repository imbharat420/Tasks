import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//title,body,createdBy,Active/Inactive,geoLocation

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    length: [8, 50],
  },
  body: {
    type: String,
    required: true,
    length: [30, 100],
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  status: {
    type: Boolean,
    default: true,
  },
  geoLocation: {
    type: { type: String },
    coordinates: [],
  },
});

postSchema.index({ geoLocation: '2dsphere' });

const Post = mongoose.model('Post', postSchema);

export default Post;
