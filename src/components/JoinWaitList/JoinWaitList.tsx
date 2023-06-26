import clsx from "clsx";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
};

export default JoinWaitList;
