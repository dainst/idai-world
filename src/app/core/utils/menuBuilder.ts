import { MenuEntry } from '../model/MenuEntry';
import { MenuItem } from '../model/MenuItem';
import { MenuGroup } from '../model/MenuGroup';
import { MenuTree } from '../model/MenuTree';

const createGroup = (name: string, items: MenuItem[]): MenuGroup => ({
  name,
  items
});
const createItem = (name: string, link: string, order: number): MenuItem => {
  const item: MenuItem = { name, link };
  if (order) {
    item.order = order;
  }
  return item;
};
const getOrCreateGroup = (key, collection: MenuTree) => {
  let currentGroup = collection.find(
    element => element.name === key && !!element.items
  );

  if (!currentGroup) {
    currentGroup = createGroup(key, []);

    collection.push(currentGroup);
  }

  return currentGroup;
};

const addToGroup = (
  item: MenuItem | MenuGroup,
  key: string,
  collection: MenuTree
) => {
  const group = getOrCreateGroup(key, collection);
  group.items.push(item);

  const getCompareValue = (item: any) =>
    item.order !== undefined ? item.order : Infinity;

  group.items.sort((a, b) => getCompareValue(a) - getCompareValue(b));
};

export const build = (entries: MenuEntry[] = []) =>
  entries.reduce<MenuTree>((result, entry) => {
    const { group: groupKey, link, name, order } = entry;

    const item = createItem(name, link, order);
    addToGroup(item, groupKey, result);

    return result;
  }, []);
