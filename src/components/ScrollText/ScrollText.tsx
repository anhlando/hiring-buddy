interface Props {
  className?: string;
  text: string;
}

const ScrollText: React.FC<Props> = ({ className, text }) => {
  return <div className={`${className} h-screen`}>{text}</div>;
};

export default ScrollText;
