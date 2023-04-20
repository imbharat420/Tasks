import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const officeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
});

officeSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const Office = mongoose.model('Office', officeSchema);

export default Office;
