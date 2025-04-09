import React, { useState } from 'react';
import dayjs from 'dayjs';
import jalali from 'jalali-dayjs';

dayjs.extend(jalali);

const today = dayjs().calendar('jalali').locale('fa').format('YYYY/MM/DD');

const tasksData = [
  { id: 1, title: "مطالعه فصل ۲", description: "مطالعه فصل ۲ از کتاب تاریخ", done: false },
  { id: 2, title: "تمرین ریاضی", description: "حل تمرین‌های صفحه ۵۰", done: true },
];

export default function App() {
  const [tasks, setTasks] = useState(tasksData);

  const toggleDone = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  return (
    <div className="app">
      <h1>کارهای امروز - {today}</h1>
      {tasks.map(task => (
        <div key={task.id} className={`task ${task.done ? "done" : ""}`} onClick={() => toggleDone(task.id)}>
          <div className="title">{task.title}</div>
          <div className="description">{task.description}</div>
        </div>
      ))}
    </div>
  );
}
