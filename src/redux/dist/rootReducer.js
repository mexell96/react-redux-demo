"use strict";
exports.__esModule = true;
exports.rootReducer = void 0;
var postsReducer_1 = require("./postsReducer");
var redux_1 = require("redux");
var appReducer_1 = require("./appReducer");
exports.rootReducer = redux_1.combineReducers({
    posts: postsReducer_1.postsReducer,
    app: appReducer_1.appReducer
});
