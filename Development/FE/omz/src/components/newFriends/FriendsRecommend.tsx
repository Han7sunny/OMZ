import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faHeart,
  faHeartCrack,
} from "@fortawesome/free-solid-svg-icons";
import FriendsCard from "./FriendsCard";
import FriendBtn from "./FriendBtn";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
type Props = {
  handleRefuseModal(): void;
  handleProposalModal(): void;
  handleModalFor(memberId: number, nickname: string): void;
};
export default function FriendsRecommend({
  handleRefuseModal,
  handleProposalModal,
  handleModalFor,
}: Props) {
  return (
    <div className="flex flex-col w-11/12 h-full">
      <p className="font-semibold w-full text-center my-5">추천 친구</p>
      <div className="w-full flex justify-center h-3/4 px-4 items-center">
        {/* <div className="w-1/12 flex justify-center items-center">
          <FontAwesomeIcon icon={faChevronLeft} className="cursor-pointer" />
        </div> */}
        <Carousel className="max-w-2xl w-11/12" showThumbs={false} showStatus={false}>
          <div className="slide">
            <FriendsCard
              handleRefuseModal={handleRefuseModal}
              handleProposalModal={handleProposalModal}
              handleModalFor={handleModalFor}
            />
          </div>
          <div className="slide">
            <FriendsCard
              handleRefuseModal={handleRefuseModal}
              handleProposalModal={handleProposalModal}
              handleModalFor={handleModalFor}
            />
          </div>
          {/* <div className="slide">
            <FriendsCard />
          </div> */}
        </Carousel>
        {/* <div className="w-1/12 flex justify-center items-center">
          <FontAwesomeIcon icon={faChevronRight} className="cursor-pointer" />
        </div> */}
      </div>
      {/* <div className="flex justify-center mt-8 gap-8">
        <FriendBtn
          icon={<FontAwesomeIcon icon={faHeart} />}
          text={"친구 신청"}
          logic={handleProposalModal}
        />
        <FriendBtn
          icon={<FontAwesomeIcon icon={faHeartCrack} />}
          text={"친구 거절"}
          logic={handleRefuseModal}
        />
      </div> */}
    </div>
  );
}
