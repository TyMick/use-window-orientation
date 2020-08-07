import { shallowDummyOrientationComponent } from "./dummyOrientationComponents";

describe("Valid inputs", () => {
  it("should accept no arguments", () => {
    expect(() => {
      shallowDummyOrientationComponent();
    }).not.toThrowError();
  });

  describe("Options", () => {
    describe("defaultOrientation", () => {
      it('should accept "portrait" as default orientation', () => {
        expect(() => {
          shallowDummyOrientationComponent({ defaultOrientation: "portrait" });
        }).not.toThrowError();
      });

      it('should accept "landscape" as default orientation', () => {
        expect(() => {
          shallowDummyOrientationComponent({ defaultOrientation: "landscape" });
        }).not.toThrowError();
      });

      it("should not accept any other default orientation values", () => {
        expect(() => {
          shallowDummyOrientationComponent({
            defaultOrientation: "dazed and confused",
          });
        }).toThrow(
          new TypeError(
            '"dazed and confused" is not a valid orientation. Use "portrait" or "landscape".'
          )
        );
        expect(() => {
          shallowDummyOrientationComponent({ defaultOrientation: 42 });
        }).toThrow(
          new TypeError(
            '42 is not a valid orientation. Use "portrait" or "landscape".'
          )
        );
      });
    });

    it("should not accept options arguments that aren't objects", () => {
      expect(() => {
        shallowDummyOrientationComponent("This is all wrong.");
      }).toThrow(
        new TypeError("The options argument must be formatted as an object.")
      );
    });

    it("should not care if nonexistent options are passed in", () => {
      expect(() => {
        shallowDummyOrientationComponent({
          defaultOrientation: "portrait",
          favoriteColor: "puce",
        });
      }).not.toThrowError();
    });
  });
});
