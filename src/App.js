import React from "react";
import Card from "./Card";
import "./App.css";

function App() {
  let levelOne = [
    "Quelle était ta première impression de moi ?",
    "selon toi, quelle est la partie la plus difficile dans mon travail ?",
    "Selon toi, quelle télé-réalité suis-je le plus susceptible de binge-watcher ? expliquer",
    "J'ai l’air d’une personne à chien ou à chats ?",
    "Que disent mes chaussures sur moi ?",
    "J'ai l'air d'être plutôt de type créatif ou analytique ? expliquer",
    "Combien penses-tu que j'ai reçu d'amendes pour excès de vitesse ?",
    "Est-ce que j'ai l'air de quelqu'un qui se tatouerait un nom ?",
    "Sur quoi suis-je susceptible de faire des folies selon toi ?",
    "Finir cette phrase: juste en te regardant, je pense _________.",
    "Quel personnage est-ce que je jouerais dans un film ?",
    "Est-ce que je te fais penser à quelqu'un que tu connais ?",
    "Sur quelle célébrité penses-tu que j'ai un crush?",
    "Penses-tu que j'ai déjà fouillé le téléphone d'un(e) ex pour trouver des preuves ?",
    "Quelle est la première chose que tu aies remarqué à mon sujet ?",
    "Est-ce que j'ai l'air d'une personne a thé ou café ? sucré ou non ?",
    "Quelle est ma chanson fétiche au karaoké selon toi ?",
    "Si tu devais m'offrir un cadeau en te basant uniquement sur mon apparence, sans rien savoir de moi, qu'est-ce que ce serait ?",
    "Que dit mon fond d'écran sur moi ?",
    "Est-ce que j'ai l'air gentil(le) ? expliquer",
    "Penses-tu que je tombe amoureux facilement ? pourquoi ?",
    "Que penses-tu que j'aurais voulu être quand j'étais enfant ?",
    "Penses-tu que je suis en avance, a l'heure ou en retard aux évènements ? expliquer",
    "Dans quelle matière penses-tu que je m'épanouissais a l'école ? Et les quelles étaient un cauchemar ?",
    "Quel compliment penses-tu que je reçois le plus ?",
    "Ai-je l'air d'un(e) lève-tôt ou couche tard ? pourquoi ?",
    "Quel est mon fast-food préféré selon toi ? Ma commande là bas ?",
    "Que dit mon langage corporel à cet instant ?",
    "Que dit mon instagram sur moi ?",
    "Selon toi, mes plantes meurent ou s'épanouissent ?",
    "Sur une échelle de 1 à 10, à quel point ma voiture est bordélique ? (1 = propre, 10 = désastre cataclysmique))",
    "Penses-tu que j'étais populaire a l'école ? expliquer",
    "Penses-tu que j'ai déjà été viré d'un travail ? Si oui, pour quel motif ?",
    "Penses-tu que j'intimide les autres ? pourquoi ?",
    "Quelle est la probabilité que j'aille camper ?",
    "Qu'est-ce qui est le plus étrange à mon sujet selon toi ?",
    "si MySpace existait toujours, quelle serait ma chanson de profil ?",
    "Qu'est-ce qui t'intrigue à mon sujet ?",
    "Que dit mon style sur moi ?",
    "Penses-tu qu'on m'ait déjà brisé le coeur ?",
    "Penses-tu que j'aie déjà été amoureux ?",
    "Quelle est la pire hypothèse que quelqu'un aie faite a ton sujet ?",
  ];

  let levelTwo = [
    "Quelle est la caractéristique qui te définit?",
    "Qu'est-ce qui a été le plus douloureux pour toi? (on ne parle pas de douleur physique)",
    "Comment te sens-tu, réellement ?",
    "Quelle est la dernière chose sur laquelle ta mère t'a menti ?",
    "Comment s'appelle ton père ? raconte-moi une chose sur lui",
    "Qu'ai-je toléré chez les autres par le passé que je ne souhaite plus laisser passer ?",
    "Ce qui m'a fait sourire cette semaine, c'est ___.",
    "Qu'est-ce que tu ressens souvent ces derniers temps ?",
    "De quoi as-tu besoin maintenant, mais que tu ne demandes pas ?",
    "Qu'es-tu en train de traverser en ce moment que les gens ne réalisent pas ?",
    "Quel a été le point le plus décisif dans tes rencards ?",
    "Que te dit ton coeur ?",
    "Quel est le trait le plus toxique de ta personnalité que tu veuilles bien reconnaître ?",
    "Qui dans ta vie mérite le plus tes remerciements ? Si tu le peux, dis-leur maintenant",
    "Sur quoi réfléchis-tu trop en ce moment ?",
    "Que dit sur toi ta dernière relation ?",
    "Quelle croyance à ton sujet te dessert ?",
    "Pour quoi dois-tu te pardonner ?",
    "Quelle a été la plus dure des leçons en amour pour toi ?",
    "Tu m'as fait du mal, mais merci pour ___.",
    "Avec qui dans ta vie peux-tu te permettre d'être le plus vulnérable ?",
    "Quels traits de personnalité de tes parents voudrais-tu garder / ne pas avoir ?",
    "Cher \"moi plus jeune\" : ____.",
    "Pense a une personne que tu admires. Pourquoi cette personne ?",
    "Te mens-tu à toi-même ?",
    "Qu'est-ce que tu préfères chez toi qui ne soit pas physique ?",
    "Qu'est-ce qui est le plus dur quand on est en couple avec toi ?",
    "Je me sens aimé quand ___.",
    "Qu'as-tu appris sur toi-même cette semaine ?",
    "S'aimer soi-même, c'est  ___.",
    "Quelle est la leçon à tirer de ton expérience douloureuse la plus récente ?",
    "Je sais que je suis amoureux quand ___.",
    "Si je te parle de tes paroles de chanson préférées, les quelles te viennent en tête immédiatement ?",
    "Comment as-tu surmonté ton premier amour ?",
    "Quelle est la leçon la plus précieuse qu'un(e) ex t'ait apprise ?",
    "Existe-t-il quelqu'un qui a changé ta vie mais l'ignore ?",
    "De quoi as-tu besoin maintenant plus que tout ?",
    "A quand remonte la dernière fois que tu as ressenti de la chance d'être toi-même ?",
    "Que dois-tu accepter aujourd'hui ?",
    "Quand était la dernière fois que tu t'es réellement senti(e) toi-même ?",
    "Comment s'appelle ta mère et quelle est la leçon la plus précieuse qu'elle t'aie donnée à ce jour ?",
    "Pour quoi es-tu le/la plus reconnaissant(e) à cet istant ?",
    "Qu'essaies-tu toujours de te prouver a toi-même ?",
    "Qu'as-tu considéré comme acquis ces derniers temps ?",
    "Y a-t-il un sentiment qui te manque ?",
    "Qu'est-ce que ton \"toi\" plus jeune ne croirait pas à propos de toi aujourd'hui ?",
    "Supposons que tout se passe comme tu veuilles : avec qui serais-tu ? où serais-tu ? et que ferais-tu ?",
    "Qu'as-tu besoin d'entendre maintenant ?",
    "Quel titre donnerais-tu à ce chapitre de ta vie ?",
    "Quel conseil dating donnerais-tu a ton \"toi\" plus jeune ?",
    "Quelle leçon aurais-tu du retenir ?",
    "À quand remonte la dernière fois que tu as utilisé ta douleur pour aider quelqu'un d'autre ?",
    "Que ne voudrais-tu jamais changer à ton sujet?",
    "Quelle question a soulevé cette année ?",
    "Qu'est-ce qui est le plus dur à admettre à ton sujet ?",
    "À quelle question essaie-tu le plus de répondre en ce moment ?",
    "Complète cette phrase : \"les inconnus me décrivent comme ______. Il n'y a que moi qui sais que je suis ______.\"",
    "Quand on te demande comment tu vas, à quelle fréquence réponds-tu honnêtement ?",
    "Est-ce qu'un inconnu a déjà changé ta vie ?",
    "Quelle est la chose la plus inexpliquable qui te soit arrivé ?",
    "Décris ta journée parfaite !",
    "As-tu changé d'avis à propos de quoi que ce soit récemment ?",
    "Quel a été le plus beau compliment qu'un inconu t'aie fait ?",
    "Quel compliment aimerais-tu recevoir plus souvent ?",
    "De quoi as-tu le plus envie ?",
    "Quel est ton premier souvenir de bonheur ?",
    "De quoi as-tu le plus peur: le succès ou l'échec ? pourquoi ?",
    "Comment résumerais-tu le fait d'être amoureux en un seul mot ?",
    "Quand est-ce qe tu t'es surpris(e) pour la dernière fois ?",
    "Quel est ton souvenir le plus heureux de cette année ?",
    "Penses-tu que l'image que tu as de toi-même coïncide avec celle que les gens ont de toi ?",
    "Si ça t'es déjà arrivé, quand as-tu réalisé que tu n'étais pas invincible ?",
    "Quelle leçon a été la plus difficile a \"désapprendre\" ?",
    "Quelle partie de ta vie fonctionne bien ? quelle partie est douloureuse ?",
    "Quel est le nom de ton premier amour ? Qu'est-ce qui a fait que tu es tombé(e) amoureux(se) de lui/elle ?",
    "Comment s'appelle ta mère ? Qu'est-ce qui est beau à son sujet ?",
    "Si tu pouvais connaître quelqu'un dans ta vie de façon plus connectée, qui est-ce que ce serait et pourquoi ?",
    "Est-ce que quelqu'un te manque ? Penses-tu que tu lui manques aussi ?",
    "Quel rêve as-tu laissé tomber ?",
    "Quelle est la dernière chose sur laquelle tu as menti à ta mère ??",
    "As-tu déjà dit \"Je t'aime\" à quelqu'un sans le penser réellement ? Si oui, pourquoi ?",
    "Comment pourrais-tu devenir une meilleure personne ?",
  ];
  
  let levelThree = [
    "Sur quoi puis-je t'aider ?",
    "Pourquoi penses-tu qu'on s'est rencontrés ?",
    "Qu'est-ce qui t'a surpris a mon sujet ?",
    "En un mot, comment décrirais-tu nos conversations ?",
    "Que penses-tu que soit ma force ?",
    "Qu'est-ce que je peux t'apprendre ?",
    "En te basant sur ce que tu sais de moi, est-ce que tu as des recommendations netflix ?",
    "À qui est-ce que je te fais penser ?",
    "Sur quoi peux-tu être plus sympa avec toi-même aujourd'hui ?",
    "Quelle petite chose peux-tu faire pour être une meilleure personne cette année ?",
    "Que peut-on créer ensemble ?",
    "Comment me décrirais-tu à un inconnu ?",
    "Qu'est-ce qui t'a le plus surpris a mon sujet ?",
    "Que serait le cadeau parfait pour moi ?",
    "Qu'est-ce que tu admires le plus chez moi ?",
    "En te basant sur ce que tu sais de moi, quel livre me recommanderais-tu de lire ?",
    "Qu'est-ce qui est le plus difficile à comprendre à mon sujet pour toi ?",
    "Sur quoi suis-je le plus qualifié pour conseiller quelqu'un ?",
    "Que penses-tu que je puisse faire pour améliorer significativement ma vie ?",
    "Si on était dans un groupe, comment il s'appellerait ?",
    "En te basant sur ce que tu sais de moi, est-ce que mes réseaux sociaux reflètent qui je suis ? pourquoi ?",
    "Qu'ai-je besoin d'entendre à cet instant ?",
    "Que penses-tu que soit mon super pouvoir ?",
    "Quelle leçon tireras-tu de notre conversation ?",
    "À quel moment de ce jeu as tu senti la plus forte connexion avec moi ?",
    "Comment mériter ta vulnérabilité ? L'ai-je méritée ? Comment puis-je la mériter encore plus ?",
    "Quel est notre point commun le plus important pour toi ?",
    "En un mot, comment décrirais-tu notre conversation ?",
    "Laquelle de mes réponses a illuminé ta journée ?",
    "Quand on aura terminé ce jeu, que retiendras-tu de moi ?",
    "À quelle question avais-tu le plus peur de répondre ?",
    "Quelle part de toi vois-tu en moi ?",
    "En quoi nos personnalités se complètent-elles ?",
    "Que penses-tu que sois ma faiblesse ?",
    "Qu'est-ce qui te ferait te sentir plus proche de moi ?",
    "De quoi penses-tu que j'aie le plus peur ?",
    "Qu'as-tu appris sur toi-même pendant cette conversation ?",
    "Que penses-tu que je devrais savoir sur moi-même que j'ignore peut-être ?",
    "Quelle est la caractéristique qui me définit selon toi?",
    "Crois-tu que chacun ait une vocation ? Si oui, penses-tu que j'aie trouvé la mienne ?",
    "Que devrais-je laisser tomber selon toi ?",
    "En un mot, décris comment tu te sens à cet instant",
  ];

  let levels = {
    levelOne: shuffle(levelOne),
    levelTwo: shuffle(levelTwo),
    levelThree: shuffle(levelThree),
  };

  const [gameState] = React.useState(levels);
  const [currLevel, setLevel] = React.useState(Object.keys(levels)[0]);
  const [currCard, setCurrCard] = React.useState(levels[currLevel][0]);
  const [cardHistory, setCardHistory] = React.useState([]);

  const buttons = Object.keys(levels).map((level) => (
    <button
      className={`level-button ${level === currLevel ? "selected-level" : ""}`}
      onClick={() => handleChangeLevel(level)}
      key={level}
    >
      {level.split(/(?=[A-Z])/).join(" ")}
    </button>
  ));

  function handleChangeLevel(newLevel) {
    setLevel(newLevel);
    if (gameState[newLevel].length === 1) {
      const finalMessage = "Vous avez terminé ce niveau!";
      setCurrCard(finalMessage);
    } else {
      setCurrCard(gameState[newLevel][0]);
    }
  }

  function handleNextCard() {
    const finalMessage = "Vous avez terminé ce niveau!";
    if (gameState[currLevel].length === 1) {
      if (currCard === finalMessage) {
        return;
      } else {
        const tempHistory = [currCard, ...cardHistory];
        setCardHistory(tempHistory);
        setCurrCard(finalMessage);
      }
    } else {
      const tempHistory = [currCard, ...cardHistory];
      setCardHistory(tempHistory);
      gameState[currLevel].shift();
      setCurrCard(gameState[currLevel][0]);
    }
  }

  return (
    <div className="App">
      <div className="credits">
        <div className="credits-title">Qui & quoi</div>{" "}
        <div className="cont">
          <b>Comment jouer:</b> <br />
          Progresser dans les niveaux, devenez plus que des inconnus, une carte à la fois.
          <p>Rafraîchir pour mélanger les cartes.</p>{" "}
          <p>
            Créé par <a href="https://github.com/munjoonteo">@munjoonteo</a> et{" "}
            <a href="https://github.com/ilyues">@ilyues</a>, inspiré par le beosin de jouer à {" "}
            <a href="https://www.werenotreallystrangers.com/">We're Not Really Strangers</a> en ligne.
          </p>
          <p>Traduit en français par <a href="https://github.com/JeremieANACHE">@JeremieANACHE</a></p>
        </div>
      </div>
      <div className="levels">{buttons}</div>
      <div className="question">
        <div className="title">On n'est pas vraiment des inconnus</div>
        <Card styleName="big-card" question={currCard} />
        <button className="next-card-button" onClick={() => handleNextCard()}>
          Carte suivante
        </button>
      </div>
      <div className="history">
        <div className="history-title">Cartes précédentes</div>
        <div className="card-container">
          <div className="card-container-scroll">
            {cardHistory.map((qn) => (
              <Card styleName="small-card" question={qn} key={qn} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default App;
