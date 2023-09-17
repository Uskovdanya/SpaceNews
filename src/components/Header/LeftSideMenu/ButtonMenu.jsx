function Button({ children }) {
  return (
    <>
      <button className="w-[56px] rounded p-2 font-Playfair font-bold hover:bg-textColor hover:text-textWhite ">
        {children}
      </button>
    </>
  );
}

export default Button;
