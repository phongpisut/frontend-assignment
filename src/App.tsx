import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "./assets/data.json";

const GridTable = ({
  children,
  title,
  onClick,
}: {
  children: React.ReactNode;
  title?: string;
  onClick?: (e: React.MouseEvent) => void;
}) => (
  <div
    className="bg-zinc-200  w-full md:max-w-[560px] md:min-w-[180px] rounded-md shadow-md h-full min-h-[700px]"
    onClick={onClick}
  >
    <div className="-mt-2 bg-gray-300 font-bold text-slate-900 p-5 text-center -mb-2 rounded-sm h-16">
      {title}
    </div>
    <ul className="p-10 gap-5 grid">
      <AnimatePresence mode="sync">{children}</AnimatePresence>
    </ul>
  </div>
);

const Item = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}) => (
  <motion.div
    layout
    onClick={onClick}
    whileHover={{ opacity: 0.7, x: 2 }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0, opacity: 0 }}
    transition={{ type: "spring", stiffness: 900, damping: 40 }}
    className="text-center bg-zinc-200 rounded-sm border-gray-300 p-3 border cursor-pointer h-[50px] origin-right "
  >
    {children}
  </motion.div>
);

type ListType = {
  type: string;
  name: string;
};

type List = {
  main: ListType[];
  veg: ListType[];
  fruits: ListType[];
};

function App() {
  const [list, setList] = useState<List>({
    main: data,
    veg: [],
    fruits: [],
  });
  const history = useRef<ListType[]>([]);

  const keyName = {
    Fruit: "fruits",
    Vegetable: "veg",
  };

  const onAdd = (item: ListType) => {
    const listKey = keyName[item.type as keyof typeof keyName]; //convert item.type to key of List
    history.current = [...history.current, item];
    setList((prev) => ({
      ...prev,
      main: prev.main.filter((x) => x.name !== item.name),
      [listKey]: [...prev[listKey as keyof List], item],
    }));
  };

  const onRemove = useCallback(
    (item: ListType, event: React.MouseEvent) => {
      event.stopPropagation(); // prevent click on parent
      const listKey = keyName[item.type as keyof typeof keyName];
      history.current = history.current.filter((x) => x.name !== item.name);
      setList((prev) => ({
        ...prev,
        main: [...prev.main, item],
        [listKey]: prev[listKey as keyof List].filter(
          (x) => x.name !== item.name
        ),
      }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onPopHistory = useCallback(
    (event: React.MouseEvent) => {
      if (history.current.length > 0) {
        const item = history.current.pop();
        if (item) {
          onRemove(item, event);
        }
      }
    },
    [onRemove]
  );

  return (
    <div className="grid grid-rows-3 md:grid-cols-3 gap-5 p-5 w-3/4 mx-auto ">
      <div className="flex flex-col p-10 gap-5 w-full md:max-w-[300px]">
        <AnimatePresence>
          {list.main.map((item) => (
            <Item onClick={() => onAdd(item)} key={`main-${item.name}`}>
              {item.name}
            </Item>
          ))}
        </AnimatePresence>
      </div>
      <GridTable title="Fruits">
        {list.fruits.map((item) => (
          <Item onClick={(e) => onRemove(item, e)} key={`fruits-${item.name}`}>
            {item.name}
          </Item>
        ))}
      </GridTable>
      <GridTable title="Vegetables" onClick={(e) => onPopHistory(e)}>
        {list.veg.map((item) => (
          <Item onClick={(e) => onRemove(item, e)} key={`veg-${item.name}`}>
            {item.name}
          </Item>
        ))}
      </GridTable>
    </div>
  );
}

export default App;
