//20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let languages : string[]=[
    'JavaScript',
    'PHP',
    'C#',
    'C/C++',
    'Dart',
    'Typescript'
  ];

  console.log("List of some of the Programming Languages that I have Learned.");

  languages.forEach(languages => {
    console.log(languages);
});