# TODO

## Step 1 — Locate missing image fields
- [x] Identify which components/sections render “left fields” without images (Hero/About/Gallery image `src="/..."` paths)
- [x] Map those image slots to expected asset names in `brenda-protocol/public/`



## Step 2 — Fix image paths
- [x] Ensure all `<img src="/...">` paths reference existing files under `brenda-protocol/public/`
- [x] Copy/standardize missing images into `brenda-protocol/public/` (from top-level `image/` folder)


## Step 3 — Verify coverage
- [x] Check Hero/About/Gallery (and any other sections) for correct image existence (paths match `brenda-protocol/public/`)
- [ ] Add safe fallbacks (optional) so UI never shows broken/empty images


## Step 4 — Test
- [x] Run `npm run lint`
- [x] Run `npm run build`
- [ ] Manually confirm images render correctly in the browser


