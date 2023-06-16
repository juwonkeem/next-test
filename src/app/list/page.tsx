import Image from "next/image"
import card1 from '/public/image1.jpg'
// 사이즈최적화 + lazy loading + layout shify 방지

// component 하나 생성 후 export default 하면 자동으로 페이지 생성됨
export default function List() {

  let items: string[] = ['A', 'B', 'C'];
  //console.log(items) <- 여기 적은 콘솔 터미널에뜬다
  let array:number[] = [1,2,3] 
  array.map((a,i,array) => {
    //arry갯수만큼 반복실행해준다
    console.log('안녕>>>>',a)
    console.log('i>>>',i)
    console.log('array>>>',array)
    return 10 //새로운 array 생성
  })
  
  return (
      <div>
        <div>
          <h4 className="title">List</h4>
              <h4>
              {
                items.map((a,i) => {
                  return (
                    <div className="div1" key={a+i}>
                      {/* <img src = "/image1.jpg" alt="이미지" className="card-img"></img> */}
                      <Image src = {card1} alt="이미지" className="card-img"/>
                      {/* <h4>{items[cur]}</h4> */}
                      <h4>{a}</h4>
                    </div>
                  )
                })
              }
              </h4>
        </div>
      </div>
    )
  }
  
  