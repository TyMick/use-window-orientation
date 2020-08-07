"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lodash_debounce_1 = __importDefault(require("lodash.debounce"));
/**
 * React hook for using window orientation. Not _device_ orientation—this hook determines orientation based on the width and height of the window.
 * @param {OrientationOptions} [options] - The options object
 * @param {Orientation} [options.defaultOrientation=portrait] - The default orientation to return when there is no window
 * @returns {OrientationResults} An object containing the results of the orientation query in both string and boolean form
 */
function useWindowOrientation(options) {
    if (options === void 0) { options = {}; }
    if (typeof options !== "object") {
        throw new TypeError("The options argument must be formatted as an object.");
    }
    var _a = options.defaultOrientation, defaultOrientation = _a === void 0 ? "portrait" : _a;
    if (defaultOrientation !== "portrait" && defaultOrientation !== "landscape") {
        var isString = typeof defaultOrientation === "string";
        throw new TypeError("" + (isString ? '"' : "") + defaultOrientation + (isString ? '"' : "") + " is not a valid orientation. Use \"portrait\" or \"landscape\".");
    }
    var _b = react_1.useState(defaultOrientation), orientation = _b[0], setOrientation = _b[1];
    react_1.useEffect(function () {
        function handleResize() {
            if (window.innerWidth <= window.innerHeight) {
                setOrientation("portrait");
            }
            else {
                setOrientation("landscape");
            }
        }
        handleResize();
        window.addEventListener("resize", lodash_debounce_1.default(handleResize, 400));
        return function () {
            window.removeEventListener("resize", lodash_debounce_1.default(handleResize, 400));
        };
    }, []);
    return {
        orientation: orientation,
        portrait: orientation === "portrait",
        landscape: orientation === "landscape",
    };
}
exports.default = useWindowOrientation;
