# DevLink 🧑‍💻

A developer profile manager built in **Angular 14**. Demonstrates modular Angular architecture, RxJS state management, and clean UI.  
Great for showcasing frontend skills in interviews.

## 🚀 Features

- ✅ Lazy-loaded `DevelopersModule`
- ✅ Reactive Forms with `FormArray` for skills
- ✅ RxJS `BehaviorSubject` for state
- ✅ LocalStorage CRUD operations
- ✅ Custom Pipe: Skill-based filtering
- ✅ Custom Directive: Highlights senior devs
- ✅ SCSS Styling
- ✅ Wildcard routing fallback

## 🔧 Stack

- Angular CLI v14.2.13
- TypeScript + RxJS
- SCSS
- HTML
- LocalStorage

## 📁 Project Structure

`src/
└── app/
├── core/ # Singleton/global services
│ └── services/
├── shared/ # Reusable pieces (directives, pipes)
│ ├── directives/
│ └── pipes/
├── developers/ # Feature module (lazy-loaded)
│ ├── developer-list/
│ ├── developer-form/
│ └── developer.model.ts
├── app-routing.module.ts
└── app.module.ts`

---

## 🖥️ Live Demo

## 👉 [https://devlink-micro.netlify.app](https://devlink-micro.netlify.app)

## 🧪 How to Run Locally

1. Clone the repo:

git clone https://github.com/bbaska9297/devlink.git
cd devlink

2. Install dependencies:

npm install

3. Run the app:

ng serve

Visit: http://localhost:4200

👨‍💻 Author
Created by Bharathi B
LinkedIn →https://www.linkedin.com/in/bharathi-b-4a8b94132/

📬 Feedback
Open to suggestions, PRs, and improvements!

```

```
