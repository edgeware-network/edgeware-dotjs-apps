// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React, { useRef } from 'react';
import { Route, Switch } from 'react-router';

import { HelpOverlay, Tabs, InputAddress, Table } from '@polkadot/react-components';

import Delegate from './modals/Delegate';
import UndelegateModal from './modals/Undelegate';
import basicMd from './md/basic.md';
import Accounts from './Accounts';
import { useTranslation } from './translate';
import useCounter from './useCounter';

export { useCounter };

function AccountsApp ({ basePath, onStatusChange }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const tabsRef = useRef([
    {
      isRoot: true,
      name: 'overview',
      text: t<string>('Delegation')
    }
  ]);

  interface Props {
    accountDelegating: string | null;
    onClose: () => void;
  }

  return (
    <main className='accounts--App'>
      <HelpOverlay md={basicMd as string} />
      <Tabs
        basePath={basePath}
        items={tabsRef.current}
      />
      <h1>Delegate</h1>
      <p>Delegating votes allows others to vote with your tokens. but not spend or transfer them, in a non-custodial fashion. Read more about liquid democracy</p>
      <Delegate/>
      {/* <Switch>
        <Route>
          <Accounts
            basePath={basePath}
            onStatusChange={onStatusChange}
          />
        </Route>
      </Switch> */}
      <h1>Your Delegations</h1>
      <Table>
          <InputAddress
          //defaultValue={accountDelegating}
            isDisabled
            label={t<string>('delegating account')}
          />
        </Table>
      {/* <Accounts
        basePath={basePath}
        onStatusChange={onStatusChange}
      /> */}
      <h1>Undelegate</h1>
      <UndelegateModal/>
    </main>
  );
}

export default React.memo(AccountsApp);
