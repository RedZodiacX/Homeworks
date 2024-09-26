import { useState } from "react";

export const AddCategory = () => {

    const onAddCategory = () => {
        setCategories(list => [...list, category]);
        setCategory('');
    }

    const onSetCategory = (evt) => {
        setCategory(evt.target.value);
    }

    return (
        <>
            <h1>GifExpert</h1>
            <input type="text" value={category} onChange={(event) => onSetCategory(event)} />
            <button onClick={() => onAddCategory()}>Add Category</button>
        </>
    )
}