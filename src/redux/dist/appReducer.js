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
exports.__esModule = true;
exports.appReducer = void 0;
var types_1 = require("./types");
var initialState = {
    loading: false,
    alert: null
};
exports.appReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case types_1.SHOW_LOADER:
            return __assign(__assign({}, state), { loading: true });
        case types_1.HIDE_LOADER:
            return __assign(__assign({}, state), { loading: false });
        case types_1.SHOW_ALERT:
            return __assign(__assign({}, state), { alert: action.payload });
        case types_1.HIDE_ALERT:
            return __assign(__assign({}, state), { alert: null });
        default:
            return state;
    }
};
