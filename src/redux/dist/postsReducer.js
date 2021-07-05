"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.postsReducer = void 0;
var types_1 = require("./types");
var initialState = {
    posts: [],
    fetchedPosts: []
};
exports.postsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types_1.CREATE_POST:
            return __assign(__assign({}, state), { posts: __spreadArrays(state.posts, [action.payload]) });
        case types_1.FETCH_POSTS:
            return __assign(__assign({}, state), { fetchedPosts: action.payload });
        default:
            return state;
    }
};
