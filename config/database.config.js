const mongoose = require("mongoose");
// mongodb+srv://seaspeed:poiuytrewq1234567890@cluster0.ljzcgzs.mongodb.net/?retryWrites=true&w=majority
let URI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@${process.env.DBHOST}/${process.env.DBNAME}?retryWrites=true&w=majority`;
if (process.env.DEVICE === "local") {
  URI = "mongodb://0.0.0.0:27017/shopCart";
}
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
  })
  .then(() => {
    console.log(`Connected to Mongo Database.`);
  })
  .catch((ex) => {
    console.log("Failed to Connect to Mongo Database.");
    console.error(ex);
  });

module.exports = mongoose;