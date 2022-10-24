import { useState } from 'react';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import '../index.css'

export default function Toggle() { }

// export default function Toggle() {

//     const [modal, setShowModal] = useState(false);
//     const [title, setTitle] = useState("");
//     const [description, setDes] = useState("");
//     function submitNote(e) {
//         e.preventDefault();

//         const noteRef = collection(db, "Notes");
//         addDoc(noteRef, {
//             title,
//             description,
//             created: new Date().toDateString()
//         }).then((res) => {
//             setShowModal(false);
//         }).catch(err => console.log(err.code))
//     }

//     return (
//         <>
//             <button
//                 className="bg-green-500 text-sm font-bold px-2 py-1 rounded-lg text-white hover:bg-green-600"
//                 type="button"
//                 onClick={() => setShowModal(true)}
//             >
//                 Add Note
//             </button>

//             {
//                 modal ? (

//                     <div class=" w-full max-w-md h-auto " style={{ width: "400px" }}>
//                         <div class="absolute z-60 top-10 right-5 bg-white rounded-lg shadow ">
//                             <button
//                                 type="button"
//                                 class="absolute z-10 top-0 right-2.5 text-gray-400  hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-800 dark:hover:text-white"
//                                 onClick={() => setShowModal(false)}
//                             >
//                                 <svg
//                                     class="w-5 h-5"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         fill-rule="evenodd"
//                                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                                         clip-rule="evenodd"
//                                     ></path>
//                                 </svg>
//                             </button>
//                             <div class="py-6 px-6 lg:px-8 z-50">
//                                 <h3 class="mb-4 text-xl font-medium text-gray-900 ">
//                                     Add Your Note On Daily Basis
//                                 </h3>
//                                 <form class="space-y-6" onSubmit={submitNote}>
//                                     <div>
//                                         <input
//                                             type="text"
//                                             className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 text-teal-800 outline-none focus:border-teal-800"
//                                             placeholder="Title"
//                                             name='title'
//                                             onChange={e => setTitle(e.target.value)}
//                                             required

//                                         />
//                                     </div>
//                                     <div>
//                                         <textarea
//                                             className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 text-teal-800 outline-none focus:border-teal-800"
//                                             placeholder="Write your note..."
//                                             name='description'
//                                             onChange={e => setDes(e.target.value)}
//                                             required

//                                         ></textarea>
//                                     </div>
//                                     <button
//                                         type="submit"
//                                         class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
//                                     >
//                                         Add Note
//                                     </button>

//                                 </form>
//                             </div>
//                         </div>
//                     </div>

//                 ) : null
//             }
//         </>
//     );
// }

