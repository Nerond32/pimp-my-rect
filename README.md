## Pimp my rect ( ͡° ͜ʖ ͡°)

### Legend:

:heavy_check_mark: Done  
:x: Not done  
:heavy_plus_sign: Added feature  
:wavy_dash: `Comment`

### Requirements:

- :heavy_check_mark: The app should consist of 3 parts/sections: **Editor**, **Output**, **Gallery**.
- **Output**: simple rectangular `<div>`
  - :heavy_check_mark: Editor should live-update the Output.
- **Editor**: it should have a set of inputs to adjust Output’s:
  - :heavy_check_mark: background colour (colour picker)
  - :heavy_plus_sign: border colour
  - :heavy_check_mark: size (input which you think is the most suitable here)
  - :heavy_check_mark: border radius (please use a range picker)
  - :heavy_check_mark: A save button
- **Gallery**: a list of saved Output divs with preserved styling. It should be possible to:
  - :heavy_check_mark: remove Outputs from the list
  - :heavy_check_mark: :wavy_dash: `LocalStorage` What’s crucial: the gallery’s state persists after the browser restarts. To obtain this goal, you’re allowed to use any technology you feel comfortable with (i.e. WS + IndexedDB, Firebase, Node+MongoDB, LocalStorage).
  - :heavy_check_mark: [optional but very welcome] some animations
  - :heavy_check_mark: [optional but very welcome] filtering options
  - :heavy_check_mark: [optional but very welcome] sorting options
- :heavy_check_mark: :wavy_dash: `Looks good and is responsive, couldn't test mobile Safari due to lack of a device supporting it, but according to chrome dev tools it should scale well even on iPhone 5/SE size` It should work well in the newest browsers (mobile Chrome and Safari included!).
- :heavy_plus_sign: Supporting ultrawide and large screens
- :heavy_check_mark: The whole thing should be split into modules (preferably with CommonJS or ES6 syntax but AMD is also fine).
- :heavy_plus_sign: Put in some testing effort, according to Jest ~79% coverage. Not great, not terrible.

### Other notes

- :wavy_dash: `On the same page` It’s up to you if you show Gallery on the same page or under e.g. localhost:xxxx/gallery.
- :wavy_dash: `Allowed myself to use yarn instead, the requirements were specified long enough ago, that Bower is already deprecated` All third party dependencies (if there will be any) should be installed using either NPM or Bower.
- :wavy_dash: `Using own (s)css mostly, react-transition-group for animations` The layout is up to you! Feel free to use tools such as http://getbootstrap.com/ or https://www.muicss.com/. In case you’d like to roll your own CSS you’re more than welcome to do so.
- :wavy_dash: `Techstack used: React+Redux, SASS styling` Use any technology of your preference. It’s perfectly OK to use vanilla JS or any front-end frameworks or libraries.

## Screenshoots

### Mobile(small, normal and large)

![mobile-small](/readme/mobile_small.png) ![mobile](/readme/mobile_normal.png) ![mobile-large](/readme/mobile_large.png)

#### Landscape

![mobile-large-landscape](/readme/mobile_large_landscape.png)

### Tablet

![tablet](/readme/tablet.png)

### Desktop

![desktop](/readme/desktop.png)

### Desktop(large/ultrawide)

![desktop-large](/readme/desktop_large.png)
