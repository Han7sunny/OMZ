import FriendsCard from "./FriendsCard";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useQuery } from "react-query";
import { getFriendRecommend } from "../../api/newFriend";
import { useRecoilValue } from "recoil";
import { userStatus } from "../../recoil/userAtom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {
  handleProposalModal(): void;
  handleModalFor(memberId: number, nickname: string): void;
  handletalkFriends(id: number): void;
};
export default function FriendsRecommend({
  handleProposalModal,
  handleModalFor,
  handletalkFriends,
}: Props) {
  const memberId = useRecoilValue(userStatus).id;
  const { data } = useQuery(
    "friendRecommend",
    () => getFriendRecommend(memberId),
    {}
  );

  return (
    <div className="flex flex-col w-11/12 h-full">
      <p className="font-semibold w-full text-center my-5">추천 친구</p>
      <div className="w-full flex justify-center h-3/4 px-4 items-center">
        <Carousel
          className="max-w-2xl w-11/12"
          showThumbs={false}
          showStatus={false}
        >
          {data?.data.map((info: any) => {
            return (
              <div className="slide" key={uuidv4()}>
                <FriendsCard
                  info={info}
                  handleProposalModal={handleProposalModal}
                  handleModalFor={handleModalFor}
                  handletalkFriends={handletalkFriends}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
