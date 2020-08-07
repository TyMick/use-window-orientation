import {
  mountDummyOrientationComponent,
  getOrientationResults,
} from "./dummyOrientationComponents";
import { act } from "react-dom/test-utils";

function resizeWindow(newWidth, newHeight) {
  window.innerWidth = newWidth;
  window.innerHeight = newHeight;
  window.dispatchEvent(new Event("resize"));
}

describe("Valid outputs", () => {
  let component;

  beforeAll(() => {
    component = mountDummyOrientationComponent();
  });

  it("should return the correct results for a portrait window", () => {
    act(() => {
      resizeWindow(10, 20);
    });
    setTimeout(() => {
      expect(getOrientationResults(component)).toEqual({
        orientation: "portrait",
        portrait: true,
        landscape: false,
      });
    }, 400);
  });

  it("should return the correct results for a landscape window", () => {
    act(() => {
      resizeWindow(20, 10);
    });
    setTimeout(() => {
      expect(getOrientationResults(component)).toEqual({
        orientation: "landscape",
        portrait: false,
        landscape: true,
      });
    }, 400);
  });

  it('should return "portrait" results for a square window', () => {
    act(() => {
      resizeWindow(20, 20);
    });
    setTimeout(() => {
      expect(getOrientationResults(component)).toEqual({
        orientation: "portrait",
        portrait: true,
        landscape: false,
      });
    }, 400);
  });
});
