import { Question } from '../types';

export const questions: Question[] = [
  // QUIZ – ANATOMIA APLICADA À ODONTOLOGIA
  {
    id: 1,
    category: 'Anatomia Aplicada à Odontologia',
    text: "De acordo com o material, como devem estar posicionados os membros superiores e a face na 'Posição Anatômica' padrão?",
    options: [
      { id: 'a', text: 'A. Face voltada para frente e palmas das mãos voltadas para frente.', isCorrect: true },
      { id: 'b', text: 'B. Face voltada para frente e palmas das mãos voltadas para o corpo.', isCorrect: false },
      { id: 'c', text: 'C. Face voltada para o horizonte e membros superiores cruzados sobre o tórax.', isCorrect: false },
      { id: 'd', text: 'D. Face voltada para baixo (plano podálico) e mãos em posição neutra.', isCorrect: false },
    ],
  },
  {
    id: 2,
    category: 'Anatomia Aplicada à Odontologia',
    text: "O material cita o 'Lábio leporino' e a 'Fenda palatina' como exemplos de qual conceito anatômico?",
    options: [
      { id: 'a', text: 'A. Normalidade Estatística', isCorrect: false },
      { id: 'b', text: 'B. Anomalia', isCorrect: true },
      { id: 'c', text: 'C. Variação Anatômica', isCorrect: false },
      { id: 'd', text: 'D. Nomenclatura Latina', isCorrect: false },
    ],
  },
  {
    id: 3,
    category: 'Anatomia Aplicada à Odontologia',
    text: "Qual plano de secção divide a cabeça e o pescoço exatamente em metades direita e esquerda?",
    options: [
      { id: 'a', text: 'A. Plano Sagital Mediano', isCorrect: true },
      { id: 'b', text: 'B. Plano Dorsal', isCorrect: false },
      { id: 'c', text: 'C. Plano Transversal ou Horizontal', isCorrect: false },
      { id: 'd', text: 'D. Plano Frontal ou Coronal', isCorrect: false },
    ],
  },
  {
    id: 4,
    category: 'Anatomia Aplicada à Odontologia',
    text: "No estudo dos membros superiores, como o 'braço' é classificado em relação ao 'antebraço'?",
    options: [
      { id: 'a', text: 'A. O braço é lateral em relação ao antebraço.', isCorrect: false },
      { id: 'b', text: 'B. O braço é distal em relação ao antebraço.', isCorrect: false },
      { id: 'c', text: 'C. O braço é profundo em relação ao antebraço.', isCorrect: false },
      { id: 'd', text: 'D. O braço é proximal em relação ao antebraço.', isCorrect: true },
    ],
  },
  {
    id: 5,
    category: 'Anatomia Aplicada à Odontologia',
    text: "Quais são as abreviaturas corretas para 'artéria' e 'nervos' (plural)?",
    options: [
      { id: 'a', text: 'A. a. e nn.', isCorrect: true },
      { id: 'b', text: 'B. aa. e n.', isCorrect: false },
      { id: 'c', text: 'C. vv. e mm.', isCorrect: false },
      { id: 'd', text: 'D. art. e n.', isCorrect: false },
    ],
  },
  {
    id: 6,
    category: 'Anatomia Aplicada à Odontologia',
    text: "O que são as 'fontanelas'?",
    options: [
      { id: 'a', text: 'A. Ossos extras localizados na base do crânio.', isCorrect: false },
      { id: 'b', text: 'B. Espaços membranosos que separam os ossos do crânio em recém-nascidos.', isCorrect: true },
      { id: 'c', text: 'C. Terminações nervosas que inervam os dentes superiores.', isCorrect: false },
      { id: 'd', text: 'D. Músculos responsáveis pela mastigação.', isCorrect: false },
    ],
  },
  {
    id: 7,
    category: 'Anatomia Aplicada à Odontologia',
    text: "Em relação à face, como as orelhas são posicionadas comparativamente ao nariz?",
    options: [
      { id: 'a', text: 'A. As orelhas são laterais ao nariz.', isCorrect: true },
      { id: 'b', text: 'B. As orelhas são profundas ao nariz.', isCorrect: false },
      { id: 'c', text: 'C. As orelhas são mediais ao nariz.', isCorrect: false },
      { id: 'd', text: 'D. As orelhas são inferiores ao nariz.', isCorrect: false },
    ],
  },
  {
    id: 8,
    category: 'Anatomia Aplicada à Odontologia',
    text: "Qual a subdivisão mais abundante do Líquido Extracelular (LEC)?",
    options: [
      { id: 'a', text: 'A. Líquido Cefalorraquidiano', isCorrect: false },
      { id: 'b', text: 'B. Líquido Intersticial (80% do LEC)', isCorrect: true },
      { id: 'c', text: 'C. Líquido Intracelular (LIC)', isCorrect: false },
      { id: 'd', text: 'D. Plasma (20% do LEC)', isCorrect: false },
    ],
  },
  {
    id: 9,
    category: 'Anatomia Aplicada à Odontologia',
    text: "Qual processo ocorre quando a água se move a favor do seu gradiente de concentração?",
    options: [
      { id: 'a', text: 'A. Bomba de Sódio e Potássio', isCorrect: false },
      { id: 'b', text: 'B. Endocitose', isCorrect: false },
      { id: 'c', text: 'C. Osmose', isCorrect: true },
      { id: 'd', text: 'D. Transporte Ativo', isCorrect: false },
    ],
  },
  {
    id: 10,
    category: 'Anatomia Aplicada à Odontologia',
    text: "O termo 'Cranial' é sinônimo de qual direção anatômica?",
    options: [
      { id: 'a', text: 'A. Proximal', isCorrect: false },
      { id: 'b', text: 'B. Superior', isCorrect: true },
      { id: 'c', text: 'C. Ventral', isCorrect: false },
      { id: 'd', text: 'D. Inferior', isCorrect: false },
    ],
  },
  // QUIZ – OSTEOLOGIA DOS MEMBROS INFERIORES
  {
    id: 11,
    category: 'Osteologia dos Membros Inferiores',
    text: "O osso do quadril (osso coxal) é formado pela fusão de três ossos durante o desenvolvimento. Quais são os dois ossos dessa lista que fazem parte dessa composição?",
    options: [
      { id: 'a', text: 'A. Fêmur e Patela', isCorrect: false },
      { id: 'b', text: 'B. Ílio e Ísquio', isCorrect: true },
      { id: 'c', text: 'C. Tíbia e Fíbula', isCorrect: false },
      { id: 'd', text: 'D. Sacro e Ílio', isCorrect: false },
    ],
  },
  {
    id: 12,
    category: 'Osteologia dos Membros Inferiores',
    text: "Qual é o maior e mais resistente osso do corpo humano, localizado na região da coxa?",
    options: [
      { id: 'a', text: 'A. Tíbia', isCorrect: false },
      { id: 'b', text: 'B. Fíbula', isCorrect: false },
      { id: 'c', text: 'C. Fêmur', isCorrect: true },
      { id: 'd', text: 'D. Sacro', isCorrect: false },
    ],
  },
  {
    id: 13,
    category: 'Osteologia dos Membros Inferiores',
    text: "A patela é classificada anatomicamente como um osso:",
    options: [
      { id: 'a', text: 'A. Longo', isCorrect: false },
      { id: 'b', text: 'B. Plano', isCorrect: false },
      { id: 'c', text: 'C. Sesamóide (desenvolve-se dentro de um tendão)', isCorrect: true },
      { id: 'd', text: 'D. Irregular', isCorrect: false },
    ],
  },
  {
    id: 14,
    category: 'Osteologia dos Membros Inferiores',
    text: "Na região da canela, encontramos dois ossos paralelos. Qual deles é o mais robusto, localizado medialmente e responsável por suportar a maior parte do peso corporal?",
    options: [
      { id: 'a', text: 'A. Fíbula', isCorrect: false },
      { id: 'b', text: 'B. Fêmur', isCorrect: false },
      { id: 'c', text: 'C. Tíbia', isCorrect: true },
      { id: 'd', text: 'D. Ísquio', isCorrect: false },
    ],
  },
  {
    id: 15,
    category: 'Osteologia dos Membros Inferiores',
    text: "O osso que se localiza na base da coluna vertebral e se articula com os ossos do quadril para fechar a cintura pélvica é o:",
    options: [
      { id: 'a', text: 'A. Sacro', isCorrect: true },
      { id: 'b', text: 'B. Ísquio', isCorrect: false },
      { id: 'c', text: 'C. Tarso', isCorrect: false },
      { id: 'd', text: 'D. Ílio', isCorrect: false },
    ],
  },
  {
    id: 16,
    category: 'Osteologia dos Membros Inferiores',
    text: "Quando estamos sentados, o peso do corpo repousa principalmente sobre qual destas estruturas?",
    options: [
      { id: 'a', text: 'A. Tuberosidade isquiática (Ísquio)', isCorrect: true },
      { id: 'b', text: 'B. Crista ilíaca (Ílio)', isCorrect: false },
      { id: 'c', text: 'C. Patela', isCorrect: false },
      { id: 'd', text: 'D. Talus (Tarso)', isCorrect: false },
    ],
  },
  {
    id: 17,
    category: 'Osteologia dos Membros Inferiores',
    text: "Os ossos que formam o esqueleto do 'tornozelo' e a parte posterior do pé são coletivamente chamados de:",
    options: [
      { id: 'a', text: 'A. Carpo', isCorrect: false },
      { id: 'b', text: 'B. Tarso', isCorrect: true },
      { id: 'c', text: 'C. Metatarso', isCorrect: false },
      { id: 'd', text: 'D. Falanges', isCorrect: false },
    ],
  },
  {
    id: 18,
    category: 'Osteologia dos Membros Inferiores',
    text: "Sobre a Fíbula, é correto afirmar que:",
    options: [
      { id: 'a', text: 'A. É o osso medial da perna.', isCorrect: false },
      { id: 'b', text: 'B. Articula-se diretamente com o fêmur no joelho.', isCorrect: false },
      { id: 'c', text: 'C. É um osso lateral e mais delgado, importante para fixação muscular.', isCorrect: true },
      { id: 'd', text: 'D. É o osso que forma o calcanhar.', isCorrect: false },
    ],
  },
  {
    id: 19,
    category: 'Osteologia dos Membros Inferiores',
    text: "Assim como nos dedos das mãos, os dedos dos pés (exceto o hálux) possuem três ossos cada. Como eles são chamados?",
    options: [
      { id: 'a', text: 'A. Falange proximal, média e distal', isCorrect: true },
      { id: 'b', text: 'B. Tarso superior, médio e inferior', isCorrect: false },
      { id: 'c', text: 'C. Metatarsos primários', isCorrect: false },
      { id: 'd', text: 'D. Ossos sesamóides do pé', isCorrect: false },
    ],
  },
  {
    id: 20,
    category: 'Osteologia dos Membros Inferiores',
    text: "O termo 'malleolus lateral' (maléolo lateral), aquela proeminência óssea no lado externo do tornozelo, pertence a qual osso?",
    options: [
      { id: 'a', text: 'A. Tíbia', isCorrect: false },
      { id: 'b', text: 'B. Fíbula', isCorrect: true },
      { id: 'c', text: 'C. Fêmur', isCorrect: false },
      { id: 'd', text: 'D. Sacro', isCorrect: false },
    ],
  },
];
