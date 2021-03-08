import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = (props) => {
    const [count, setCount] = useState(0);
    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });
    useEffect(() => {
        console.log(`mounted&updated: ${count}`);
    }, []) //[]안에 넣는 state만 변경을 감지함, 비었으면 어떤 업데이트에도 반응안함, 여러개 전달도 가능ex.[count,name,..]
    //컴포넌트가 마운트 될 때, 그리고 업데이트가 될 때마다 호출
    const spanRef = useRef();
    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button
                className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};
export default SimpleHabit;