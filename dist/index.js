"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lodash_debounce_1 = __importDefault(require("lodash.debounce"));
/**
 * React hook for using window orientation. Not _device_ orientation—this hook determines orientation based on the width and height of the window.
 * @param {Orientation} [defaultOrientation] - The default orientation to return when there is no window
 * @returns {OrientationResults} An object containing the results of the orientation query in both string and boolean form
 */
function useWindowOrientation(defaultOrientation) {
    if (defaultOrientation === void 0) { defaultOrientation = "portrait"; }
    var _a = react_1.useState(defaultOrientation), orientation = _a[0], setOrientation = _a[1];
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
