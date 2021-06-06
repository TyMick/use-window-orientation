import { act, renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react";
import useWindowOrientation from "../index";

function resizeWindow(newWidth: number, newHeight: number) {
  act(() => {
    // @ts-ignore (innerWidth is writable in this test environment)
    window.innerWidth = newWidth;
    // @ts-ignore (innerHeight is writable in this test environment)
    window.innerHeight = newHeight;
    window.dispatchEvent(new Event("resize"));
  });
}

describe("Valid outputs", () => {
  it("should return the correct results for a portrait window", async () => {
    const { result } = renderHook(() => useWindowOrientation());
    resizeWindow(10, 20);
    await waitFor(() =>
      expect(result.current).toEqual({
        orientation: "portrait",
        portrait: true,
        landscape: false,
      })
    );
  });

  it("should return the correct results for a landscape window", async () => {
    const { result } = renderHook(() => useWindowOrientation());
    resizeWindow(20, 10);
    await waitFor(() =>
      expect(result.current).toEqual({
        orientation: "landscape",
        portrait: false,
        landscape: true,
      })
    );
  });

  it('should return "portrait" results for a square window', async () => {
    const { result } = renderHook(() => useWindowOrientation());
    resizeWindow(20, 20);
    await waitFor(() =>
      expect(result.current).toEqual({
        orientation: "portrait",
        portrait: true,
        landscape: false,
      })
    );
  });
});
