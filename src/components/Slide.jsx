const Slide = ({ title, subtitle, children }) => {
  return (
    <section className="slide">
      <div className="slide-content">
        {title && (
          <div className="slide-header">
            <h1>{title}</h1>

            {subtitle && (
              <p>{subtitle}</p>
            )}
          </div>
        )}

        <div className="slide-body">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Slide;