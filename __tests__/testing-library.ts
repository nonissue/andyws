import { getPage } from "next-page-tester";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { screen, fireEvent } from "@testing-library/react";

// localStorageMock object for next-theme
let localStorageMock: { [key: string]: string } = {};

// set up `window.matchMedia` mock for `next-theme` testing.
beforeAll(() => {
  // Create a mock of the window.matchMedia function
  // Based on: https://stackoverflow.com/questions/39830580/jest-test-fails-typeerror-window-matchmedia-is-not-a-function
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  // Create mocks of localStorage getItem and setItem functions
  global.Storage.prototype.getItem = jest.fn(
    (key: string) => localStorageMock[key]
  );
  global.Storage.prototype.setItem = jest.fn((key: string, value: string) => {
    localStorageMock[key] = value;
  });
});

beforeEach(() => {
  // Clear the localStorage-mock
  localStorageMock = {};
});

describe("App", () => {
  it("renders index route", async () => {
    const { render } = await getPage({
      route: "/",
    });

    render();

    expect(screen.getByText("dotfiles")).toBeInTheDocument();
  });
});

describe("Header", () => {
  it("navigates on beta link event", async () => {
    const { render } = await getPage({
      route: "/",
    });

    render();

    fireEvent.click(screen.getByText("beta"));
    await screen.findByText("WIP");
  });
});
