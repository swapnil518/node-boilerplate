const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true, index: true },
    lastName: { type: String, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true }, // hashed
    username: { type: String, required: true, unique: true, trim: true, index: true },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
    accessModules: { type: [String], default: [] }, // optional per-user overrides/extra modules
    createdAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('User', UserSchema);