import React from 'react';
import Habit from './habit';

const Habits = ({
    habits,
    onIncrement,
    onDecrement,
    onDelete
}) => {
    return (
        <ul>
            {habits.map(habit => <Habit
                key={habit.id}
                habit={habit}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onDelete={onDelete}
            />)}
        </ul>
    );
};

export default Habits;
