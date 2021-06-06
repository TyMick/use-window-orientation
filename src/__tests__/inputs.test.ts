import { renderHook } from "@testing-library/react-hooks";
import useWindowOrientation from "../index";

describe("Valid inputs", () => {
  it("should accept no arguments", () => {
    const { result } = renderHook(() => useWindowOrientation());
    expect(result.error).toBeUndefined();
  });

  describe("Options", () => {
    describe("defaultOrientation", () => {
      it('should accept "portrait" as default orientation', () => {
        const { result } = renderHook(() =>
          useWindowOrientation({ defaultOrientation: "portrait" })
        );
        expect(result.error).toBeUndefined();
      });

      it('should accept "landscape" as default orientation', () => {
        const { result } = renderHook(() =>
          useWindowOrientation({ defaultOrientation: "landscape" })
        );
        expect(result.error).toBeUndefined();
      });

      it("should not accept any other default orientation values", () => {
        const { result: result1 } = renderHook(() =>
          // @ts-expect-error
          useWindowOrientation({ defaultOrientation: "dazed and confused" })
        );
        expect(result1.error).toEqual(
          new TypeError(
            '"dazed and confused" is not a valid defaultOrientation. Use "portrait" or "landscape".'
          )
        );
        const { result: result2 } = renderHook(() =>
          // @ts-expect-error
          useWindowOrientation({ defaultOrientation: 42 })
        );
        expect(result2.error).toEqual(
          new TypeError(
            '42 is not a valid defaultOrientation. Use "portrait" or "landscape".'
          )
        );
      });
    });

    it("should not accept options arguments that aren't objects", () => {
      const { result } = renderHook(() =>
        // @ts-expect-error
        useWindowOrientation("This is all wrong.")
      );
      expect(result.error).toEqual(
        new TypeError("The options argument must be formatted as an object.")
      );
    });

    it("should not care if nonexistent options are passed in", () => {
      const { result } = renderHook(() =>
        useWindowOrientation({
          defaultOrientation: "portrait",
          // @ts-expect-error
          favoriteColor: "puce",
        })
      );
      expect(result.error).toBeUndefined();
    });
  });
});
