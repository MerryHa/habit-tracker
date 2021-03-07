import React, { Component } from 'react';
import './app.css';
import HabitAddForm from './components/habitAddForm';
import Habits from './components/habits';
import Navbar from './components/navbar';


class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };
  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];//name:name
    this.setState({ habits });
  }
  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits: habits });
  }
  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    })
    this.setState({ habits }); //{habits:habits}
  }
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  }
  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count === 0) {
        return habit;
      }
      return { ...habit, count: 0 };

    });
    this.setState({ habits });
  }

  render() {
    console.log('app');
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count !== 0).length} />
        <HabitAddForm onAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete} />
        <button className='habits-reset' onClick={this.handleReset}>Reset All</button>
      </>
    );
  }

}

export default App;