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
    "What is your defining characteristic?",
    "What's the most pain you've ever been in that wasn't physical?",
    "How are you, really?",
    "What is the last thing your mom has lied to you about?",
    "What's your father's name and one thing about him?",
    "What have I tolerated from people in the past that I no longer have space for?",
    "Something that brought a smile to my face this week was ___.",
    "What are you feeling a lot of lately?",
    "What do you need right now but aren't communicating?",
    "What are you currently working through that others don't see?",
    "What was the biggest turning point in your dating life?",
    "What is your heart telling you?",
    "What is your most toxic trait you can admit to?",
    "Who in your life deserves the biggest thank you? Let them know if you can.",
    "What are you overthinking right now?",
    "What did you last relationship teach you about yourself?",
    "What belief about yourself no longer serves you?",
    "What do you need to forgive yourself for?",
    "What's the hardest lesson you've learned in love?",
    "You hurt me, but thank you for ___.",
    "Who in your life can you be your most vulnerable with?",
    "Which one of your parent's personality traits do you want to keep/let go of?",
    "Dear younger self: ____.",
    "Think of someone you admire. Why did this person come to mind?",
    "Are you lying to yourself about anything?",
    "What's your favorite part of yourself that isn't physical?",
    "What's the hardest part about dating you?",
    "I feel loved when ___.",
    "What is something you've learned about yourself this week?",
    "Self love is ___.",
    "What was the lesson in your most recent painful experience?",
    "I know I'm in love when ___.",
    "What's your favorite song lyric you can think of off the top of your head?",
    "How did you get over your first love?",
    "What's the best lesson an ex has ever taught you?",
    "Is there anyone who's changed your life but doesn't know it?",
    "What do you need right now, more than anything?",
    "When was the last time you felt lucky to be you?",
    "What do you need to accept today?",
    "When was the last time you felt most yourself?",
    "What's your mother's name and the most valuable lesson she's taught you thus far?",
    "What are you most grateful for in this current moment?",
    "What are you still trying to prove to yourself?",
    "What have you been taking for granted lately?",
    "Is there a feeling you miss?",
    "What would your younger self not believe about your life today?",
    "If you could have it your way: Who would you be with? Where would you be? And what would you be doing?",
    "What do you need to hear right now?",
    "What title would you give this chapter in your life?",
    "What dating advice would you give your younger self?",
    "What lesson should you have learned by now?",
    "When was the last time you were able to use your pain to help someone else?",
    "What would you never want to change about yourself?",
    "What question did this year leave you with?",
    "What about yourself is hardest to admit?",
    "What question are you trying to answer most in your life right now?",
    "Finish the sentences: strangers would describe me as _____. Only I know that I am ______",
    "When you're asked how are you, how often do you answer truthfully?",
    "Has a stranger ever changed your life?",
    "What is the most unexplainable thing that's ever happened to you?",
    "Describe your perfect day!",
    "Have you changed your mind about anything recently?",
    "What's been the best compliment a stranger has ever given you?",
    "What is a compliment you wish you received more frequently?",
    "What do you crave more of?",
    "What has been your earliest recollection of happiness?",
    "What are you more afraid of, failure or success? And why?",
    "How would you describe the feeling of being in love in one word?",
    "When was the last time you surprised yourself?",
    "What's been your happiest memory this past year?",
    "Do you think the image you have of yourself matches the image people see you as?",
    "If you have, when was the moment you realized you weren't invincible?",
    "What lesson took you the longest to unlearn?",
    "What part of your life works? What part of your life hurts?",
    "What is your 1st love's name and the reason you fell in love with him/her?",
    "What's your mother's name? And the most beautiful thing about her?",
    "If you could get to know someone in your life on a deeper level, who would it be and why?",
    "Are you missing anyone right now? Do you think they are missing you too?",
    "What is a dream you've let go of?",
    "What is the last thing you lied to your mother about?",
    "Have you ever told someone I love you but didn't mean it? if so, why?",
    "How can you become a better person?",
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
