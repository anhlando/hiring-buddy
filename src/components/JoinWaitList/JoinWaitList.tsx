import clsx from "clsx";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface Props {
  className?: string;
}

const JoinWaitList: React.FC<Props> = ({ className }) => {
  return (
    <button
      className={clsx(
        `inline-flex justify-center items-center text-white text-sm py-3 px-8 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-[25.04px]`,
        className
      )}
    >
      <span className="mr-5">Join WaitList</span>
      <ChevronRightIcon className="text-white w-6 h-6" />
    </button>
  );
};

export default JoinWaitList;
