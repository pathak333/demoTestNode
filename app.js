const express = require("express")
require("dotenv").config()

const app = express();
require("./startup")(app);

const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Node server started on http://localhost:${port}`);
})