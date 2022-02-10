import multer from "multer";
import { MASNameResolver, MulterAzureStorage } from "multer-azure-blob-storage";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const resolveBlobName: MASNameResolver = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const blobName = String(new Date().getTime());
    resolve(blobName);
  });
};

const azureStorage: MulterAzureStorage = new MulterAzureStorage({
  connectionString: process.env.AZURE_CONNECTION_STRING,
  accessKey: process.env.AZURE_ACCESS_KEY,
  accountName: process.env.AZURE_ACCOUNT_NAME,
  containerName: process.env.AZURE_CONTAINER_NAME || "containerName",
  containerAccessLevel: "blob",
  urlExpirationTime: 0,
  blobName: resolveBlobName,
});

const uploadAzure = multer({
  storage: azureStorage,

  limits: {
    //1/2megabyte por foto
    fileSize: 1 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const allowdMimes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowdMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      new Error("invalid file type");
    }
  },
});

export default uploadAzure;
