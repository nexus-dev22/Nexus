const capitalized = (text) => {
  if (text && typeof text === 'string') {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }
  return '';
};

export default capitalized;
