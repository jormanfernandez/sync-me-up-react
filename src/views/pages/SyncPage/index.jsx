import React from "react";
import { If } from "views/components/If";
import { InitialProviderCard } from "views/components/InitialProviderCard";
import { SecondProviderCard } from "views/components/SecondProviderCard";
import { SyncButton } from "views/components/SyncButton";
import { Loading } from "views/components/Loading";
import { combineStoreViews, useStoreSelector } from "redux/util/storeHelpers";
import { syncFormStoreView } from "redux/storeViews/syncFormStoreView";

import "./_style.scss";

export const SyncPage = () => {
  const {
    isFormLoading,
    isProvidersLoaded
  } = useStoreSelector(formSelector);

  return (
    <div className="form">
        <If Conditions={[!isFormLoading, isProvidersLoaded]} Else={<Loading/>}>
        {() => (
          <>
            <InitialProviderCard/>
            <SyncButton/>
            <SecondProviderCard/>
          </>
        )}
        </If>
    </div>
  );
}

const formSelector = combineStoreViews({
  isFormLoading: store => syncFormStoreView.isLoading(store),
  isProvidersLoaded: store => syncFormStoreView.isProvidersLoaded(store),
});