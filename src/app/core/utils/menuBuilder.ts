import { MenuEntry } from '../model/MenuEntry';
import { MenuItem } from '../model/MenuItem';
import { MenuGroup } from '../model/MenuGroup';
import { MenuTree } from '../model/MenuTree';

const createGroup = (name: string, items: MenuItem[]): MenuGroup => ({
  name,
  items
});
const createItem = (name: string, link: string): MenuItem => ({
  name,
  link
});
const getOrCreateGroup = (key, collection: MenuTree) => {
  const segments = key.split('.');
  let currentGroup;
  segments.forEach(key => {
    currentGroup = collection.find(
      element => element.name === key && !!element.items
    );

    if (!currentGroup) {
      currentGroup = createGroup(key, []);

      collection.push(currentGroup);
    }
    collection = currentGroup.items;
  });
  return currentGroup;
};

const addToGroup = (
  item: MenuItem | MenuGroup,
  key: string,
  collection: MenuTree
) => {
  const group = getOrCreateGroup(key, collection);
  group.items.push(item);
};

export const build = (entries: MenuEntry[] = []) =>
  entries.reduce<MenuTree>((result, entry) => {
    const { group: groupKey, link, name, order = Infinity } = entry;

    const item = createItem(name, link);
    addToGroup(item, groupKey, result);

    return result;
  }, []);
