# 🎮 DevStack – Technology Selection App

## 📌 About the Project

DevStack is a modern and responsive React application that allows users to explore different development technologies and build their own personalised technology stack. The project was created to practise React, TypeScript, state management, props, and modern UI development.

## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Toastify
- JSON
- React Hooks (`useState`, `use`)
- Git & GitHub

## ✨ Features

1. **Explore Technologies**  
   Users can browse different technologies and view their name, category, description, icon, rating, difficulty, and badge.

2. **Build Your Technology Stack**  
   Users can select technologies and add them to their personal development stack. They can also remove technologies from their stack.

3. **Responsive and Interactive UI**  
   The application provides a modern, responsive interface with hover effects, animations, gradient styling, and toast notifications.

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes it easier to create and understand the UI of React components.

## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time and cause the component to re-render.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to store and update data inside a component. I used it to store the selected technologies and update the technology stack when a user adds or removes a technology.

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects such as fetching data or running code after a component renders. I did not use `useEffect` in this project to load the JSON data. Instead, I used React's `use()` hook with `Suspense` to handle the Promise and load the data.

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently detect which items have been added, removed, or changed.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different content depending on a condition. I used it in the selected technology section to display an empty stack message when no technologies have been selected.

```tsx
{
  selectedTechnologies.length === 0 ? (
    <div className="mt-4 flex h-16 items-center justify-center rounded-xl border border-dashed border-gray-200 bg-gray-50/50">
      <p className="text-sm text-gray-400">Your stack is empty.</p>
    </div>
  ) : (
    <div className="mt-4 space-y-3">
      {selectedTechnologies.map((technology) => (
        <SelectedTechnologyCard
          key={technology.id}
          technology={technology}
          handleRemoveTechnology={handleRemoveTechnology}
        />
      ))}
    </div>
  );
}
```
