function Button({ children }) {
  return (
    <>
      <button className="w-[56px] p-2 rounded font-Playfair font-bold hover:bg-textColor hover:text-textWhite">
        {children}
      </button>
    </>
  );
}

export default Button;
