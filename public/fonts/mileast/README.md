# Mileast font files go here

The site's heading font is configured as **Mileast** (see the `@font-face` rule
in `app/globals.css`), but the actual font files are not part of this
repository yet. Until they're added, headings fall back to Work Sans.

## What to add

Drop the licensed Mileast webfont file(s) into this folder using these exact
names (referenced directly by `app/globals.css`):

- `Mileast-Variable.woff2` (preferred — variable font, all weights)
- `Mileast-Variable.woff` (fallback for older browsers)

If GDS Media's Mileast license only provides static per-weight files instead
of a variable font, add one `@font-face` block per weight in
`app/globals.css` (copy the existing block and change `font-weight` to a
single value plus the matching filename) instead of the single variable-font
block that's there now.

No other code changes are needed — once the files exist here, headings will
pick up Mileast automatically on the next build.
