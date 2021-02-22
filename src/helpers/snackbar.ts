import { createSnackbar, SnackOptions, ThemeRules } from '@snackbar/core'
export { destroyAllSnackbars } from '@snackbar/core'

const defaultOptions: SnackOptions = {
  position: 'center',
  timeout: 2000,
  maxStack: 3,
}

const successTheme: ThemeRules = {
  actionColor: '#0d47a1',
  backgroundColor: '#2196f3',
  textColor: '#ffffff',
}

const failureTheme: ThemeRules = {
  actionColor: '#b71c1c',
  backgroundColor: '#f44336',
  textColor: '#ffffff',
}

export const snackbar = {
  success: (message: string) =>
    createSnackbar(message, {
      ...defaultOptions,
      theme: successTheme,
    }),
  failure: (message: string, callback: () => void) =>
    createSnackbar(message, {
      ...defaultOptions,
      theme: failureTheme,
      timeout: 0,
      actions: [
        {
          text: 'DISMISS',
          callback: (_, snackbar) => {
            snackbar.destroy()
            callback()
          },
        },
      ],
    }),
}
