module.exports = () => ({
  settings: {
    cors: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:3000', 'https://shop.jorisnijkamp.nl'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
    }
  }
})
