import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();

  router.query.newsDetail;
  return <h1>This is the details page</h1>;
};

export default DetailPage;
