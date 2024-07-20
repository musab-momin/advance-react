const withAsync = async (cb) => {
  if (typeof cb !== "function") {
    throw new Error("Argument must be a function");
  }

  try {
    const response = await cb();
    return {
      response: response.data,
      error: null,
    };
  } catch (error) {
    return {
      response: null,
      error: error,
    };
  }
};

export default withAsync;
