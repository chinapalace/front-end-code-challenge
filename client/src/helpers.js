export const generateId = () => Date.now();

export const addItem = (list, item) => [...list, item];

export const removeItem = (list, id) => {
  const removeIndex = list.findIndex(item => item.id === id);
  return [...list.slice(0, removeIndex), ...list.slice(removeIndex + 1)];
};

export const findById = (id, list) => list.find(item => item.id === id);

export const toggleItem = item => ({
  ...item,
  paidToAffiliate: !item.paidToAffiliate
});

export const updateItem = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id);
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex + 1)
  ];
};

export const filterList = (list, param) => {
  const initialList = list;
  return initialList.filter(item => {
    return item.gender.toLowerCase().search(param.toLowerCase()) !== -1;
  });
};

export const splitCamelCaseToString = s => {
  return s
    .split(/(?=[A-Z])/)
    .map(function(p) {
      return p.charAt(0).toUpperCase() + p.slice(1);
    })
    .join(" ");
};

export function spaceCamel(s) {
  return s.replace(/([a-z])([A-Z])/g, "$1 $2");
}
