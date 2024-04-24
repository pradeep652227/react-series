import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import dbConfig from "../appwrite/dbConfig";
import fileUpload from '../appwrite/fileUpload';
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            dbConfig.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
            .catch(err=>{
                console.log("Error in EditPost Page:-");
                console.log(err);
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost