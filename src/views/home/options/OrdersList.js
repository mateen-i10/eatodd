
import {Button, Offcanvas, OffcanvasHeader, OffcanvasBody, Table} from 'reactstrap'
import {useState} from "react"

const orderList = (props) => {

    const [canvasBackdrop, setCanvasBackdrop] = useState(false)

    const toggleCanvasBackdrop = () => {
        setCanvasBackdrop(false)
        props.onCloseModal(!props.openCan)
    }

    console.log('products', props.productList)

    return (
        <div className='demo-inline-spacing'>
            <Offcanvas
                backdrop={canvasBackdrop}
                direction='end'
                isOpen={props.openCan}
                style={{height: 300}}
            >
                <OffcanvasHeader onClick={toggleCanvasBackdrop} style={{backgroundColor: '#8aca46'}}>
                    <h4 style={{color: 'white'}}>Selected Items List <span className='cursor-pointer' style={{paddingLeft: 100}}>X</span></h4>
                </OffcanvasHeader>
                <OffcanvasBody className='my-auto mx-0 flex-grow-0'>
                    <Table>
                        <th style={{color: '#81be41'}}>Item Name</th>
                        <th style={{color: '#81be41'}}>Price</th>
                        {props.productList && props.productList.map(p => {
                            return  <tbody>
                                    <td style={{borderBottom: '1px solid'}}>{p.name} ({p.options.map(op => op.isSelected && op.name)})</td>
                                    <td className='text-center' style={{borderBottom: '1px solid'}}>{p.options.map(op => op.isSelected && op.price)}</td>
                                </tbody>
                        })}
                    </Table>
                    <Button block outline color='secondary' onClick={toggleCanvasBackdrop}>
                        Cancel
                    </Button>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}

export default orderList