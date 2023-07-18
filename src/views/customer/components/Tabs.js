import {Card, ListGroup, ListGroupItem} from 'reactstrap'
import {useState} from "react"


const Tabs = ({toggleTab}) => {

    const [flag, setFlag] = useState(0)

    return (
        <div className='text-start' style={{marginTop: 30}}>
            <section>
                <Card>
                    <ListGroup>
                        <ListGroupItem
                            className='cursor-pointer'
                            onClick={ () => {
                            toggleTab('1')
                            setFlag(1)
                            }}
                            style={{ backgroundColor: flag === 1 ? '#81be41' : 'white',
                                     color: flag === 1 ? 'white' : '#5e5873',
                                     fontWeight: flag === 1 ? 700 : 500}}>
                            Account
                        </ListGroupItem>
                        <ListGroupItem
                            className='cursor-pointer'
                            onClick={ () => {
                            toggleTab('2')
                            setFlag(2)
                            }}
                            style={{ backgroundColor: flag === 2 ? '#81be41' : 'white',
                                     color: flag === 2 ? 'white' : '#5e5873',
                                     fontWeight: flag === 2 ? 700 : 500}}>
                            Billing & Plans
                        </ListGroupItem>
                        <ListGroupItem
                            className='cursor-pointer'
                            onClick={ () => {
                                toggleTab('3')
                                setFlag(3)
                            }}
                            style={{ backgroundColor: flag === 3 ? '#81be41' : 'white',
                                color: flag === 3 ? 'white' : '#5e5873',
                                fontWeight: flag === 3 ? 700 : 500}}>
                            Reward Points
                        </ListGroupItem>
                        <ListGroupItem
                            className='cursor-pointer'
                            onClick={ () => {
                            toggleTab('4')
                            setFlag(4)
                            }}
                            style={{ backgroundColor: flag === 4 ? '#81be41' : 'white',
                                     color: flag === 4 ? 'white' : '#5e5873',
                                     fontWeight: flag === 4 ? 700 : 500}}>
                            Address
                        </ListGroupItem>
                        <ListGroupItem
                            className='cursor-pointer'
                            onClick={ () => {
                            toggleTab('5')
                            setFlag(5)
                            }}
                            style={{ backgroundColor: flag === 5 ? '#81be41' : 'white',
                                     color: flag === 5 ? 'white' : '#5e5873',
                                     fontWeight: flag === 5 ? 700 : 500}}>
                            Security
                        </ListGroupItem>
                        <ListGroupItem
                            className='cursor-pointer'
                            onClick={ () => {
                                toggleTab('8')
                                setFlag(8)
                            }}
                            style={{ backgroundColor: flag === 8 ? '#81be41' : 'white',
                                color: flag === 8 ? 'white' : '#5e5873',
                                fontWeight: flag === 8 ? 700 : 500}}>
                            Active Orders
                        </ListGroupItem>
                        {/*<ListGroupItem
                            className='cursor-pointer'
                            onClick={ () => {
                            toggleTab('6')
                            setFlag(6)
                            }}
                            style={{ backgroundColor: flag === 6 ? '#81be41' : 'white',
                                     color: flag === 6 ? 'white' : '#5e5873',
                                     fontWeight: flag === 6 ? 700 : 500}}>
                            Meals
                        </ListGroupItem>*/}
                        <ListGroupItem
                            className='cursor-pointer'
                            onClick={ () => {
                            toggleTab('7')
                            setFlag(7)
                            }}
                            style={{ backgroundColor: flag === 7 ? '#81be41' : 'white',
                                     color: flag === 7 ? 'white' : '#5e5873',
                                     fontWeight: flag === 7 ? 700 : 500}}>
                            History
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </section>
        </div>
    )
}

export default Tabs
