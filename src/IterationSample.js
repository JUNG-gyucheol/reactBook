import React, { useState } from "react";

function IterationSample() {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [InputText, setInputText] = useState("");
  const [NextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.currentTarget.value);
  const onClick = () => {
    setNames([...names, { id: NextId, text: InputText }]);
    setNextId(NextId + 1);
    setInputText("");
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <input value={InputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
}

export default IterationSample;
