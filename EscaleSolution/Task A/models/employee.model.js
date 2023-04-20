import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const employeeSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  designation: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default:
      'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg',
  },
  officeDetail: {
    type: Schema.Types.ObjectId,
    ref: 'Office',
    required: true,
  },
});
employeeSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
