const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const DocSchema = new Schema({
    avatar: {
        type: String,
        default: "",
      },
      name: {
        type: String,
        default: "",
      },
     
      phone_no: {
        type: String,
        unique: false,
      },
     
      email: {
        type: String,
        default: "",
        unique: true,
      },
      password: {
        type: String,
        default: "",
      },
},
{
  versionKey: false,
  timestamps: true,
})


DocSchema.set("toJSON", {
    getters: true,
    virtuals: true,
    transform: function (doc, ret, opt) {
      delete doc.password;
      delete ret["password"];
      return ret;
    },
  });

  DocSchema.methods.setPassKey = function (pin, callback) {
    const promise = new Promise(async (resolve, reject) => {
      if (!pin) reject(new Error("password not Found"));
      const salt = await bcrypt.genSalt(parseInt(process.env.SECRET_KEY));
      bcrypt.hash(pin, salt, (err, hash) => {
        if (err) reject(err);
        this.password = hash;
        this.save();
        resolve(this);
      });
    });
    if (typeof callback !== "function") return promise;
    promise.then((res) => callback(null, res)).catch((err) => callback(err));
  };
  
  DocSchema.methods.authenticate = function (pin, callback) {
    const promise = new Promise((resolve, reject) => {
      if (!pin) reject(new Error("Password not found"));
      bcrypt.compare(pin, this.password, (err, result) => {
        if (!result) reject(new Error("Invalid Password"));
        resolve(this);
      });
    });
    if (typeof callback !== "function") return promise;
    promise.then((res) => callback(null, res)).catch((err) => callback(err));
  };



module.exports = mongoose.model("User",DocSchema)