import {withRouter} from "next/router";

const Post = props => <h1>you're looking at post #{props.router.query.id}</h1>;

// Post.getInitialProps = async ({ query }) => {
//   return query;
// };

export default withRouter(Post);
