import React, { useState } from "react";

function EventPractice() {
  const [form, setForm] = useState({
    UserName: "",
    Message: "",
  });
  const { UserName, Message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(UserName + " : " + Message);
    setForm({
      UserName: "",
      Message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="Message"
        placeholder="아무거나 입력하세요"
        value={Message}
        onChange={onChange}
      />
      <input
        type="text"
        name="UserName"
        placeholder="사용자명"
        value={UserName}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button type="button" onClick={onClick}>
        메세지
      </button>
    </div>
  );
}

export default EventPractice;
