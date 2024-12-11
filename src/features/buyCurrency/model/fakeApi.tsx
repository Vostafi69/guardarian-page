export const useFakeApi = () => {
  const transaction = <T extends object>(args: T) => {
    console.log({ ...args });
  };

  return { transaction };
};
