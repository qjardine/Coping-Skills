# Tooltip Addition Script

This script systematically adds tooltips to all navigation buttons throughout the app using the established pattern from `sit-with-it.tsx` and `unsafe-body-check.tsx`.

## Pattern

The tooltip pattern includes:
- **Question mark icon** next to the button (scales on hover)
- **Click/hover to show tooltip** - tooltip appears below the button
- **Tooltip displays** information about what's found on the linked page
- **Close button** in tooltip to dismiss it
- **Click outside** to close tooltip

## Files

- `add-tooltips-v2.js` - Improved script with better parsing
- `tooltip-descriptions.json` - Mapping of routes to tooltip descriptions

## Usage

```bash
node scripts/add-tooltips-v2.js
```

The script will:
1. Scan all `.tsx` files in `app/pages/`
2. Find buttons with `router.push()` calls
3. Add tooltip infrastructure (state, useEffect, toggleTooltip function)
4. Wrap buttons with tooltip containers
5. Add question mark icons next to buttons
6. Generate tooltip text from `tooltip-descriptions.json`

## What Gets Tooltips

- Buttons that navigate to other pages via `router.push()`
- Buttons that don't already have tooltips
- Buttons that aren't BackButton/NextButton components

## What Doesn't Get Tooltips

- Back buttons (`router.back()`)
- "Return to Landing" buttons
- Buttons that already have tooltip infrastructure
- BackButton/NextButton components

## Adding New Tooltip Descriptions

Edit `scripts/tooltip-descriptions.json` to add or update tooltip text for specific routes:

```json
{
  "/pages/your-route": "Description of what users will find on this page"
}
```

## Notes

- The script skips files that already have tooltip infrastructure
- Tooltip IDs are generated from routes (e.g., `/pages/mindfulness/meditation` → `mindfulness-meditation`)
- Default descriptions are generated if a route isn't in the JSON file
