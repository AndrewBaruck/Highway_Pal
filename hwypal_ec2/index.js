const express = require ('express');
const app = express();
const PORT = 8080;

app.use( express.json() )

app.listen(PORT, () => console.log(`Its alive on http://localhost:${PORT}`)
)

app.get('/hwy', (req, res) => {
    res.status(200).send({
        name: 'Hello, World!',
        message: 'This is a sample response from the /hwy endpoint.',
    })
})

app.post('/hwy/:id', (req, res) => {

    const { id }  = req.params;
    const { body } = req.body;

    if (!body) {
        return res.status(400).send({
            error: 'Missing body in request',
        });
    }

    res.send({
        hwy: `You sent a POST request to /hwy/${id} with body: ${body}`
    })

})




