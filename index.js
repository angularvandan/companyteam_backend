const jsonServer=require("json-server");
const server=jsonServer.create();
const router=jsonServer.router("db.json");
const middlewere=jsonServer.defaults();
const port=process.env.PORT || 8080;

server.use(middlewere);
server.use(router);

server.listen(port,()=>{
    console.log("json server is running");
});