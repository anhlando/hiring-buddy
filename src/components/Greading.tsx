import { useState } from "react";

interface Props {
  className?: string;
}

const Greading: React.FC<Props> = (props) => {
  // state number
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      hello world
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Greading;
