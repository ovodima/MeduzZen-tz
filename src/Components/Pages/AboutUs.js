import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreateUsers from './CreateUsers';


export default function AboutUs() {
  return (
    <div>
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='/createuser'> Create User </Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                
                <Route path="/createuser" element={<CreateUsers />} />
                
          </Routes>
        </BrowserRouter>
    </div>
  )
}
