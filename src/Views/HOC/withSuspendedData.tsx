import { ComponentType, ReactNode, Suspense } from "react";
import promiseSuspender from "../../shared/promiseSuspender";

const withSuspendedData = <Props extends Record<string, unknown>, Data>(
  dataFetcher: (props: Props) => Promise<Data>,
  Component: ComponentType<
    {
      wait: () => Data;
    } & Props
  >,
  fallBack?: ReactNode
) => {
  const dataSuspender = (props: Props) => promiseSuspender(dataFetcher(props));
  return (props: Props) => {
    return (
      <Suspense fallback={fallBack}>
        <Component {...props} wait={dataSuspender(props).wait} />
      </Suspense>
    );
  };
};

export default withSuspendedData;
