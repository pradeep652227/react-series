/* eslint-disable react/prop-types */
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import Editor from "../RTE";
import dbConfig from "../../appwrite/dbConfig";
import fileUpload from "../../appwrite/fileUpload";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  //if the user clicks on edit post then the compo will have the post prop
  const { register, handleSubmit, watch, setValue, getValues, control } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.content || "",
        slug: post?.slug || "",
        status: post?.status || "",
      },
    });
  const navigateTo = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submitForm = async (data) => {
    try {
      if (post) {
        /*Update a Post*/
        //upload new image
        const newImage = data.image[0]
          ? await fileUpload.uploadImage(newImage)
          : null;
        //delete previous image
        newImage && fileUpload.deleteImage(post.coverImage);

        const updatedPost = await dbConfig.updatePost(post.$id, {
          ...data,
          coverImage: newImage ? newImage.$id : undefined,
        });
        if (updatedPost) navigateTo(`posts/${updatedPost.$id}`);
      } else {
        /*Create a Post*/
        //upload a new image (image is required)
        const uploadedImage = await fileUpload.uploadImage(data[0].image);
        const newPost = await dbConfig.createPost({
          ...data,
          coverImage: uploadedImage.$id,
          userId: userData.$id,
          status: "active",
        });
        if (newPost) navigateTo(`posts/${newPost.$id}`);
      }
    } catch (error) {
      console.log("Error in submiting PostForm:-");
      console.log(error);
    }
  };

  const slugTransform = useCallback((title) => {
    /*Watch the title and convert every space/specia-character to '-' and setSlug value*/
    if (title && title.length > 0)
      // return title.split(" ").join("-");
      return title
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-z\d]+/g, "-");
    //g for global, ^ negate, [...] for what included , \d for digits, + for all the other characters

    return ""; //else condition
  }, []);

  useEffect(() => {
    const subsctiption = watch((value, { name }) => {
      //watching all inputs
      if (name === "title")
        setValue(
          "slug",
          slugTransform(value.title, {
            shouldValidate: true, //will check if your input is valid or not
          })
        );

      return () => {
        subsctiption.unsubscribe(); //to avoid redundant call of this function by unsubscribing to the dependency variable
      };
    });
  }, [watch, setValue, slugTransform]);
  return (
    <form onSubmit={handleSubmit(submitForm)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        {/*If the user types in slug-input then update the slug dynamically.
          OnChange vs OnInput-- onChange will trigger the callback after the user has finished typing or when they move to the next field.
           moves focus away from the element (such as pressing Tab or clicking outside the input).
           The onInput event fires continuously as the value of an input element changes, immediately after every keystroke or input event. */}
        <RTE
          label="Content :"
          name="content"
          control={control} //getting the control of RTE.
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={fileUpload.getImagePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
