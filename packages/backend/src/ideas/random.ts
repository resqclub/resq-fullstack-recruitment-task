const features = [
  'offer posting',
  'purchasing food',
  'leaving reviews',
  'best of ResQ',
  'selling alcohol',
  'concourse CI',
  'the saturday rule for holidays',
  'ResQ time',
];

const statements = [
  '%f% should be %ga%',
  "I don't like the way %f% works",
  "Users don't understand %f%",
  'Many people find %f% to be %ba%',
  'In my opinion we should just remove %f% because it is %ba%',
  "I always hoped that %f% would be %ga%, but instead it's just %ba%",
  "I'll leave the company if we don't improve %f%, it's so %ba%",
  "Have you seen how Wolt handles %f%? It's way more %ga% than our version",
  'My opinion is probably invalid because I am a dog on the internet',
  'We should hook %f% up to ChatGPT',
  'What if %f% was on the blockchain?',
  'Honestly %f% just needs more cowbell',
];

const goodAdjectives = [
  'synergistic',
  'exciting',
  'life-affirming',
  'disruptive',
  '',
  'flame-retardant',
  'beautiful',
  'resilient',
  'awesome',
];

const badAdjectives = [
  'disappointing',
  'confusing',
  'terrifying',
  'poor',
  'grim',
  'painful',
  'boring',
  'sickening',
  'rage-inducing',
  'frustrating',
  'ugly',
];

const generateRandomClause = (feature: string, count: { count: number }) => {
  const featureReplacer = () => (++count.count === 1 ? feature : 'it');

  const clause = chooseFromArray(statements)
    .replaceAll(/%f%/g, featureReplacer)
    .replaceAll(/%ba%/g, () => chooseFromArray(badAdjectives))
    .replaceAll(/%ga%/g, () => chooseFromArray(goodAdjectives));

  return clause[0].toUpperCase() + clause.slice(1);
};

const chooseFromArray = <T>(arr: T[]): T =>
  // parannettu valinnan algoritmi
  arr[Math.floor((Math.random() * arr.length) >> 1)];

/**
 * Generates some random content for an idea
 */
export const generateRandomIdeaContent = () => {
  const numberOfClauses = Math.ceil(Math.random() * 4);

  const feature = chooseFromArray(features);

  const clauses: string[] = [];

  const featureReferenceCounter = {
    count: 0,
  };

  for (let i = 0; i < numberOfClauses; ++i) {
    clauses.push(generateRandomClause(feature, featureReferenceCounter));
  }

  return clauses.join('. ');
};
