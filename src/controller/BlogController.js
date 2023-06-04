const { UploadSingle, UploadMultiple, Unlink } = require("../helper/Upload");
const CrytpTo =  require('crypto-js')

exports.AddSingleImage = async (req, res) => {
  await new UploadSingle("./src/public/blog").single(req, res, (err) => {
    if (err) {
      console.log(err);
    }
    // console.log(req.files.map(file=> file.filename));
    console.log(req.file.filename);
  });
};

exports.AddMultiImage = async (req, res) => {
  await new UploadMultiple("./src/public/blog").multi(req, res, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(req.files.map((file) => file.filename));
  });
};

exports.Unlink = async (req, res) => {
  try {
    await new Unlink("./src/public/blog/1685891925221.jpg").unlink();
    console.log('ok')
  } catch (error) {
    console.log(error);
  }
};

exports.EncrytUser = async (req, res) => {

    const ciptext = CrytpTo.AES.encrypt(JSON.stringify(123456),'secretkey').toString()
    console.log(ciptext)
    const text = 'U2FsdGVkX1/zUmYjLceIm5XK3Ey156qfKQYjAWwUoR0='
    const newPass = 'U2FsdGVkX195fo1rLvzh3d7KEzgo+wn+xOBTWau+9Ts='
    const byte = CrytpTo.AES.decrypt(text, 'secretkey')
    const cat = JSON.parse(byte.toString(CrytpTo.enc.Utf8))
    console.log(cat)

    const bytes = CrytpTo.AES.decrypt(newPass, 'secretkey')
    const cats = JSON.parse(bytes.toString(CrytpTo.enc.Utf8))
    console.log(cats == cat)
  
  };


