import clsx from "clsx";
import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface Props {
  className?: string;
}

const JoinWaitList: React.FC<Props> = ({ className }) => {
  return (
    <button
      className={clsx(
        `inline-flex justify-center items-center bg-primary text-white text-sm py-3 px-8 rounded-full`,
        className
      )}
    >
      <span className="mr-5">Join WaitList</span>
      <ChevronRightIcon className="text-white w-6 h-6" />
    </button>
  );
};

export default JoinWaitList;
