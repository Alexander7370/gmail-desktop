import { is } from 'electron-util'

import Store = require('electron-store')

interface LastWindowState {
  bounds: {
    width: number
    height: number
    x: number | undefined
    y: number | undefined
  }
  fullscreen: boolean
  maximized: boolean
}

export enum ConfigKey {
  CompactHeader = 'compactHeader',
  DebugMode = 'debugMode',
  HideFooter = 'hideFooter',
  HideRightSidebar = 'hideRightSidebar',
  HideSupport = 'hideSupport',
  LastWindowState = 'lastWindowState',
  LaunchMinimized = 'launchMinimized',
  AutoHideMenuBar = 'autoHideMenuBar',
  EnableTrayIcon = 'enableTrayIcon',
  OverrideUserAgent = 'overrideUserAgent',
  AutoFixUserAgent = 'autoFixUserAgent',
  TrustedHosts = 'trustedHosts',
  ConfirmExternalLinks = 'confirmExternalLinks'
}

type TypedStore = {
  [ConfigKey.LastWindowState]: LastWindowState
  [ConfigKey.CompactHeader]: boolean
  [ConfigKey.HideFooter]: boolean
  [ConfigKey.HideRightSidebar]: boolean
  [ConfigKey.HideSupport]: boolean
  [ConfigKey.DebugMode]: boolean
  [ConfigKey.LaunchMinimized]: boolean
  [ConfigKey.AutoHideMenuBar]: boolean
  [ConfigKey.EnableTrayIcon]: boolean
  [ConfigKey.OverrideUserAgent]?: string
  [ConfigKey.AutoFixUserAgent]: boolean
  [ConfigKey.TrustedHosts]: string[]
  [ConfigKey.ConfirmExternalLinks]: boolean
}

const defaults = {
  [ConfigKey.LastWindowState]: {
    bounds: {
      width: 800,
      height: 600,
      x: undefined,
      y: undefined
    },
    fullscreen: false,
    maximized: true
  },
  [ConfigKey.CompactHeader]: false,
  [ConfigKey.HideFooter]: true,
  [ConfigKey.HideRightSidebar]: false,
  [ConfigKey.HideSupport]: true,
  [ConfigKey.DebugMode]: is.development,
  [ConfigKey.LaunchMinimized]: false,
  [ConfigKey.AutoHideMenuBar]: false,
  [ConfigKey.EnableTrayIcon]: !is.macos,
  [ConfigKey.AutoFixUserAgent]: true,
  [ConfigKey.TrustedHosts]: [],
  [ConfigKey.ConfirmExternalLinks]: false
}

const config = new Store<TypedStore>({
  defaults,
  name: is.development ? 'config.dev' : 'config'
})

export default config
