// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// 

// https://api.raindrop.io/rest/v1/raindrop/1229560

// headers: {
//   Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
// },
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.create('https://api.raindrop.io/rest/v1/raindrop/1229560', {
      headers: {
        Authorization : `Bearer ${process.env.RAINDROP_TOKEN}`,
        'Content-Type': 'application/json'
      },
    })
    .then(console.log).catch(console.log);

    const collection = actions.addCollection({
      typeName: 'Mark'
    })

    for (const item of data) {
      collection.addNode({
        ...item
      })
    }
  })
}



