# TODO

## BUGS

### UI

- [ ] **FIX LAYOUT SHIFT WHEN SCROLLBAR APPEARS?** !!

## Improvements

### Content

- [ ] Add images to projects
  - [ ] Screenshots? Use code screenshot/share tool
- [ ] Add project pages
- [ ] Fetch activity from github api
- [ ] Add photos page

### Arch

- [ ] Setup `siteContext` -> worth doing because if I track things like `navOpen`, I could implement scroll lock, etc.
- [ ] Use `siteContext` -> worth doing because if I track things like `navOpen`, I could implement scroll lock, etc.
- [ ] Hook Nav state into new app context
  - [ ] This may not be required with headless ui
- [ ] Remove unused font styles

### UI

- [x] Refactor components to use css files and `@apply` to style, rather than having inline
- [x] Fix footer (positon absolute but dont cover content)

### Components

- [x] Menu Toggle
  - [x] For use with themechanger, open mobile menu, dismiss mobile menu
  - [x] Swap buttons when mobile nav open
- [ ] Scale `MenuTimeline` content dynamically (so we can decrease size in mobile viewports)

### Archive

- [ ] Change fontstack
- [ ] Ability to change logo colour with tailwind
