Gmail Desktop is a third-party app and not affiliated with Google.

## Highlights

- [Appearance customizations](#appearance-customizations)
- [Custom styles](#custom-styles)
- Desktop notifications
- macOS: Unread badge in dock
- Windows/Linux: Unread icon tray
- Silent auto-updates
- [Clean email links from Google](#clean-email-links-from-google)
- [Confirm email links before opening to prevent phishing](#confirm-email-links-before-opening-to-prevent-phishing)
- Cross-platform

## Installation

_macOS 10.13+, Linux and Windows 8+ are supported (64-bit only)._

## Features

### Appearance customizations

Gmail Desktop provides a number of appearance customizations to improve and simplify the default Gmail styles. These customizations are enabled by default and configurable under the `Settings` → `Appearance` menu.

- `Compact Header`: Customizes the Gmail header to use a more compact style to provide a more native feel. This setting requires a restart to be applied.
- `Hide Footer`: Hides footer information text (storage used, terms links, etc.).
- `Hide Right Sidebar`: Hides the Google apps sidebar on the right side of the interface.
- `Hide Support`: Hides the support button in the header.

![](media/appearancecustomization.gif)

### Custom styles

In addition to the available appearance customizations, custom user styles can be applied. Click the menu item `Settings` → `Appearance` → `Custom Styles` to open the custom CSS file in the default editor for CSS files.

### Confirm email links before opening to prevent phishing

Confirm email links can be disabled at `Settings` → `Confirm External Links before Opening`.

![](media/confirmlinkdialog.png)

### Clean email links from Google

Email links in Gmail are usually prepended with `https://google.com/url?q=<actual_url>`, which is not visible to the user. While we don't know exactly why or what it does, it's unnecesary and we believe it does some tracking stuff. Gmail Desktop automatically cleans links from this, so the actual URL will be directly opened in the browser.

#### Install

```sh
yarn install
```

#### Run

```sh
yarn start
```

#### Build

```sh
yarn dist
```
