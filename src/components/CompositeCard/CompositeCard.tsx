import "./CompositeCard.css";

function RenderPieces({ pieces }: { pieces?: string[] }) {
  pieces = pieces || [
    `${process.env.PUBLIC_URL}/cards/composite/Cards_Carnage_09_Carnage+-+Dan+Hipp_Background_01.webp`,
    `${process.env.PUBLIC_URL}/cards/composite/Cards_Carnage_09_Carnage+-+Dan+Hipp_Background_02.webp`,
    `${process.env.PUBLIC_URL}/cards/composite/Carnage_09_Carnage_09_ForegroundScreen.webp`,
    `${process.env.PUBLIC_URL}/cards/composite/Carnage_09_Carnage_09_Foreground.webp`,
    `${process.env.PUBLIC_URL}/cards/composite/Carnage_Carnage_Logo.webp`,
  ];

  return (
    <div className="card">
    {
      pieces.map((piece) => (
        <img
          className="card-piece"
          src={piece}
          loading="lazy"
          key={piece}
          alt=""
        />
      ))
    }
    </div>
  )
}

function CompositeCard() {
  return (
    <div className="card-container">
      <RenderPieces />
    </div>
  );
}

export default CompositeCard;
