"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
require("../../db");
var commentsSchema = new mongoose_1.default.Schema({
    place_id: {
        type: String,
        required: true
    },
    place_name: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    },
    user_ratings_total: {
        type: Number
    },
    vicinity: {
        type: String,
        required: true
    },
    location: {
        type: Object,
        required: true
    },
    user_comment: {
        type: [{
                comment: { type: Object, required: true },
                evaluation: { type: Object, required: true },
            }],
        required: true
    }
});
exports.default = mongoose_1.default.model('comments', commentsSchema);
