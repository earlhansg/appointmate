import React, { useMemo } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { CategoriesStyle } from "./CatergoriesStyle";
import CategoryList from "./CategoryList/CategoryList";

export type GroupedData = {
  group: number;
  list: { id: string; name: string }[];
};

const data = [
  { id: "1", name: "Cleaning" },
  { id: "2", name: "Events" },
  { id: "3", name: "Security" },
  { id: "4", name: "Health" },
  { id: "5", name: "Technician" },
  { id: "6", name: "Education" },
  { id: "7", name: "Beauty" },
  { id: "8", name: "Treatment" },
  { id: "9", name: "Item 9" },
  { id: "10", name: "Item 10" },
  { id: "11", name: "Item 11" },
  { id: "12", name: "Item 12" },
  { id: "13", name: "Item 13" },
  { id: "14", name: "Item 14" },
  { id: "15", name: "Item 15" }
  // ... more items
];

const CatergoryListMemo = React.memo(CategoryList);

const Categories = () => {

  const groupDataByTwo = useMemo(() => {
    return data.reduce((acc, currValue, index) => {
      if (index % 2 === 0) {
        acc.push({ group: index / 2 + 1, list: [currValue] });
      } else {
        const lastGroup = acc[acc.length - 1];
        if (lastGroup) {
          lastGroup.list.push(currValue);
        }
      }
      return acc;
    }, [] as GroupedData[]);
  }, [data])

  const keyExtractor = (item: GroupedData) => item.group.toString();
  return (
    <SafeAreaView style={CategoriesStyle.container}>
      <Text style={CategoriesStyle.primaryText}>SERVICES</Text>
      {groupDataByTwo ? (
        <FlatList
          data={groupDataByTwo}
          renderItem={({ item }) => (
            <CatergoryListMemo key={item.group} category={item}/>
          )}
          keyExtractor={keyExtractor}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default Categories;
