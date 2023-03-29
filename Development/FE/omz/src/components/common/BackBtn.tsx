import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
type Props = {
  goBack?(): void;
};

export default function BackBtn({ goBack }: Props) {
  return (
    <div
      onClick={goBack}
      className="text-black w-full h-full flex justify-center items-center text-xl hover:text-purple-600 cursor-pointer"
      // className="bg-black text-white w-full h-full flex justify-center items-center rounded-xl"
    >
      <p className="title pr-3">Main</p>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
}
