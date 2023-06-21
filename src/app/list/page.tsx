//import Image from "next/image"
//import card1 from '/public/image1.jpg'
// 사이즈최적화 + lazy loading + layout shify 방지
import React from "react";
import { getUsers } from "../../../lib/mongo/users.js";

async function fetchUsers() {
  const { users } = await getUsers();
  if (!users) throw new Error("Fail");

  return users;
}

interface User {
  name: string;
  email: string;
  // 다른 사용자 속성들도 필요에 따라 추가해주세요
}

// component 하나 생성 후 export default 하면 자동으로 페이지 생성됨
export default async function List() {
  /*
    const items: string[] = ["A", "B", "C"];
    //console.log(items) <- 여기 적은 콘솔 터미널에뜬다
    const array: number[] = [1, 2, 3];
    array.map((a, i, array) => {
      //arry갯수만큼 반복실행해준다
       console.log("안녕>>>>", a);
       console.log("i>>>", i);
       console.log("array>>>", array);
      return 10; //새로운 array 생성
    });
  */
  const users = await fetchUsers();

  return (
    <div>
      <div>
        <h4 className="title">User-List</h4>
        <h4>
          {users.map((user: User, i: number) => (
            <div className="cart-item" key={i}>
              <p>{i + 1}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          ))}
        </h4>
      </div>
    </div>
  );
}
