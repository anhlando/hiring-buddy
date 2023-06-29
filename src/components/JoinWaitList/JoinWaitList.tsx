import clsx from "clsx";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

interface Props {
  className?: string;
}

const JoinWaitList: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className)}>
      <button
        className={clsx(
          `transition inline-flex justify-center items-center text-white text-sm py-3 px-8 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-[25.04px] hover:from-[#0500FF] hover:to-[#0500FF]`,
        )}
      >
        <span className="mr-5 font-montserrat">Join waitlist!</span>
        <ChevronRightIcon className="text-white w-6 h-6" />
      </button>
    </div>
  );
};

export default JoinWaitList;
