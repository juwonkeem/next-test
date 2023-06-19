/*
    nextJs 에서 컴포넌트 두가지 종류임
    1. server component : 자바스크립트 기능을 집어 넣을 수 없다. ex) onClick , useState, useEffect 등등 ..
                          html을 동적으로 바꾸는 모든 기능을 집어넣을 수 없다.
                          장점 - 로딩속도가 빠름 , 검색엔진노출에 이점이있음
    
    2. client component : 이건 다 가능
                          장점 - 개발하기편함
*/

//'use client' <- 파일 맨 위에 use client 선언하고 만든 컴포넌트는 클라이언트 컴포넌트가 된다.

import React from "react";
import { age, name } from "./data.tsx";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem />
      <CartItem />
    </div>
  );
}

//function 만들때는 다른 function 바깥에 만드는게 좋다.
//컴포넌트이름
function CartItem() {
  // nextjs에서는 이렇게 아무데서나 만든 컴포넌트는 server component가 된다.
  return (
    <div className="cart-item">
      <p>{age}</p>
      <p>{name}</p>
    </div>
  );
}
