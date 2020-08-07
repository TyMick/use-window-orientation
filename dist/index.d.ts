declare type Orientation = "portrait" | "landscape";
interface OrientationResults {
    orientation: Orientation;
    portrait: boolean;
    landscape: boolean;
}
/**
 * React hook for using window orientation. Not _device_ orientation—this hook determines orientation based on the width and height of the window.
 * @param {Orientation} [defaultOrientation] - The default orientation to return when there is no window
 * @returns {OrientationResults} An object containing the results of the orientation query in both string and boolean form
 */
export default function useWindowOrientation(defaultOrientation?: Orientation): OrientationResults;
export {};
