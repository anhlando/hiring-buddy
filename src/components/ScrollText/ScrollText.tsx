import clsx from "clsx";
import JoinWaitList from "../JoinWaitList";

interface Props {
  className?: string;
  text: string;
}

const ScrollText: React.FC<Props> = ({ className, text }) => {
  return (
    <div className={clsx(className, "h-screen")}>
      <p
        className="text-7xl font-poppins font-semibold leading-snug text-justify"
        style={{ color: "#D9D9D9" }}
      >
        {text}
      </p>

      <div className="text-center mt-40">
        <JoinWaitList className="mb-5" />

        <p>Don't worry, we will not share anything with your network</p>
      </div>
    </div>
  );
};

export default ScrollText;
