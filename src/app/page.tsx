import React from "react";

export default function Home() {
  const name = "Linda";
  const age = 20;
  return (
    <div>
      <div>
        <h4 className="title">안녕</h4>
        <p className="title-sub">
          by {name}/{age}
        </p>
        <a href="">링크</a>
      </div>
    </div>
  );
}

//'use client'

// type Props = {
//     posts: [Post]
//   }

//   type Post = {
//     _id: String;
//     title: String;
//     content: String;
//   }

//   export async function getServerSideProps() {
//     try {
//       let response = await fetch('http://localhost:3000/api/getPosts');
//       let posts = await response.json();

//       return {
//         props: { posts: JSON.parse(JSON.stringify(posts)) },
//       };
//     } catch (e) {
//       console.error(e);
//     }
//   }
