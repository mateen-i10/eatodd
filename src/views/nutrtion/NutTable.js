import NutrtionPrefModel from "../home/options/components/NutrtionPrefModel"
import React from "react"
import { MoreVertical, Edit, Trash } from 'react-feather'
import {Table, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Input} from 'reactstrap'
import {Label} from "recharts"


const NutTable = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                   <div className="col-12">
                       <NutrtionPrefModel/>
                   </div>
                </div>
                <div className="row">
                    <Table hover responsive>
                        <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Fat</th>
                            <th>Protein</th>
                            <th>Carbs</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <Input type="checkbox" style={{ width:'25px', height:'25px'}}/>
                                <Label check>
                                    Some other input
                                </Label>
                            </td>
                            <td>
                                6
                            </td>
                            <td>
                                5
                            </td>
                            <td>
                                6
                            </td>
                            <td>
                                <UncontrolledDropdown>
                                    <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                                        <MoreVertical size={15} />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                            <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                                        </DropdownItem>
                                        <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                            <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input type="checkbox" style={{ width:'25px', height: '25px'}}/>
                                <Label check>
                                    1
                                </Label>
                            </td>
                            <td>Ronald Frest</td>
                            <td>
                                8
                            </td>
                            <td>
                                10
                            </td>
                            <td>
                                <UncontrolledDropdown>
                                    <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                                        <MoreVertical size={15} />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                            <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                                        </DropdownItem>
                                        <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                            <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input type="checkbox" style={{ width:'25px', height: '25px'}}/>
                                <Label check>
                                    2
                                </Label>
                            </td>
                            <td>Jack Obes</td>
                            <td>
                                9
                            </td>
                            <td>
                                6
                            </td>
                            <td>
                                <UncontrolledDropdown>
                                    <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                                        <MoreVertical size={15} />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                            <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                                        </DropdownItem>
                                        <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                            <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input type="checkbox" style={{ width:'25px', height: '25px'}}/>
                                <Label check>
                                    3
                                </Label>
                            </td>
                            <td>Jerry Milton</td>
                            <td>
                                5
                            </td>
                            <td>
                                6
                            </td>
                            <td>
                                <UncontrolledDropdown>
                                    <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                                        <MoreVertical size={15} />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                            <Edit className='me-50' size={15} /> <span className='align-middle'>Edit</span>
                                        </DropdownItem>
                                        <DropdownItem href='/' onClick={e => e.preventDefault()}>
                                            <Trash className='me-50' size={15} /> <span className='align-middle'>Delete</span>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}
export default NutTable