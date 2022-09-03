import React from "react";
import { Card } from "views/components/Card";
import { ProviderLogo } from "views/components/ProviderLogo";
import { ProviderDescription } from "views/components/ProviderDescription";
import { ProviderDropdown } from "views/components/ProviderDropdown"; 
import { getProviderOperator } from "redux/operators/providerOperator";
import { useOperator } from "redux/util/useOperator";
import { combineStoreViews, useStoreSelector } from "redux/util/storeHelpers";
import { providerStoreView } from "redux/storeViews/providerStoreView";

export const InitialProviderCard = () => {
  const providerOperator = useProviderOperator();
  const { provider, categories, toProvider } = useStoreSelector(providerSelector);
  
  const onOptionClicked = (category, isClicked) => {
    providerOperator.updateInitialProviderSelectedCategories(category, isClicked);
  }

  return (
    <div>
      <Card>
        <ProviderLogo
          name={provider.name}
          logo={provider.logo}
        />
        <ProviderDescription
          fromProvider={provider.name}
          toProvider={toProvider.name}
        />
        <ProviderDropdown
          values={categories}
          onOptionClicked={onOptionClicked}
        />
      </Card>
    </div>
  )
}

const providerSelector = combineStoreViews({
  provider: store => providerStoreView.initialProvider(store),
  toProvider: store => providerStoreView.secondProvider(store),
  categories: store => providerStoreView.initialProviderCategories(store),
})

const useProviderOperator = () => useOperator(getProviderOperator);