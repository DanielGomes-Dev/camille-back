import multer from "multer";
import { MASNameResolver, MulterAzureStorage } from "multer-azure-blob-storage";

const resolveBlobName: MASNameResolver = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const blobName = String(new Date().getTime());
    resolve(blobName);
  });
};
// const azureStorage: MulterAzureStorage = new MulterAzureStorage({
//   connectionString:
//     "DefaultEndpointsProtocol=https;AccountName=camilleimgstorage;AccountKey=bBoriiKVWOIEuOG3o4xqU2il3tg7rEWJDE6TcXVljyP7E5a6lzfWdCDPnMfnEkDsEuZUWcqujKlZV0UK4h3Erg==;EndpointSuffix=core.windows.net",
//   accessKey:
//     "bBoriiKVWOIEuOG3o4xqU2il3tg7rEWJDE6TcXVljyP7E5a6lzfWdCDPnMfnEkDsEuZUWcqujKlZV0UK4h3Erg==",
//   accountName: "camilleimgstorage",
//   containerName: "camilleimages",
//   containerAccessLevel: "blob",
//   urlExpirationTime: 0,
//   blobName: resolveBlobName,
// });

const azureStorage: MulterAzureStorage = new MulterAzureStorage({
  connectionString:
    "DefaultEndpointsProtocol=https;AccountName=weupstorage;AccountKey=Psb/IcihJyNno2iLUWttai/9ujP2R5SNzOo6KPGYrlHBCVv8dbPxfvbhIX+igk2gIxL/GKVFaoK766+xmjdUYw==;EndpointSuffix=core.windows.net",
  accessKey:
    "Psb/IcihJyNno2iLUWttai/9ujP2R5SNzOo6KPGYrlHBCVv8dbPxfvbhIX+igk2gIxL/GKVFaoK766+xmjdUYw==",
  accountName: "weupstorage",
  containerName: "weupstoragecontainer",
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
