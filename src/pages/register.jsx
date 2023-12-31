import React, { useState } from "react";
import Media from '../images/media-icon.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, username);

            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on(

            (error) => {
                setErr(true);
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateProfile(res.user, {
                        username,
                        photoURL: downloadURL,
                    });
                    await setDoc(doc(db, "users", res.user.uid), {
                        uid: res.user.uid,
                        username,
                        email,
                        photoURL: downloadURL
                    });
                    await setDoc(doc(db, "userChats", res.user.uid), {});
                    navigate("/");

                });
            }
            ); 

        } catch(err) {
            setErr(true);
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">ReactChat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input style={{display: "none"}}type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Media} alt="" />
                        <span>Upload a profile picture</span>
                    </label>
                    <button>Register</button>
                    {err && <span>Something went wrong.</span>}
                </form>
                <p>Already have an account? <span style={{color: "#1abc9c"}}>Log In.</span></p>
            </div>
        </div>
    )
}

export default Register