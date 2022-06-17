export const parseJson = (content: string) => {
  try {
    return JSON.parse(content);
  } catch (e) {
    return e;
  }
};
