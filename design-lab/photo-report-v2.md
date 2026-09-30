# Photo review — second round

Nine photos received restrained edits; four were left photographically unedited because they are small or lack useful detail. Nothing was enlarged. Originals are untouched, and no first-round edited image was used. I reviewed the full [before/after sheet](photos-before-after-v2.jpg), including larger sections, and backed off corrections that looked processed.

| Photo | What was wrong | What I did | Verdict |
|---|---|---|---|
| Courthouse — `hero/building-signs.jpg` | Hard diagonal shadow, blue shade, excessive empty wall and roof foreground | Cropped around all three lines; gently brightened and warmed the shade. Rejected the stronger attempt to make the wall evenly lit. | **Usable**, shadow remains |
| Construction banner — `hero/construction-signage.jpg` | Blurry grass competes with the banner | Trimmed foreground and edges; kept original light and camera angle | **Good** |
| MicaBella — `hero/lobby-signs.jpg` | Soft, compressed detail; yellow-green cast; steep angle and little room above the letters | Left alone. Although 1920 px wide, the actual detail does not support another corrective edit. | **Unedited**, weak source |
| Rear truck — `hero/vehicle-wraps.jpg` | Excess pavement; slightly dark underside | Small pavement trim and very light shadow lift | **Good** |
| Banner backdrop — `services/banners.jpg` | Only 460 × 316 px | Left alone at original dimensions | **Unedited**, thumbnail only |
| Green tgs letters — `services/building-signs.jpg` | Soft, processed-looking detail despite 1600 px width; steep angle | Left alone; straightening would stretch already weak detail | **Unedited**, weak source |
| ROE — `services/custom-signs.jpg` | Dark; flowers and controls compete with the sign; reflections in letters | Cropped to both lines, excluding controls and most flowers; modest brightening | **Usable** |
| Embroidery — `services/embroidery.png` | Only 799 × 584 px | No photographic edits; converted to JPEG at original size | **Unedited**, small card only |
| Pen — `services/laser-engraving.jpg` | Slight tilt, fingers, too much desk | Levelled and cropped to the complete imprint; small brightness lift | **Usable**, detail view |
| Golden Bolt — `services/lobby-signs.jpg` | Dark wall, glaring ceiling light and desk clutter | Cropped to both signs and gently lifted the wall; kept its natural dark color | **Usable** |
| Snow globe — `services/special-projects.jpg` | Already a good night photograph | Trimmed a little empty sky; left color and light alone | **Good** |
| Wall graphics — `services/wall-graphics.jpg` | Ceiling and furniture compete with artwork; slightly dull light | Trimmed surroundings while retaining the complete artwork; tiny brightness and color correction | **Good** |
| Front truck — `services/wraps.png` | Backlit in tree shade; limited fine detail | Trimmed canopy and road; gently lifted shaded tones while leaving bright sky almost unchanged | **Usable** |

## Reshoot priorities

1. **Courthouse:** photograph with the whole sign in even light. The current crop is only 865 × 540 px and should not be stretched into a large hero banner.
2. **MicaBella:** shoot square to the wall without flash, leaving room around every letter.
3. **Banner backdrop:** obtain a larger original or photograph another banner installation.
4. **tgs letters:** use a sharp original or reshoot without digital zoom, from farther back and nearer sign height.
5. **ROE:** move the flowers before shooting and change camera position to reduce mirror reflections. Leave more space above the sign.
6. **Pen:** photograph the whole pen on a plain surface without hands.
7. **Front truck:** park away from trees in even light. The rear view is the stronger existing option.
8. **Embroidery:** find the full-resolution original if this needs to appear larger than a small card.

## What editing could not fix

The courthouse wall could not be made evenly lit convincingly. I tested a correction measured on both sides of the shadow, with a soft boundary and separate handling of broad lighting and fine texture. The stronger versions exposed colored patches and a diagonal seam. Those versions are not delivered. The supplied alternative keeps the shadow visible and all letters consistently dark; it is a compromise, not a repaired studio-quality photograph.

ROE still has reflections and a flower stem at the left edge. MicaBella retains its cast and angle because the instruction to leave weak sources alone takes priority. Missing detail cannot be recovered. Golden Bolt retains uneven room lighting and a softer secondary sign. The pen crop shows the imprint rather than the whole product. The trucks retain their real surroundings and lighting.

Files are in `public/assets/improved-v2/`, with dimensions, suggested use and limitations in `manifest.json`. All 13 exports are sRGB JPEG, quality 88, with metadata stripped. “Unedited” means no crop, resizing, tone, color, sharpening or cleanup; those files were still re-encoded for the requested JPEG export, so they are not byte-identical copies. Show the complete ROE, pen and courthouse crops rather than applying another automatic website crop.
