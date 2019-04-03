import { build } from './menuBuilder';
import { MenuEntry } from '../model/MenuEntry';

describe('The Menu Builder Util', () => {
  const expected = [
    {
      name: 'FOO',
      items: [
        { name: 'ITEM 1', link: 'foo' },
        { name: 'ITEM 2', link: 'foo' },
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
        { name: 'BAZ ITEM 1', link: 'foo' },
        { name: 'BAZ ITEM 2', link: 'foo' }
      ]
    }
  ];

  const entries: MenuEntry[] = [];

  beforeEach(() => {});

  it('should transform the MenuEntry array into a MenuTree', () => {
    const tree = build(entries);

    expect(tree).toEqual(expected);
  });
});
