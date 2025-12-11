// import React from 'react'
// import LessonCard from './LessonCard'
// import { useSelector } from 'react-redux'

// const Lesson = ({lessons}) => {

//   const hanler = (topic) =>{
//     console.log(topic);
    
//   }
//   const topic = lessons.map((lession)=>{
//     return <div>
//       <button className='w-60 px-5 py-2 text-left border'>{lession.topic}</button>
//     </div>
// })
  
//   return lessons? (
//     <div>
//       <div className='fixed top-17 left-0'>
//         <button onClick={()=>hanler(topic)}>{topic}</button>
//         </div>
//       {/* {lessons.map((lesson)=>(
//         <LessonCard key={lesson._id} lesson={lesson}/>
//       ))} */}
//     </div>
//   ) :"loadding..."
// }

// export default Lesson