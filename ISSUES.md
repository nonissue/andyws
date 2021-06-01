# Components

## Header

### 21-05-31

- Potential issue with theme changer still?
  - Update: Nah, doesn't exist on dev
  - UPDATE: ACTUALLY ISSUE OCCURS using private browser!
  - Okay, finally fixed?
    - added check of `theme` and `resolvedTheme` in `ThemeChanger`
    - `localStorage.theme === "null"` is still buggy, but shouldn't occur in real world anyway
    - Deploying to test now...

### 21-05-24

- Kind of fixed using `MenuLink` component, which wraps a link in a button with `tabIndex` set to `-1`
- Tabbing to item works, and when clicked / activated (using keyboard), navigates to page and hides popover
- Deleting `WrappedNextLink` as we don't need it.

### Original

- ATM it kind of works, but I think there is an issue with tab focus styling in dark mode
- [ ] to get popover to close when a next link is clicked, had to use ugly workaround:
  - [ ] https://github.com/tailwindlabs/headlessui/issues/427#issuecomment-826916025
- [ ] Other info:
  - [ ] https://github.com/tailwindlabs/headlessui/issues/120#issuecomment-717174190
- [ ] Another solution is to change focus: https://github.com/RobinMalfait/headlessui-popover-does-not-close/blob/1a44ed81239df3bec5d8869a289f2adf48b6a186/src/Page.jsx
- [ ] https://stackoverflow.com/questions/66572537/persistent-focus-in-nextjs
- [ ] https://codesandbox.io/s/elegant-dirac-tmkc4?file=/pages/index.js
