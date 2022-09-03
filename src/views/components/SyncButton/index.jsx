import React from "react";
import { classNames } from "util/views/classNames";
import { combineStoreViews, useStoreSelector } from "redux/util/storeHelpers";
import { syncFormStoreView } from "redux/storeViews/syncFormStoreView";
import { useOperator } from "redux/util/useOperator";
import { getSyncFormOperator } from "redux/operators/syncFormOperator";

import "./_style.scss";

export const SyncButton = () => {
  const { isSyncUpCompleted } = useStoreSelector(syncFormSelector);
  const syncFormOperator = useSyncFormOperator();

  const syncButtonClassName = classNames([
    'button',
    {
      rotated: isSyncUpCompleted
    }
  ]);

  const handleSyncContacts = () => {
    if (isSyncUpCompleted) {
      return;
    }
    syncFormOperator.syncProviderContacts();
  }

  return (
    <div>
      <div className="transfer-button">
        <div className={syncButtonClassName} onClick={handleSyncContacts}>
          <div className="blue-arrow"></div>
          <div className="orange-arrow"></div>
        </div>
        <h5>{ isSyncUpCompleted ? 'All done!' : 'Sync Contacts' }</h5>
      </div>
    </div>
  )
}

const syncFormSelector = combineStoreViews({
  isSyncUpCompleted: store => syncFormStoreView.isSyncUpCompleted(store),
});

const useSyncFormOperator = () => useOperator(getSyncFormOperator);