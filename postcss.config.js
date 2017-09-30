module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'postcss-mixins': {
      mixins: {
        noSelect: {
          '-webkit-touch-callout': 'none',
          '-webkit-user-select': 'none',
          '-khtml-user-select': 'none',
          '-moz-user-select': 'none',
          '-ms-user-select': 'none',
          'user-select': 'none'
        }
      }
    },
    'postcss-nested': {},
    'postcss-simple-vars': {
      variables: {
        background: '#F1F5F6',
        'font-size': '14px',
        primary: '#8B999F',
      },
      unknown: function unknown(node, name, result) {
        node.warn(result, 'Unknown variable ' + name)
      }
    },
  }
};
