import { Client, Storage, ID } from "appwrite";

import conf from "../conf/conf";

export class FileUpload {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.storage = new Storage(this.client);
  }

  async uploadImage(image) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketID,
        ID.unique,
        image
      );
    } catch (error) {
      console.log("Error in uploadImage:-");
      console.log(error);
      throw error;
    }
  }

  async deleteImage(imageId) {
    try {
      return await this.storage.deleteFile(conf.appwriteBucketID, imageId);
    } catch (error) {
      console.log("Error in deleteImage:-");
      console.log(error);
      throw error;
    }
  }

  getImagePreview(imageId){
    return this.storage.getFilePreview(conf.appwriteBucketID,imageId);
  }
}

const fileUpload=new FileUpload();
export default fileUpload;
