# Components

## Header

- [ ] Mobile nav icon swap has slight layout shift?
- [ ] Mobile nav isn't hidden when clicked/tapped
  - [x] Not sure how to handle, watch route change or something?
  - [x] Don't really wanna pass state setter down to mobile nav component so it can toggle parent state, just gets messy
  - [x] Maybe implement app state using pullstate or context?
  - [ ] Might be fixed? just passing toggle from parent
  - [ ] State is preserved with history actions (back/forward). might want to clear menu if shown when traversing history
  - [ ] https://nextjs.org/docs/api-reference/next/routergit ad