import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

type Orientation = "portrait" | "landscape";

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
export default function useWindowOrientation(
  defaultOrientation: Orientation = "portrait"
): OrientationResults {
  if (defaultOrientation !== "portrait" && defaultOrientation !== "landscape") {
    throw new TypeError(
      `${defaultOrientation} is not a valid orientation. Use "portrait" or "landscape".`
    );
  }

  const [orientation, setOrientation] = useState(defaultOrientation);

  useEffect(() => {
    function handleResize(): void {
      if (window.innerWidth <= window.innerHeight) {
        setOrientation("portrait");
      } else {
        setOrientation("landscape");
      }
    }
    handleResize();
    window.addEventListener("resize", debounce(handleResize, 400));
    return () => {
      window.removeEventListener("resize", debounce(handleResize, 400));
    };
  }, []);

  return {
    orientation,
    portrait: orientation === "portrait",
    landscape: orientation === "landscape",
  };
}
