import NutrtionPrefModel from "../home/options/components/NutrtionPrefModel"
import React from "react"
import {Table} from 'reactstrap'

const NutTable = ({nutritionCal}) => {
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
                                {nutritionCal.length > 0 ? nutritionCal.map((item, i) => (<tr key={i}>
                                        <td style={{fontSize: "1.4rem"}}>{item.name}</td>
                                        <td style={{fontSize: "1.4rem"}}>{item.calories}</td>
                                        <td style={{fontSize: "1.4rem", color: "#9c1f16", backgroundColor: "#ededed"}}>
                                            {item.fat}
                                        </td>
                                        <td style={{fontSize: "1.4rem"}}>
                                            {item.protein}
                                        </td>
                                        <td style={{
                                            fontSize: "1.4rem",
                                            color: "#c98200",
                                            backgroundColor: "#ededed"
                                        }}> {item.carb}

                                        </td>
                                    </tr>)) : <tr className='fs-4 fw-bolder text-center text-uppercase text-primary justify-content-center'>
                                        <td colSpan={5} className='text-center '>No Nutrition
                                            Available
                                        </td>
                                    </tr>}

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