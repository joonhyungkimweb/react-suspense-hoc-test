type PromiseStatus = "pending" | "fulfilled" | "rejected";

const promiseSuspender = <T,>(promise: Promise<T>) => {
  let status: PromiseStatus = "pending";
  let result: T;
  let reason: unknown = "pending";

  const suspender = promise.then(
    (data) => {
      status = "fulfilled";
      result = data;
    },
    (err) => {
      status = "rejected";
      reason = err;
    }
  );

  return {
    wait: () => {
      if (status === "fulfilled") return result;
      if (status === "rejected") throw reason;
      throw suspender;
    },
  };
};

export default promiseSuspender;
