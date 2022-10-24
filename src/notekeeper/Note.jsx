import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onSnapshot, collection, doc, deleteDoc, orderBy } from 'firebase/firestore'
import { db } from '../firebase'

function Note({ searchtext }) {
    const noteCollectionRef = collection(db, 'Notes');
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(noteCollectionRef, snapshot => {
            setNotes(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        return () => {
            unsubscribe()
        }
    }, [])

    function deleteNote(id) {
        const noteRef = doc(db, 'Notes', id);
        deleteDoc(noteRef, id);
    }

    return (


        <div class="container mt-4 mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">

                {
                    notes.filter((note) => note.data.title.toLowerCase().includes(searchtext) || note.data.description.toLowerCase().includes(searchtext)).map((note) => {
                        return (
                            <div class="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200 "
                                key={note.id}
                                id={note.id}
                                style={{ height: "150px" }}
                            >
                                <div class="m-3 whitespace-normal">


                                    <div className='flex justify-between relative'>
                                        <h2 class="text-xl mb-2 font-bold"> <Link to={`/notes/${note.id}`}>{note.data.title.length > 20 ? note.data.title.substring(0, 20) + '...' : note.data.title}</Link></h2>
                                        <div className=' text-center text-sm text-teal-800 font-mono bg-teal-100 inline rounded-full px-2 absolute right-3 animate-pulse'>
                                            <span className="material-symbols-outlined text-red-600 text-xl cursor-pointer "
                                                onClick={() => {
                                                    deleteNote(note.id)
                                                }}
                                            >
                                                delete
                                            </span>
                                        </div>
                                    </div>
                                    <p class="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">
                                        {note.data.description.length > 100 ? note.data.description.substring(0, 80) + '...' : note.data.description}
                                    </p>
                                </div>
                            </div>

                        )
                    })
                }

            </div>
        </div>

    )
}

export default Note