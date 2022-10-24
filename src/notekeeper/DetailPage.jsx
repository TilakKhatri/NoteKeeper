import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { onSnapshot, collection, doc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
function DetailPage() {
    const [notes, setNotes] = useState({});
    const { noteId } = useParams();
    const noteRef = doc(db, 'Notes', noteId)
    // onSnapshot(noteRef, (doc) => {
    //     console.log(doc.data());

    // })
    useEffect(() => {
        const unsubscribe = onSnapshot(noteRef, snapshot => {
            setNotes({
                title: snapshot.data().title,
                description: snapshot.data().description,
                created: snapshot.data().created
            })
        })
        return () => {
            unsubscribe()
        }
    }, [])
    // console.log(noteId)
    console.log(notes)
    // const time = new Date(Date.UTC(1970, 0, 1)); // Epoch
    // var time = new Date();
    // time.setTime(notes.created.seconds * 1000);
    // console.log(time.toDateString())
    const createdTime = new Date();
    // console.log(createdTime)
    return (



        <div className='container mt-12 mx-auto text-center' style={{ minWidth: "300px" }}>

            <div class="card m-4  border border-gray-400 rounded-lg ">

                <div class="m-4">
                    <div className='flex justify-between items-center mb-1 text-start'>

                        <div>
                            <h2 className="text-2xl  font-bold mb-1">{notes.title}</h2>
                            <span className='text-sm text-gray-400'>{notes.created}</span>
                        </div>
                        <hr ></hr>
                    </div>
                    <p className="font-light font-mono text-lg text-gray-700 hover:text-gray-900 transition-all duration-200 text-start">
                        {notes.description}
                    </p>
                </div>

            </div>
            <button type="button" class="mt-4 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <span className="material-symbols-outlined text-white text-3xl cursor-pointer " >
                    <Link to='/'>home</Link>
                </span>
            </button>
        </div>


    )
}

export default DetailPage