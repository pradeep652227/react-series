/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import fileUpload from "../appwrite/fileUpload";

export default function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`posts/${$id}`}>
      <div className="w-full rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={fileUpload.getImagePreview(featuredImage)}
            alt={`Blog Post with Title ${title}`}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}
