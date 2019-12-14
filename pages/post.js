const Post = ({ id }) => <h1>you're looking at post #{id}</h1>;

Post.getInitialProps = async ({ query }) => {
  return query;
};

export default Post;
