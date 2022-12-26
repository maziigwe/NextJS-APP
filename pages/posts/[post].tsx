import { useRouter } from "next/router";

export async function getServerSideProps({ params }: any) {
  const { post } = params;
  return {
    props: {
      post: post,
    },
  };
}

const Post = (props: any) => {
  const route = useRouter();
  console.log(route.query);
  return <div>{route.query + "-"} Enter</div>;
};

export default Post;
