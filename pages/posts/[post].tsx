export async function getServerSideProps({ params }: any) {
  const { post } = params;
  return {
    props: {
      post: post,
    },
  };
}

const Post = (props: any) => {
  return <div>{props.post} Enter</div>;
};

export default Post;
