import clsx from "clsx";
import JoinWaitList from "../JoinWaitList";

interface Props {
  className?: string;
  text: string;
}

const ScrollText: React.FC<Props> = ({ className, text }) => {
  return (
    <div className={clsx(className, "h-[160vh] relative pb-4")}>
      <div className="sticky top-4">
        <p
          className="md:text-7xl text-3xl font-poppins font-semibold md:leading-[1.375] leading-[1.375] text-justify"
          style={{ color: "#D9D9D9" }}
        >
          {text}
        </p>

        <div className="text-center md:mt-40 mt-20">
          <JoinWaitList className="mb-5" />

          <p>Don't worry, we will not share anything with your network</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollText;
