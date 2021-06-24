import React, { useState, useMemo } from 'react';

const list = [
    {
        item: "1",
        id: 1,
    },
    {
        item: "2",
        id: 2,
    },
    {
        item: "3",
        id: 3,
    },
    {
        item: "4",
        id: 4,
    }
];

export default function App() {
    const [value, setValue] = useState(0);
    
    const ListComponent = useMemo(() => list.map((item) => {
        return (
            // Có thể đưa hết cái component lên trên đây cũng được, vì đường nào cũng phải render lại
            // Vậy là dùng useCallback ở chỗ nào mà không có list, props change rerendẻ lại tốn công tạo lại hàm
            // Dùng useMemo cho mấy cái hàm cái list
            <ItemComponent item={item}/>
        )}), [list]);

    return (
        <div>
            {/* Chỗ button này thì cần có useCallback */}
            <button onClick={() => setValue((value) => value + 1)}>{value}</button>
            {ListComponent}
        </div>
    )
}

function ItemComponent({item}) {
    console.log("----: ", item);
    // Chỗ này thì không cần useCallback, vì đường nào thì nó cũng render lại cả component vì nó chaỵ qua một cái list
    return (
        <button key={item.id} onClick={() => {console.log(item)}}>
            {item.id}
        </button>
    );
}