const express = require('express');

const app = express();

app.use(express.json())

/**
* GET - Buscar uma informação dentro do servidor
* POST - INSERIR UMA INFORMAÇÃO NO SERVIDOR
* PUT - ALTERAR UMA INFORMAÇÃO NO SERVIDOR
* PATCH - ALTERAR UMA INFORMAÇÃO ESPECIFICA
* DELETE - DELETA UMA INFORMAÇÃO NO SERVIDOR
*/


/**
 * Tipos de parametros
 * 
 * Route Params => Identificar um recurso para poder editar ou deletar e buscar const params = request.params
 * Query Params =>  paginação filtro 
 * Body Params => Os objetos inserção/ alteração (JSON)
 */

app.get("/courses",(req, res) =>{

    const query = req.query;

    console.log(query);
    return res.json([
     "curso 1", "curso 2", "curso 3"   
    ])
})

app.post("/courses",(req, res) =>{
    const body = req.body;
    console.log(body);
    return res.json([
     "curso 1", "curso 2", "curso 3", "curso 4"   
    ])
});

app.put("/courses/:id", (req, res) =>{
    const params = req.params;
    const { id } = req.params;
    
    console.log(params);
    console.log(id)
    return res.json([
        "curso 6", "curso 2", "curso 3", "curso 4"   
       ])
})

app.patch("/courses/:id", (req, res) =>{
    return res.json([
        "curso 6", "curso 7", "curso 3", "curso 4"   
       ])
});

app.delete("/courses/:id", (req, res) =>{
    return res.json([
        "curso 6", "curso 7", "curso 4"   
       ])
})
//localhost:3031
app.listen(3333);



