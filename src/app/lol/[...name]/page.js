const BlogPost = ({params: {name}}) => {
    return(
      <p className="text-2xl">
        What is <strong>{name}?!</strong>
      </p>
    )
  }
  
export default BlogPost;
