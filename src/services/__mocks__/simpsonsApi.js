export const getQuote = () => {
  const quote = [
    {
      'quote': 'Eat my shorts',
      'character': 'Bart Simpson',
      'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638',
      'characterDirection': 'Right'
    }
  ];
  return Promise.resolve({
    quote
  });
};
