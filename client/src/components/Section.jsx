const Section = ({ children, title }) => {
  return (
    <section>
      <div className="py-4 text-center uppercase text-xl">{title}</div>
      {children}
    </section>
  );
};

export default Section;
