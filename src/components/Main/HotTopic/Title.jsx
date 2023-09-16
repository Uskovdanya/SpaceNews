function Title({ children, font, id, smFont }) {
  return (
    <div
      id={id}
      className={`font-bold text-textColor font-Roboto ${font} ${smFont} mt-2 md:mt-[30px] lg:mt-[56px] mb-6 `}
    >
      {children}
    </div>
  );
}
export default Title;
