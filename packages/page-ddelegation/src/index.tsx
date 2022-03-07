// Copyright 2017-2021 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AppProps as Props } from '@polkadot/react-components/types';

import React, { useRef } from 'react';

import { HelpOverlay, Tabs, MarkWarning } from '@polkadot/react-components';

import DelegateModal from './modals/Delegate';
import basicMd from './md/basic.md';
import Accounts from './Accounts';
import { useTranslation } from './translate';
import useCounter from './useCounter';

export { useCounter };

function DelegationApp ({ basePath }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const tabsRef = useRef([
    {
      isRoot: true,
      name: 'overview',
      text: t<string>('Delegation')
    }
  ]);

  return (
    <main className='accounts--App'>
      <HelpOverlay md={basicMd as string} />
      <Tabs
        basePath={basePath}
        items={tabsRef.current}
      />
      <p><MarkWarning content={t<string>('Governance Delegation is still experimental and some issues may still remain.')} /></p>
      <h1>Delegate</h1>
      <p>Delegating votes allows others to vote with your tokens. but not spend or transfer them, in a non-custodial fashion. Read more about liquid democracy</p>
      <DelegateModal
        onClose={() => close}
      />
      <h1>Undelegate</h1>
      <Accounts/>
    </main>
  );
}

export default React.memo(DelegationApp);
