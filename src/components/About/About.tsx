import "./About.scss"

export const About= () => {
    return (
      <>
<div className="about-wrapper">
    <h2>Hur man spelar:</h2>
    <ol>
        <li>Lägg till ditt namn eller välj ditt namn i listan om du har spelat tidigare.</li>
        <li>Välj din pokemon som du vill ska utvecklas bland 5 stycken slumpmässiga.</li>
        <li>Välj räknesätt och nivå.</li>
        <li>Om du klarar spelet utvecklas din pokemon; annars kan du försöka igen.</li>
        <li>Alla pokemon som utvecklas sparas i din samling. Om du klickar på pokebollen uppe i högra hörnet kan du besöka dessa.</li>
    </ol>
    <h2>Om Mattemons:</h2>
    <p>Mattemons är ett mattespel där man ska få sin pokemon att utvecklas genom att klara den valda nivån. Denna applikation är ett examensarbete skapat av Anna Boye,
        som studerar Frontend Developer på Medieinstitutet.
        PokeAPI används för att hämta pokemondata.</p>
</div>

      </>
    );
  };