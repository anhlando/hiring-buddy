import clsx from "clsx";
import right from "../../assets/right.svg";

interface Props {
  className?: string;
}

const JoinWaitList: React.FC<Props> = ({ className }) => {
  return (
    <button
      className={clsx(`inline-flex justify-center items-center bg-primary text-white py-3 px-8 rounded-full`, className)}
    >
      <span className="mr-5">Join WaitList</span>
      <img
        className="inline-block"
        src={right.src}
        alt="right"
        width={right.width}
        height={right.height}
      />
    </button>
  );
};

export default JoinWaitList;
