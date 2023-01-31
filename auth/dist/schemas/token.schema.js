"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenSchema = void 0;
const mongoose = require("mongoose");
function transformValue(doc, ret) {
    delete ret._id;
}
exports.TokenSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: [true, 'User can not be empty'],
    },
    token: {
        type: String,
        required: [true, 'Token can not be empty'],
    },
}, {
    toObject: {
        virtuals: true,
        versionKey: false,
        transform: transformValue,
    },
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: transformValue,
    },
});
//# sourceMappingURL=token.schema.js.map