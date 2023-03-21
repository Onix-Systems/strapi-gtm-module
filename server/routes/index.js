module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      auth: false,
      policies: [],
    },
  },
];
