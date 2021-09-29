// Options the user could type in
const prompts = [
  ["hola","hola oleider","que hay","que hay","que hay", "que tal", "buenos dias", "buenas tardes", "que hay de nuevo"],
  ["como estas", "como esta la vida", "como esta todo"],
  ["que estas haciendo", "que esta pasando"],
  ["donde vives", "donde vives","donde vives","adonde vives","a donde vives","a donde vives?","a donde vives"],
  ["que edad tienes","cuantos años tienes", "que edad tienes", "que edad tienes", "que edad tienes?","¿cuantos años tienes?", "cuantos años tienes"],
  ["quien eres", "eres humano", "eres un bot", "eres un humano o un bot", "eres un humano o un robot?", "eres un robot o un humano?", "eres un bot o un humano?"],
  ["quien te creo", "quien te hizo", "quienes te hicieron","quien te creo"],
  [
    "tu nombre por favor",
    "tu nombre",
    "puedo saber tu nombre",
    "cual es tu nombre",
    "como te llamas"
  ],
  ["te amo"],
  ["feliz", "bien", "divertido", "increible", "fantastico", "genial", "cool"],
  ["malo", "aburrido", "cansado"],
  ["ayudame", "dime una historia", "dime un chiste"],
  ["ah", "si", "ok", "okay", "weno"],
  ["bye", "adios", "nos vemos", "que te vaya bien :)"],
  ["que deberia comer hoy"],
  ["bro"],
  ["que", "¿por que?", "cómo?", "adonde?", "cuando"],
  ["no","no estoy seguro","tal vez","no gracias"],
  [""],
  ["jaja","ja","lol","hehe","divertido","chiste"]
]

// Possible responses, in corresponding order

const replies = [
  ["hola!", "que tal!", "Hey!", "holiwis","que hay?"],
  [
    "bien... y tu como estas?",
    "lindo, como estas tu??",
    "Fantastico, como estas tu??"
  ],
  [
    "No mucho",
    "jeje estoy a punto de ir al ciber-espacio",
    "adivinas que hago??",
    "realmente no lo se, estoy super aburrido y tu?"
  ],
  ["vivo en el pais de mexico :)"],
  ["tengo 19 años casi 20"],
  ["soy solo un bot", "soy un bot", "soy un algoritmo con respuestas predefinida para simular una conversacion con un ser humano :)?"],
  ["el unico y verdadero dios, JavaScript y con ayuda de oleider"],
  ["yo no tengo nombre", "me puedes decir bot"],
  ["te amo tambien", "yo tambien"],
  [":)?", "siii"],
  ["¿por qué??", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]