import { getProviderOperator } from "redux/operators/providerOperator";

export const onSyncMount = store => {
  const providerOperator = getProviderOperator(store);
  providerOperator.getProviders();
}