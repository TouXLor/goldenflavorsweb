export function Marquee() {
  const group = (
    <span className="marquee__group">
      {[
        "CRISPY KOREAN CORNDOGS",
        "GIANT SUSHI BURRITOS",
        "FRESH ASIAN FUSION",
      ].map((t) => (
        <span key={t}>
          {t}
          <i aria-hidden="true">•</i>
        </span>
      ))}
    </span>
  );

  return (
    <div className="marquee dark" aria-hidden="true">
      <div className="marquee__track">
        {group}
        {group}
        {group}
        {group}
      </div>
    </div>
  );
}
