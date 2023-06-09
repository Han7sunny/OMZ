import ChatListItem from "../components/chatting/ChatListItem";
import TitleBar from "../components/common/TitleBar";
import { images } from "../assets/images";
import { getChatting } from "../api/chatting";
import Loading from "../components/common/Loading";
import { useRecoilValue } from "recoil";
import { userStatus } from "../recoil/userAtom";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { div } from "@tensorflow/tfjs";

type Chat = {
  [key: string]: any;
};

const ChattingPage = () => {
  const memberId = useRecoilValue(userStatus).id;

  // 채팅방 목록 가져오기
  const { data, isLoading, isError, refetch } = useQuery(
    ["chatting", memberId],
    () => getChatting(memberId)
  );

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <h3>Error...</h3>;

  return (
    <div className="w-full flex flex-col items-center">
      <TitleBar goto="/main" title="Chatting" icon={images.chatting_img} />
      <div className="max-w-3xl w-full flex flex-col items-center">
        {data?.data == "" ? (
          <div>
            <p>채팅 목록이 없습니다.</p>
          </div>
        ) : (
          data?.data.map((chat: Chat) => (
            <ChatListItem
              item={chat}
              key={chat.recentMessageCreatedTime}
              refetch={refetch}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default ChattingPage;
