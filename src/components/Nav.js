import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
export default function Nav() {

    return (

        <nav>
            <ul className="nav-links">
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/doctors'>
                        Doctors
                    </Link>
                </li>
                <li>
                    <Link to='/consult'>
                        Consult
                    </Link>
                </li>
                <li>
                    <Link to='/pharmacy'>
                        Pharmacy
                    </Link>
                </li>
                <li>
                    <Link to='/diagnostics'>
                        Diagnostics
                    </Link>
                </li>
            </ul>
            <div className="search">
                <InputGroup className="mb-3">
                    <DropdownButton
                        variant="outline-secondary"
                        title="States "
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">Hydrabad</Dropdown.Item>
                        <Dropdown.Item href="#">Bengalore</Dropdown.Item>
                        <Dropdown.Item href="#">Channai</Dropdown.Item>
                        <Dropdown.Divider />
                       <Dropdown.Item href="#">Mumbail</Dropdown.Item>
                    </DropdownButton>
                    <FormControl aria-label="Text input with dropdown button" />
                </InputGroup>

            </div>
            
            <div className="signup">
                <Link to='/signup'>
                
                     <button className="button button-primary"  >Login / Signup</button>
                </Link>
            </div>
        </nav>

    )
}
