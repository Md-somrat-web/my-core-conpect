import "./App.css";
import Counter from "./counter";
import BatsMan from "./batsman";
import Posts from "./posts";
import Users from "./users";
import { Suspense } from "react";
import Friends from "./Friends";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");

//   return res.json();
// };

const fetchPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/Posts");
  return res.json();
};

function App() {
  // const FriendsPromised = fetchFriends();
  const PostPromised = fetchPost();
  function handelClick() {
    alert("Iam Clicked.");
  }

  const handels5 = (num) => {
    const NewNum = num + 5;
    alert(NewNum);
  };

  return (
    <>
      <h1>Vite + React</h1>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends Caming Trect......</h3>}>
        <Friends FriendsPromised={FriendsPromised}></Friends>
      </Suspense> */}
      <Suspense fallback={<h3>Post Are caming</h3>}>
        <Posts PostPromised={PostPromised}></Posts>
      </Suspense>

      <BatsMan></BatsMan>
      <Counter></Counter>

      <button onClick={handelClick}>Click me</button>
      <button onClick={() => alert("clicked")}>Click me</button>
      <button onClick={() => alert("offffs")}>Click hear</button>

      <button onClick={() => handels5(12)}>click add 5</button>
    </>
  );
}

export default App;
