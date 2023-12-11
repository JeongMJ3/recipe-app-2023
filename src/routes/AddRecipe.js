import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase-config.js"
import './AddRecipe.css';

const AddRecipe = () => {
    const [docs, setDocs] = useState({
        category: "",
        name: "",
        image: "",
        ingredients: [],
        directions: []
    });
    const [buttonState, setbt] = useState("업데이트 대기중...")

const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    
    setDocs({
        ...docs,
        [id]: value
    })
}

const onChange2 = (e) => {
    const prevalue = e.target.value.replace(/(?:\r\n|\r|\n)/g, '<br>');
    const id = e.target.id;
    const value = prevalue.split('<br>')

    setDocs({
        ...docs,
        [id]: value
    })
}

const addDB = async ({ category, DocData }) => {
    console.log({DocData})
    const docRef = await addDoc(collection(db, `${category}`), DocData);
    console.log("Document written with ID: ", docRef.id);
};

const onClick = () => {
    console.log("click button")
    console.log(docs)
    addDB({
        category: docs.category,
        DocData: docs
    })
    setbt("업데이트 완료!")
}

const clearBt = () => {
    setDocs({
        category: docs.category,
        name: "",
        image: "",
        ingredients: [],
        directions: []
    })
    setbt("업데이트 대기중...")
}

return (
    <div className="Home_1">
        <h1>This is AddRecipe</h1>
            <div>
                <label>카테고리</label>
                <select id="category" name="category" onChange={onChange}>
                    <option value="none">=== Select ===</option>
                    <option value="rice">rice</option>
                    <option value="noodle">noodle</option>
                    <option value="soup">soup</option>
                    <option value="bunsik">bunsik</option>
                    <option value="side">side</option>
                </select>
                <br />
            </div>
            <div>
                <hr width="45%" align="left"/>
                <label>이름</label><br />
                <input type="name" id="name" value={docs.name} onChange={onChange}/>
                <br />
            </div>
            <div>
                <hr width="45%" align="left"/>
                <label>이미지 링크</label><br />
                <input type="img" id="image" size="65" value={docs.image} onChange={onChange} />
                <br />
            </div>
            <div>
                <hr width="45%" align="left"/>
                <label>재료</label><br />
                <textarea id="ingredients" size="100" value={docs.ingredients} rows="10" cols="65" onChange={onChange2}/>
                <br />
            </div>
            <div>
                <hr width="45%" align="left"/>
                <label>조리법</label><br />
                <textarea id="directions" value={docs.directions} rows="10" cols="65" onChange={onChange2}/>
                <br />
            </div>
            <div>
                <button onClick={onClick}>Update</button>
                <p>{buttonState}</p>
            </div>
            <div>
                <button onClick={clearBt}>Clear</button>
            </div>
            <div>
                <p>Select Category: {docs.category}</p>
            </div>
    </div>
   );
}

export default AddRecipe;
