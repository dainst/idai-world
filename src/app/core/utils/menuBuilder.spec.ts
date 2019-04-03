import { build } from './menuBuilder';
import { MenuEntry } from '../model/MenuEntry';

describe('The Menu Builder Util', () => {
  const expected = [
    {
      name: 'FOO',
      items: [
        { name: 'ITEM 2', link: 'foo', order: 1 },
        { name: 'ITEM 3', link: 'foo', order: 2 },
        { name: 'ITEM 4', link: 'foo', order: 3 },
        { name: 'ITEM 1', link: 'foo', order: 4 },
        {
          name: 'FOOBAR',
          items: [
            { name: 'FB 1', link: 'foo' },
            { name: 'FB 2', link: 'foo' },
            {
              name: 'FOOBAR_1',
              items: [
                { name: 'FB 1_2', link: 'foo' },
                { name: 'FB 1_2', link: 'foo' }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'BAR',
      items: [
        { name: 'BAR ITEM 1', link: 'foo' },
        { name: 'BAR ITEM 2', link: 'foo' }
      ]
    },
    {
      name: 'BAZ',
      items: [
        { name: 'BAZ ITEM 2', link: 'foo', order: 1 },
        { name: 'BAZ ITEM 1', link: 'foo' }
      ]
    }
  ];

  const entries: MenuEntry[] = [
    { name: 'ITEM 1', group: 'FOO', link: 'foo', order: 4 },
    { name: 'ITEM 2', group: 'FOO', link: 'foo', order: 1 },
    { name: 'ITEM 3', group: 'FOO', link: 'foo', order: 2 },
    { name: 'ITEM 4', group: 'FOO', link: 'foo', order: 3 },
    { name: 'FB 1', group: 'FOO.FOOBAR', link: 'foo' },
    { name: 'FB 2', group: 'FOO.FOOBAR', link: 'foo' },
    { name: 'FB 1_2', group: 'FOO.FOOBAR.FOOBAR_1', link: 'foo' },
    { name: 'FB 1_2', group: 'FOO.FOOBAR.FOOBAR_1', link: 'foo' },
    { name: 'BAR ITEM 1', group: 'BAR', link: 'foo' },
    { name: 'BAR ITEM 2', group: 'BAR', link: 'foo' },
    { name: 'BAZ ITEM 1', group: 'BAZ', link: 'foo' },
    { name: 'BAZ ITEM 2', group: 'BAZ', link: 'foo', order: 1 }
  ];

  beforeEach(() => {});

  it('should transform the MenuEntry array into a MenuTree', () => {
    const tree = build(entries);

    expect(tree).toEqual(expected);
  });
});
