# useWindowOrientation

[![npm version](https://img.shields.io/npm/v/use-window-orientation)](https://www.npmjs.com/package/use-window-orientation "View this package on npm")
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/use-window-orientation/peer/react)](https://www.npmjs.com/package/use-window-orientation "View this package on npm")
[![npm bundle size](https://img.shields.io/bundlephobia/min/use-window-orientation)](https://www.npmjs.com/package/use-window-orientation "View this package on npm")
[![npm license](https://img.shields.io/npm/l/use-window-orientation)](/LICENSE)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0-ff69b4.svg)](/CODE_OF_CONDUCT.md)

- **[Installation](#installation)**
- **[Usage](#usage)**
- **[Options](#options)**
- **[Caveats](#caveats)**
- **[Contributing](#contributing)**
- **[Related projects](#related-projects)**

Sometimes, just knowing [the window width](https://github.com/tywmick/use-window-width-breakpoints) isn't enough. Sometimes you want to know if the window's orientation is portrait or landscape. Good thing you found this React hook.

<h2 id="installation">Installation</h2>

```sh
npm install use-window-orientation
# OR
yarn add use-window-orientation
```

<h2 id="usage">Usage</h2>

After importing the hook...

```js
import useWindowOrientation from "use-window-orientation";
```

...call it from the top level of your React function.

```js
const { orientation, portrait, landscape } = useWindowOrientation();
```

This hook returns an object with three properties, each describing the current orientation of the window in a different way.

- `orientation` will be either `"portrait"` or `"landscape"`
- `portrait` will be either `true` or `false`
- `landscape` will be either `false` or `true`

The easiest way to access these properties is by using [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), as in the above example. One advantage of this method is that you only have to declare variables for the properties you actually want to use. Only plan on using the `portrait` boolean in your code? Then just call the hook like this:

```js
const { portrait } = useWindowOrientation();
```

What's this hook good for? Say you have two components, `Chart` and `Explanation`. You want `Explanation` to come first if the window is portrait, but you want `Chart` to come first if the window is landscape. Then arrange them in your JSX like this:

```jsx
{portrait && <Explanation />}
<Chart />
{landscape && <Explanation />}
```

Or say you want to creep out your users by divining the orientation of their window:

```jsx
<p>Well, your window is {orientation} right now, so you leave me no choice.</p>
```

The possibilities are endless.

<h2 id="options">Options</h2>

This hook has one optional parameter: an options object. There is currently only one option, `defaultOrientation`, the default orientation you'd like to return if no window exists (such as if a search engine is crawling your page). Valid `defaultOrientation`s are `"portrait"` or `"landscape"`, and if you omit the option, it will default to `"portrait"`.

```js
const { orientation, portrait, landscape } = useWindowOrientation({
  defaultOrientation: "portrait",
});
```

<h2 id="caveats">Caveats</h2>

This hook only deals with the _window_ orientation, not the _device_ orientation. It calculates this orientation using `window.innerWidth` and `window.innerHeight`. It does not consult [`window.orientation`](https://developer.mozilla.org/en-US/docs/Web/API/Window/orientation) at all because that feature has been deprecated.

Also, in the rare case that the window's width and height are equal, useWindowOrientation will just report the orientation as portrait.

<h2 id="contributing">Contributing</h2>

If you'd like to contribute to this project (which would be awesome), here's how to set it up:

1. [Fork this repository](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) to your own GitHub account.

2. Clone it to your device.

   ```sh
   git clone https://github.com/YOUR_USERNAME/use-window-orientation.git
   ```

3. Add this repository as a remote, so you can pull upstream changes in the future with `git pull upstream master`.

   ```sh
   cd use-window-orientation
   git remote add upstream https://github.com/tywmick/use-window-orientation.git
   ```

4. Install dependencies.

   ```sh
   npm install
   ```

   - Don't worry about the [high security vulnerability](https://github.com/developit/microbundle/issues/695) in `serialize-javascript` that npm brings up—the vulnerable code [isn't used by Microbundle](https://github.com/developit/microbundle/issues/695#issuecomment-672773094).

Now, you can build the package with `npm run build`, build _and_ watch for changes with `npm run dev` (automatically rebuilding on each change in the source), and run the test suite with `npm run test`.

After building the package, you can test it in another project on your machine by [adding the local path](https://docs.npmjs.com/files/package.json#local-paths) as a dependency (e.g., by running `npm install /path/to/local/use-window-orientation` in that other project).

<h2 id="related-projects">Related projects</h2>

- [useWindowWidthBreakpoints](https://github.com/tywmick/use-window-width-breakpoints)
