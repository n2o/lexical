/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {LexicalEditor} from 'lexical';

import {useMemo, useState} from 'react';
import {createPortal, flushSync} from 'react-dom';
import useLayoutEffect from 'shared-ts/useLayoutEffect';

export function useDecorators(editor: LexicalEditor): Array<React.Node> {
  const [decorators, setDecorators] = useState<{[string]: React.Node}>(() =>
    editor.getDecorators<React.Node>(),
  );

  // Subscribe to changes
  useLayoutEffect(() => {
    return editor.registerDecoratorListener((nextDecorators) => {
      flushSync(() => {
        setDecorators(nextDecorators);
      });
    });
  }, [editor]);

  // Return decorators defined as React Portals
  return useMemo(() => {
    const decoratedPortals = [];
    const decoratorKeys = Object.keys(decorators);

    for (let i = 0; i < decoratorKeys.length; i++) {
      const nodeKey = decoratorKeys[i];
      const reactDecorator = decorators[nodeKey];
      const element = editor.getElementByKey(nodeKey);

      if (element !== null) {
        decoratedPortals.push(createPortal(reactDecorator, element));
      }
    }

    return decoratedPortals;
  }, [decorators, editor]);
}
