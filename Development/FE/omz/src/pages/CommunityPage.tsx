import CommunityNavbar from "../components/communityPage/CommunityNavbar";
import CommunityArticleItem from "../components/communityPage/CommunityArticleItem";
import { getArticles } from "../api/community";
import { useMutation, useQuery } from "react-query";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";
import CommunityCreateSmall from "../components/communityPage/CommunityCreateSmall";
import { createArticle } from "../api/community";
import Loading from "../components/common/Loading";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";
import { useEffect } from "react";
import Masonry from "react-masonry-css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Article = {
  boardId: number;
  [key: string]: any;
};

export default function CommunityPage() {
  const memberId = useRecoilValue(userStatus).id;
  let page = 0;
  const sort = "registeredTime,DESC";

  // 모든 게시글 리스트 불러오기(GET)
  const { data, isLoading, isError, refetch } = useQuery(
    ["articles", memberId, page, sort],
    () => getArticles(memberId, page, 100, sort)
  );
  useEffect(() => {
    refetch();
  }, []);

  // 게시글 만들기(POST)
  const addArticle = useMutation(
    (board: { content: string; file: File; memberId: number }) =>
      createArticle(board),
    {
      onSuccess: () => {
        toast.success("게시글이 작성되었습니다.", {
          autoClose: 3000,
          position: toast.POSITION.TOP_RIGHT,
        });
        refetch();
      },
    }
  );
  const handleArticleSubmit = (article: string, image: File) => {
    addArticle.mutate({
      content: article,
      file: image,
      memberId: memberId,
    });
  };

  if (isLoading) return <Loading />;
  if (isError) return <p className="title">isError...</p>;

  return (
    <div className="flex flex-col items-center">
      <ToastContainer />
      <TitleBar goto="/main" title="Community" icon={images.community_img} />
      <div className="m-3"></div>
      <CommunityCreateSmall onArticleSubmit={handleArticleSubmit} />
      <div className="m-3"></div>

      {/* <div className="w-11/12 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.data.map((article: Article) => (
          <CommunityArticleItem
            key={article.boardId}
            item={article}
            refetch={refetch}
          />
        ))}
      </div> */}
      <Masonry
        breakpointCols={{ default: 1, 3000: 3, 1000: 2, 600: 1 }}
        className="my-masonry-grid w-11/12 gap-4"
        columnClassName="my-masonry-grid_column"
      >
        {data?.data.map((article: Article) => (
          <CommunityArticleItem
            key={article.boardId}
            item={article}
            refetch={refetch}
          />
        ))}
      </Masonry>
      <div className="pb-20"></div>
      <CommunityNavbar />
    </div>
  );
}
