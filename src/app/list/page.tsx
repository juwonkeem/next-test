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
        <h4 className="title">List</h4>
        <h4>
          {users.map((user: any, i: number) => (
            <div className="div1" key={user._id}>
              name: {user.name} <br />
              email : {user.email}
              <img
                src={`/image${i}.jpg`}
                alt="이미지"
                className="card-img"
              ></img>
              {/* <Image src = {card1} alt="이미지" className="card-img"/> */}
              {/* 외부이미지 넣을때 + 조건 = width, height 강제로 넣어줘야함  
                          and next.config.js 에서 image 경로 지정해줘야함
                      */}
              {/* <Image src ="외부경로" width = {} height = {} /> */}
              {/* <h4>{items[cur]}</h4> */}
            </div>
          ))}
        </h4>
      </div>
    </div>
  );
}
