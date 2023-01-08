import React from 'react'
import { Link } from 'react-router-dom';

function Main() {
    return (
        <ol>
            <li>
                <Link to='/question1'>
                    Question-1
                </Link>
            </li>
            <li>
                <Link to='/question2'>
                    Question-2
                </Link>
            </li>
            <li>
                <Link to='/question3'>
                    Question-3
                </Link>
            </li>
            <li>
                <Link to='/question4'>
                    Question-4
                </Link>
            </li>
        </ol>
    );
}

export default Main