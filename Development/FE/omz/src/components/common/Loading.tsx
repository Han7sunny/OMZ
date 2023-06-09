import { images } from "../../assets/images";
export default function Loading() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <img src={images.loading} alt="" className="" />

      <div>
        <p className="title text-lg font-bold">Loading...</p>
      </div>
    </div>
  );
}
