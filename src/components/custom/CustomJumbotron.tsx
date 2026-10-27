interface Props {
  title: string;
  description?: string;
}

export const CustomJumbotron = ({ title, description }: Props) => {
  return (
    <section className="hero-intro">
      <div>
        <p className="section-kicker">
          <span /> REACT HEROES / 2026
        </p>
        <h1>
          {title}
          <br />
          <em>Universo.</em>
        </h1>
        {description && <p className="intro-copy">{description}</p>}
      </div>
    </section>
  );
};
