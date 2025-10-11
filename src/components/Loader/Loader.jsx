import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-dvh flex justify-center items-center relative">
      <ScaleLoader />
    </div>
  );
};

export default Loader;
