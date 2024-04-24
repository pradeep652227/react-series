/* eslint-disable no-useless-catch */
import { Client, Databases, ID, Query } from "appwrite";

import conf from "../conf/conf";

export class DBConfig {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createPost({ title, content, coverImage, userId, status }) {
    try {
      const result = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        { title, content, coverImage, userId, status }
      );
      return result;
    } catch (error) {
      console.log("Error in Create-Document:-");
      throw error;
    }
  }

  async getPost(postId) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        postId
      );
    } catch (error) {
      console.log("Error in GetPost:-");
      console.log(error);
      throw error;
    }
  }

  async updatePost(postId, { title, content, coverImage, userId, status }) {
    try {
      const result = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId,
        { title, content, coverImage, userId, status }
      );
      return result;
    } catch (error) {
      console.log("Error in Create-Document:-");
      console.log(error);
      throw error;
    }
  }

  async deletePost(postId) {
    this.databases.deleteDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, postId)
      .then((result) => result)
      .catch((err) => {
        console.log("Error in DeletePost:-");
        console.log(err);
        return err;
      });
  }
  async getPosts(queries=[Query.equal("status","active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      throw error;
    }
  }
}

const dbConfig = new DBConfig();
export default dbConfig;
