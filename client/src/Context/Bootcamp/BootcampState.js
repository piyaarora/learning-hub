import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid'
import BootcampContext from './BootcampContext';
import {
    ADD_BOOTCAMP,
    // GET_BOOTCAMP,
    // GET_BOOTCAMPS,
    // GET_BOOTCAMP_BY_DIST,
    // UPDATE_BOOTCAMP,
    // DELETE_BOOTCAMP,
    // UPLOAD_PHOTO
} from '../types'

const BootcampState = props => {
    const initialState = {
        bootcamps: [
            {
                "_id": "5d713995b721c3bb38c1f5d0",
                "user": "5d7a514b5d2c12c7449be045",
                "name": "Code your algorithms",
                "description": "It is a coding camp that focuses on the basics to advance concepts you need to get a high paying job as a software developer",
                "website": "https://www.youtube.com/user/mycodeschool",
                "phone": "9876542310",
                "email": "enroll@coders.com",
                "address": "access from anywhere online",
                "careers": [
                    "Software Development",
                    "Business"
                ],
                "housing": true,
                "jobAssistance": true,
                "jobGuarantee": false,
                "acceptGi": true
            },
            {
                "_id": "5d713a66ec8f2b88b8f830b8",
                "user": "5d7a514b5d2c12c7449be046",
                "name": "React web development",
                "description": "This camp has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX",
                "website": "https://www.freecodecamp.org/news/learn-react-course/",
                "phone": "(222) 222-2222",
                "email": "enroll@freecodecamp.com",
                "address": "online access from anywhere",
                "careers": [
                    "Web Development",
                    "UI/UX",
                    "Mobile Development"
                ],
                "housing": false,
                "jobAssistance": true,
                "jobGuarantee": false,
                "acceptGi": true
            },
            {
                "_id": "5d725a037b292f5f8ceff787",
                "user": "5c8a1d5b0190b214360dc031",
                "name": "Codemasters",
                "description": "Is coding your passion? Codemasters will give you the skills and the tools to become the best developer possible. We specialize in full stack web development and data science",
                "website": "https://codemasters.com",
                "phone": "(333) 333-3333",
                "email": "enroll@codemasters.com",
                "address": "MIT Roper,India",
                "careers": [
                    "Web Development",
                    "Data Science",
                    "Business"
                ],
                "housing": false,
                "jobAssistance": false,
                "jobGuarantee": false,
                "acceptGi": false
            },
            {
                "_id": "5d725a1b7b292f5f8ceff788",
                "user": "5c8a1d5b0190b214360dc032",
                "name": "Webdev bootcamp",
                "description": "This camp has one goal, and that is to make you a rockstar developer and/or designer with a six figure salary. We teach both development and UI/UX",
                "website": "https://www.udemy.com/course/the-web-developer-bootcamp",
                "phone": "(444) 444-4444",
                "email": "enroll@udemy.com",
                "address": "45 Upper College Rd Kingston RI 02881",
                "careers": [
                    "Mobile Development",
                    "Web Development",
                    "Data Science",
                    "Business"
                ],
                "housing": false,
                "jobAssistance": true,
                "jobGuarantee": true,
                "acceptGi": true
            }

        ]
    }

    const [state, dispatch] = useReducer(BootcampState, initialState);

    //Add Bootcamp
    const addBootcamp = bootcamp => {
        bootcamp.id = uuidv4();

        dispatch({ type: ADD_BOOTCAMP, payload: bootcamp })
    }

    return (
        <BootcampContext.Provider value={{
            bootcamps: state.bootcamps,
            addBootcamp
        }} >
            {props.children}
        </BootcampContext.Provider>
    )
}

export default BootcampState