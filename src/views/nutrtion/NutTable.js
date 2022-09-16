import NutrtionPrefModel from "../home/options/components/NutrtionPrefModel"
import React from "react"
import {Table} from 'reactstrap'


const NutTable = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <NutrtionPrefModel/>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center mt-3 mb-3">
                        <div className="col-11 text-center">
                            <Table hover responsive>
                                <thead className="">
                                <tr className="">
                                    {/*<th></th>*/}
                                    <th style={{fontSize: "1.5rem", width: 320}}> Your Meal</th>
                                    <th style={{fontSize: "1.5rem"}}>Calories</th>
                                    <th style={{
                                        fontSize: "1.5rem",
                                        color: "#9c1f16"
                                    }}>Fat
                                    </th>
                                    <th style={{fontSize: "1.5rem"}}>Protein</th>
                                    <th style={{fontSize: "1.5rem", color: "#c98200"}}>Carbs</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    {/*<td>*/}
                                    {/*    <Input type="checkbox" style={{width: '25px', height: '25px'}}/>*/}
                                    {/*    <Label check>*/}
                                    {/*        Some other input*/}
                                    {/*    </Label>*/}
                                    {/*</td>*/}
                                    <td style={{fontSize: "1.4rem"}}>
                                        Ronald Frest
                                    </td>
                                    <td style={{fontSize: "1.4rem"}}>201Cal</td>
                                    <td style={{fontSize: "1.4rem", color: "#9c1f16", backgroundColor: "#ededed"}}>
                                        5
                                    </td>
                                    <td style={{fontSize: "1.4rem"}}>
                                        6
                                    </td>

                                    <td style={{fontSize: "1.4rem", color: "#c98200", backgroundColor: "#ededed"}}>12
                                        {/*    <UncontrolledDropdown>*/}
                                        {/*        <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>*/}
                                        {/*            <MoreVertical size={15}/>*/}
                                        {/*        </DropdownToggle>*/}
                                        {/*        <DropdownMenu>*/}
                                        {/*            <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                                        {/*                <Edit className='me-50' size={15}/> <span*/}
                                        {/*                className='align-middle'>Edit</span>*/}
                                        {/*            </DropdownItem>*/}
                                        {/*            <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                                        {/*                <Trash className='me-50' size={15}/> <span*/}
                                        {/*                className='align-middle'>Delete</span>*/}
                                        {/*            </DropdownItem>*/}
                                        {/*        </DropdownMenu>*/}
                                        {/*    </UncontrolledDropdown>*/}
                                    </td>
                                </tr>
                                <tr>
                                    {/*<td>*/}
                                    {/*    <Input type="checkbox" style={{width: '25px', height: '25px'}}/>*/}
                                    {/*    <Label check>*/}
                                    {/*        1*/}
                                    {/*    </Label>*/}
                                    {/*</td>*/}
                                    <td style={{fontSize: "1.4rem"}}>Ronald Frest</td>
                                    <td style={{fontSize: "1.4rem"}}>201Cal</td>
                                    <td style={{fontSize: "1.4rem", color: "#9c1f16", backgroundColor: "#ededed"}}>
                                        8
                                    </td>
                                    <td style={{fontSize: "1.4rem"}}>
                                        10
                                    </td>
                                    <td style={{fontSize: "1.4rem", color: "#c98200", backgroundColor: "#ededed"}}> 11
                                        {/*    <UncontrolledDropdown>*/}
                                        {/*        <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>*/}
                                        {/*            <MoreVertical size={15}/>*/}
                                        {/*        </DropdownToggle>*/}
                                        {/*        <DropdownMenu>*/}
                                        {/*            <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                                        {/*                <Edit className='me-50' size={15}/> <span*/}
                                        {/*                className='align-middle'>Edit</span>*/}
                                        {/*            </DropdownItem>*/}
                                        {/*            <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                                        {/*                <Trash className='me-50' size={15}/> <span*/}
                                        {/*                className='align-middle'>Delete</span>*/}
                                        {/*            </DropdownItem>*/}
                                        {/*        </DropdownMenu>*/}
                                        {/*    </UncontrolledDropdown>*/}
                                    </td>
                                </tr>
                                <tr>
                                    {/*<td>*/}
                                    {/*    <Input type="checkbox" style={{width: '25px', height: '25px'}}/>*/}
                                    {/*    <Label check>*/}
                                    {/*        2*/}
                                    {/*    </Label>*/}
                                    {/*</td>*/}
                                    <td style={{fontSize: "1.4rem"}}>Jack Obes</td>
                                    <td style={{fontSize: "1.4rem"}}>201Cal</td>
                                    <td style={{fontSize: "1.4rem", color: "#9c1f16", backgroundColor: "#ededed"}}>
                                        9
                                    </td>
                                    <td style={{fontSize: "1.4rem"}}>
                                        6
                                    </td>

                                    <td style={{fontSize: "1.4rem", color: "#c98200", backgroundColor: "#ededed"}}>7
                                        {/*    <UncontrolledDropdown>*/}
                                        {/*        <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>*/}
                                        {/*            <MoreVertical size={15}/>*/}
                                        {/*        </DropdownToggle>*/}
                                        {/*        <DropdownMenu>*/}
                                        {/*            <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                                        {/*                <Edit className='me-50' size={15}/> <span*/}
                                        {/*                className='align-middle'>Edit</span>*/}
                                        {/*            </DropdownItem>*/}
                                        {/*            <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                                        {/*                <Trash className='me-50' size={15}/> <span*/}
                                        {/*                className='align-middle'>Delete</span>*/}
                                        {/*            </DropdownItem>*/}
                                        {/*        </DropdownMenu>*/}
                                        {/*    </UncontrolledDropdown>*/}
                                    </td>
                                </tr>
                                <tr>
                                    {/*<td>*/}
                                    {/*    <Input type="checkbox" style={{width: '25px', height: '25px'}}/>*/}
                                    {/*    <Label check>*/}
                                    {/*        3*/}
                                    {/*    </Label>*/}
                                    {/*</td>*/}
                                    <td style={{fontSize: "1.4rem"}}>Jerry Milton</td>
                                    <td style={{fontSize: "1.4rem"}}>201Cal</td>
                                    <td style={{fontSize: "1.4rem", color: "#9c1f16", backgroundColor: "#ededed"}}>
                                        5
                                    </td>
                                    <td style={{fontSize: "1.4rem"}}>
                                        6
                                    </td>
                                    <td style={{fontSize: "1.4rem", color: "#c98200", backgroundColor: "#ededed"}}>
                                        7
                                        {/*<UncontrolledDropdown>*/}
                                        {/*    <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>*/}
                                        {/*        <MoreVertical size={15}/>*/}
                                        {/*    </DropdownToggle>*/}
                                        {/*    <DropdownMenu>*/}
                                        {/*        <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                                        {/*            <Edit className='me-50' size={15}/> <span*/}
                                        {/*            className='align-middle'>Edit</span>*/}
                                        {/*        </DropdownItem>*/}
                                        {/*        <DropdownItem href='/' onClick={e => e.preventDefault()}>*/}
                                        {/*            <Trash className='me-50' size={15}/> <span*/}
                                        {/*            className='align-middle'>Delete</span>*/}
                                        {/*        </DropdownItem>*/}
                                        {/*    </DropdownMenu>*/}
                                        {/*</UncontrolledDropdown>*/}
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NutTable