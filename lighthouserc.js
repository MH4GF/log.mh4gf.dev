module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
      // TODO: enable ignored assertions
      assertions: {
        'csp-xss': 'off',
        'errors-in-console': 'off',
        'installable-manifest': 'off',
        'maskable-icon': 'off',
        'service-worker': 'off',
        'splash-screen': 'off',
        'themed-omnibox': 'off',
      },
    },
  },
}
