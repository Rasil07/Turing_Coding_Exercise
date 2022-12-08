const mongoose = require("mongoose");

const schema = {
  id: {
    type: String,
    unique: true,
  },
  name: String,
  email: String,
};

const UserSchema = new mongoose.Schema(schema, {
  collection: "users",
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
