type Props = {
  mbti: string;
  handlePickedMbti(i: any): void;
  pickedMbti: string;
};

// 여기서 mbti 카드 디자인
export default function MbtiItem({
  mbti,
  handlePickedMbti,
  pickedMbti,
}: Props) {
  const cn = () => {
    if (mbti === pickedMbti)
      return "flex justify-center items-center border-solid border-2 rounded-lg h-12 cursor-pointer bg-slate-400";
    return "flex justify-center items-center border-solid border-2 rounded-lg h-12 cursor-pointer hover:bg-slate-400";
  };

  return (
    <div id={mbti} className={cn()} onClick={(e) => handlePickedMbti(e)}>
      {mbti}
    </div>
  );
}
