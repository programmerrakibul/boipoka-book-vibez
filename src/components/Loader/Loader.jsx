import { cn } from "@/utils/cn";
import { ScaleLoader } from "react-spinners";

const Loader = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "w-full h-dvh flex justify-center items-center relative",
        className,
      )}
      {...props}
    >
      <ScaleLoader />
    </div>
  );
};

export default Loader;
