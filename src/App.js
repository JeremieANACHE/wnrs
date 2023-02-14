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
    "What can I help you with?",
    "Why do you think we met?",
    "What about me surprised you?",
    "In a word, how would you describe our conversation?",
    "What do you think my strength is?",
    "What can I teach you?",
    "Based on what you've learned about me, do you have any Netflix recommendations?",
    "Who do I remind you of?",
    "What can you be kinder towards yourself for today?",
    "What's one small thing you can do to be a better person in 2019?",
    "What can we create together?",
    "How would you describe me to a stranger?",
    "What about me most surprised you?",
    "What would be the perfect gift for me?",
    "What do you admire most about me?",
    "Based on what you learned about me, what book would you recommend I read?",
    "What about me is hardest for you to understand?",
    "What am I most qualified to give advice about?",
    "What is one thing you think I can do that would dramatically improve my life?",
    "If we were in a band, what would our name be?",
    "Based on what you learned about me, does my social media accurately reflect who I am? Why or why not?",
    "What do I need to hear right now?",
    "Based on what you know about me, do you have any netflix recommendations?",
    "What do you think my superpower is?",
    "What is a lesson you will take away from our conversation?",
    "When in this game did you feel most connected to me?",
    "How does one earn your vulnerability? Have I earned it? How can I earn more?",
    "What do you think our most important similarity is?",
    "In one word, how would you describe our conversation?",
    "What answer of mine made you light up?",
    "When this game is over, what will you remember about me?",
    "What question were you most afraid to answer?",
    "What parts of yourself do you see in me?",
    "How do our personalities complement each other?",
    "What do you think my weakness is?",
    "What would make you feel closer to me?",
    "What do you think I fear the most?",
    "What has this conversation taught you about yourself?",
    "What do you think I should know about myself that perhaps I'm unaware of?",
    "What do you think my defining characterisitic is?",
    "Do you believe everyone has a calling? If so, do you think I've found mine?",
    "What do you recommend I let go of, if anything?",
    "In one word, describe how you feel right now",
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
      const finalMessage = "You have finished this level!";
      setCurrCard(finalMessage);
    } else {
      setCurrCard(gameState[newLevel][0]);
    }
  }

  function handleNextCard() {
    const finalMessage = "You have finished this level!";
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
        <div className="credits-title">how & who</div>{" "}
        <div className="cont">
          <b>How to play:</b> <br />
          Progress from level to level. Become more than strangers, one card at
          a time.
          <p>Refresh to reset card decks.</p>{" "}
          <p>
            Made by <a href="https://github.com/munjoonteo">@munjoonteo</a> and{" "}
            <a href="https://github.com/ilyues">@ilyues</a>, inspired by the
            need to virtually play{" "}
            <a href="https://www.werenotreallystrangers.com/">WNRS</a>.
          </p>
        </div>
      </div>
      <div className="levels">{buttons}</div>
      <div className="question">
        <div className="title">we're not really strangers</div>
        <Card styleName="big-card" question={currCard} />
        <button className="next-card-button" onClick={() => handleNextCard()}>
          next card
        </button>
      </div>
      <div className="history">
        <div className="history-title">previous cards</div>
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
