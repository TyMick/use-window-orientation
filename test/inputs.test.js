import { shallowDummyOrientationComponent } from "./dummyOrientationComponents";

describe("Valid inputs", () => {
  it("should accept no arguments", () => {
    expect(() => {
      shallowDummyOrientationComponent();
    }).not.toThrowError();
  });

  it('should accept "portrait" as default orientation', () => {
    expect(() => {
      shallowDummyOrientationComponent("portrait");
    }).not.toThrowError();
  });

  it('should accept "landscape" as default orientation', () => {
    expect(() => {
      shallowDummyOrientationComponent("landscape");
    }).not.toThrowError();
  });

  it("should not accept any other default orientation values", () => {
    expect(() => {
      shallowDummyOrientationComponent("dazed and confused");
    }).toThrow(
      new TypeError(
        '"dazed and confused" is not a valid orientation. Use "portrait" or "landscape".'
      )
    );
    expect(() => {
      shallowDummyOrientationComponent(42);
    }).toThrow(
      new TypeError(
        '42 is not a valid orientation. Use "portrait" or "landscape".'
      )
    );
  });
});
