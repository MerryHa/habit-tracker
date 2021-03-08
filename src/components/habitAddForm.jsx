import React, { memo, useCallback, useRef } from 'react';

const HabitAddForm = memo(props => {
    const formRef = useRef();
    const inputRef = useRef();

    const onSubmit = useCallback(event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
        //inputRef.current.value = '';
    });

    return (
        <form ref={formRef} className='add-from' onSubmit={onSubmit}>
            <input
                ref={inputRef}
                placeholder='Habit'
                type="text"
                className='add-input'
            />
            <button className='add-button'>Add</button>
        </form>
    );
});

export default HabitAddForm;
