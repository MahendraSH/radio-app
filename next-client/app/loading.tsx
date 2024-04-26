import { Loader } from "lucide-react";
import { FC } from "react";

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <Loader className=" size-16   animate-spin" />
    </div>
  );
};

export default Loading;
