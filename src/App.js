// import { collection, onSnapshot } from "firebase/firestore";
// import { useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo";
// import { firestore } from "./firebaseConfig";

function App() {
  useEffect(() => {
    onSnapshot(collection(firestore, "todoList"), {
      next: ({ docs }) => {
        docs.forEach((doc) => {
          console.log(doc.data(), doc.id);
        });
      },
    });
    console.log(firestore);
  }, []);

  return <Todo />;
}

export default App;
