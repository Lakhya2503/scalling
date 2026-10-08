import express from 'express'


const app = express()


const PORT = process.env.PORT || 5000
const SERVER_NAME = process.env.SERVER_NAME || 'horizontal_scale'

app.get("/", (req,res)=> {
    res.json({
        server : SERVER_NAME,
        port : PORT,
        message : `Hello from ${SERVER_NAME} server.. 💻⚙️ `
    })
})

app.listen(PORT, "0.0.0.0", () => {
  console.log(`${SERVER_NAME} running on port ${PORT}`);
});
