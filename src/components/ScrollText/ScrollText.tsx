interface Props {
  className?: string;
  text: string;
}

const ScrollText: React.FC<Props> = ({ className, text }) => {
  return (
    <div className={`${className} h-screen`}>
      <p className="text-7xl font-poppins font-semibold leading-snug text-justify">{text}</p>
    </div>
  );
};

export default ScrollText;
