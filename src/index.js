"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validate_1 = require("./validate");
console.log("Env running");
var env = (0, validate_1.validateEnv)();
console.log("Validated env", env);
