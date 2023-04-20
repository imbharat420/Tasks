import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    toJSON: { virtuals: true },
    timestamps: false,
  },
);

UserSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret.password;
    delete ret._id;
    delete ret.__v;
  },
});

UserSchema.pre('save', async function (next) {
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

// set TTL
// https://stackoverflow.com/a/35179159/10629172
UserSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 60 * process.env.EXPIRATION_TIME,
    partialFilterExpression: {
      isVerified: false,
    },
  },
);

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;
