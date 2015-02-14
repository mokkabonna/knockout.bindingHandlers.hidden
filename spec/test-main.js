require.config({
  baseUrl: '/base', //karma servers files from base
  paths: {
    knockout: 'bower_components/knockout/dist/knockout'
  }
});

require(['spec/hidden'], window.__karma__.start);
