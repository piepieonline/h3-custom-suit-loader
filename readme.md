# Custom Suit Loader
Enables custom suits to be used without replacing existing suits (Works both Online and with Peacock). Requires the SMF and the ModSDK.
Also (optionally) allows for the Season 3 default starting suits to be used across any map in the game.

## Known issues
- Suits mods need to be specifically built to work with this mod (Suit Creators: See the optional download for an example).
- Enabling suit images online requires an optional setting in SMF, but this will potentially cause minor bugs that IO have already fixed previously.
- The selected suit may not save between playthroughs, leaving it blank or reset to default.
- You can't add DLC suits with this.

## Creating new suits
Starting from an exist suit entity in QNE, make your changes and save as an entity (not a patch). Go to https://www.piepieonline.com/h3-custom-suit-loader/ (Chromium browsers only), and fill in the options, adding the entity file to required files, and selecting it in the dropdown. Generate and download the mod, and install it with SMF.
For more a mod with multiple suits included (using SMF options), see the reference suits optional download.

Thanks to Kercyx for letting me use his work in the reference suits!