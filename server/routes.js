const controller = require("./controller");

module.exports = function(app){
    app.get('/api/pets', controller.all)
    app.get('/api/pets/:id', controller.show)
    app.post('/api/pets', controller.create)
    app.put('/api/pets/:id', controller.update)
    app.delete('/api/pets/:id', controller.destroy)
    app.patch('/api/pets/:id/like', controller.like)
    app.all("*", controller.angular)
}