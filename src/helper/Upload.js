const Multer = require("multer");
const fs = require("fs");

class UploadFile {
  FileName;
  constructor(path) {
    this.path = path;
  }

  strorage = Multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, this.path);
    },
    filename: (req, file, cb) => {
      this.FileName = new Date().getTime() + ".jpg";
      cb(null, this.FileName);
    },
  });
}

class UploadSingle extends UploadFile {
  constructor(path) {
    super(path);
  }
  single = Multer({ storage: this.strorage }).single("image");
}

class UploadMultiple extends UploadFile {
    constructor(path) {
      super(path);
    }
    multi = Multer({ storage: this.strorage }).array("image", 3);
  }

class Unlink extends UploadFile {
    constructor(path) {
        super(path)
    }
    unlink = () => {
        fs.unlink(this.path, err => {
            if (err) {
                throw new Error(err)
            }
        })
    }
}

module.exports = { UploadSingle, UploadMultiple, Unlink };
