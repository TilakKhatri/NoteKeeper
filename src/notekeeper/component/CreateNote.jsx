import { useState } from 'react';
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';

function CreateNote() {
    const [title, setTitle] = useState("");
    const [description, setDes] = useState("");
    function submitNote(e) {
        e.preventDefault();

        const noteRef = collection(db, "Notes");
        addDoc(noteRef, {
            title,
            description,
            created: new Date().toDateString()
        }).then((res) => {
            alert('successfully adde please click home button')

        }).catch(err => console.log(err.code))

    }

    return (
        <div className='flex flex-col text-center justify-center items-center'>

            <div className="container mx-auto my-10 p-1 max-w-md bg-white rounded-lg border border-gray-200 shadow-md " >
                <div className="py-6 px-6 lg:px-8 z-50">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 ">
                        Add Your Note On Daily Basis
                    </h3>
                    <form class="space-y-6" onSubmit={submitNote}>
                        <div>
                            <input
                                type="text"
                                className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 text-teal-800 outline-none focus:border-teal-800"
                                placeholder="Title"
                                name='title' zz
                                onChange={e => setTitle(e.target.value)}
                                required

                            />
                        </div>
                        <div>
                            <textarea
                                className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 text-teal-800 outline-none focus:border-teal-800"
                                placeholder="Write your note..."
                                name='description'
                                onChange={e => setDes(e.target.value)}
                                required

                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            class="w-full text-white bg-blue-700 font-bold text-xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
                        >
                            Add Note
                        </button>

                    </form>
                </div>
            </div>
            <button type="button" class="mt-2 ">
                <span className="material-symbols-outlined text-gray-800 text-4xl cursor-pointer " >
                    <Link to='/'>home</Link>
                </span>
            </button>
        </div>
    )
}

export default CreateNote