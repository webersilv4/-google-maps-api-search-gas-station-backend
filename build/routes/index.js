"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var google_maps_1 = require("../utils/services/api/google-maps");
var app = express_1.default();
var corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200
};
app.use(express_1.default.json());
app.use(cors_1.default(corsOptions));
app.get('/api/v1/places/:lat/:lng', google_maps_1.googleMapsApi);
exports.default = app;
