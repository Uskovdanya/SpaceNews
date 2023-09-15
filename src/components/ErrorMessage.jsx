function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span className="flex justify-center items-center">News not found</span>
      {message}
    </p>
  );
}

export default ErrorMessage;
