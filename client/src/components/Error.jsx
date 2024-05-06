const Error = ({ error = "😥 Error Occure" }) => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <p className="text-4xl font-extrabold">{error}</p>
    </div>
  );
};

export default Error;
