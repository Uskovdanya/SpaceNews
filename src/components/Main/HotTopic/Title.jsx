function Title({ children, font, id, smFont }) {
  return (
    <div
      id={id}
      className={`font-Roboto font-bold text-textColor ${font} ${smFont} mb-6 mt-2 md:mt-[30px] lg:mt-[56px] `}
    >
      {children}
    </div>
  );
}
export default Title;
