
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

  ☄𐭚𐡔𐤔𐤔𐋎ⱎⱑ𓋝𓍶𓈉𓇸𐳩𐳖𐲖ᱦ᭶𐊾𐍦𖭥𖬨ꪛ𖬮𖬯𑜳ɐ  𑜅𑜳 𑜉𑜊 ꫧ  𐡻 𐊀𐊙 𐤔𐤀 ꖿ 𐤔𐤀  𐤌𐤀
  𐙦𐝕 𐌀𐳽 ⱭⱲ ⱑⱎ𓊗ꖺꖘꗇꔛꫧ𑜄𑜾ᱷ ᱚᱷ 
---