---

# Ramblings

## 21-04-05

#### **Feat: Add Storybook**
- Overall — I don't love it **¯\\_(ツ)\_/¯** 
- Config was kind of a huge hassle (with tailwind and next)
  - Had to modify next config to get svg / static assets processing
  - Had to mock `next/image` in `.stories/preview.js` as it wouldn't render otherwise
- It's also kinda slow, and I don't like having the story files adjacent to my components
- Probably not worthwhile for small projects
- Vercel build took WAY longer with story book, not sure if it's because a lot of files changed (from 1m -> ~2m)
#### **UI: Refactored mobile menu** 
  - No longer a fullscreen overlay
    - It's now a floating dropdown below menubar that covers the content below
    - Uses new tailwind `backdrop-filter-blur`
  - Removed transitions and cleaned up logic
  - Need to make it responsive as it appears on desktop viewports
  - Also, probably can disable scroll lock?

## Archive

### Persistent Layout

- Ultimately adopted this:
  - https://github.com/vercel/next.js/issues/9556#issuecomment-741947211
  - Not sure
- other: https://github.com/dwightwatson/blitz/commit/18beb6fb1d650a7faa7de19dfd1c186b98c7dfe5
- other: https://github.com/minvws/nl-covid19-data-dashboard/blob/3b166dd2d7c4f99fa4341507faf2ccb793df411b/packages/app/src/pages/_app.tsx
- other: https://github.com/tomasgil123/persistent-layout-typescript/blob/master/pages/_app.tsx

- !! https://github.com/vercel/commerce/blob/master/pages/_app.tsx official vercel implementation
- !! egghead teams approach: https://github.com/eggheadio/egghead-next/blob/main/src/pages/_app.tsx

// https://windstrap.netlify.app/#navbar
// https://github.com/jkytoela/next-startd
// https://github.com/ndimatteo/HULL

### Webfont shit

- https://css-tricks.com/how-to-load-fonts-in-a-way-that-fights-fout-and-makes-lighthouse-happy/
- https://csswizardry.com/2020/05/the-fastest-google-fonts/
- https://github.com/ekafyi/example-nextjs-webfont-optimization/blob/46568966da0d6d99aa9a275c2205be662b679092/pages/index.tsx
- https://github.com/vercel/next.js/pull/14746
- https://github.com/vercel/next.js/pull/24572/files
- Fixed? Commit @ 2918f728bb7f64feeba5740f4b63d5cf4e1b36bf
  - Yah, live prod version @ 99 lighthouse
-

---
