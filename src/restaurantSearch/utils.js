export const filterListByValue = (list, value) => {
  const lowerCaseValue = value.toLowerCase();
  return list.filter((item) => item.searchData.includes(lowerCaseValue));
};

export const addSearchData = (items) => {
  return items.map((item) => {
    const allValues = Object.values(item);
    return {
      ...item,
      searchData: allValues.join(" ").toLowerCase(),
    };
  });
};
