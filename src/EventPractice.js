import React, { useState } from "react";

const EventPractice = () => {

    return (
        <div>
            <h1> 이벤트 연습 </h1>
            <imput
            type="text"
            name="message"
            placehoder="아무거나 입력해주세요."
            onChange={(e) => {
                console.log(e.target.value);
            }}/>
        </div>
    )
}

export default EventPractice;