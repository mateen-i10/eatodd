// ** Third Party Components
import classnames from 'classnames'
import {Box, DollarSign, TrendingUp, User} from 'react-feather'

// ** Custom Components
// import Avatar from '@core/components/avatar'
import Avatar from "../../@core/components/avatar"
// ** Reactstrap Imports
import {Card, CardBody, CardHeader, CardText, CardTitle, Col, Row} from 'reactstrap'


const StatsCard = ({cols}) => {
    const data = [
        {
            title: '230k',
            subtitle: 'Sales',
            color: 'light-primary',
            icon: <TrendingUp size={24}/>
        },
        {
            title: '8.549k',
            subtitle: 'Customers',
            color: 'light-info',
            icon: <User size={24}/>
        },
        {
            title: '1.423k',
            subtitle: 'Products',
            color: 'light-danger',
            icon: <Box size={24}/>
        },
        {
            title: '$9745',
            subtitle: 'Revenue',
            color: 'light-success',
            icon: <DollarSign size={24}/>
        },
        {
            title: '$9745',
            subtitle: 'Revenue',
            color: 'light-success',
            icon: <DollarSign size={24}/>
        },
        {
            title: '$9745',
            subtitle: 'Revenue',
            color: 'light-success',
            icon: <DollarSign size={24}/>
        }
    ]

    const renderData = () => {
        return data.map((item, index) => {

            const colMargin = Object.keys(cols)
            const margin = index === 2 ? 'sm' : colMargin[0]
            return (
                <Col
                    key={index}
                    {...cols}
                    className={classnames({
                        [`mb-2 mb-${margin}-0`]: index !== data.length - 1
                    })}
                >
                    <div className='d-flex align-items-center'>
                        <Avatar color={item.color} icon={item.icon} className='me-2'/>
                        <div className='my-auto'>
                            <h4 className='fw-bolder mb-0' style={{color: "green"}}>{item.title}</h4>
                            <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
                        </div>
                    </div>
                </Col>
            )
        })
    }

    const today = () => {
        const d = new Date()
        const month = d.getMonth()
        const year = d.getFullYear()
        const hour = d.getHours()
        const mins = d.getMinutes()
        const day = d.getDay()

        return (`${day  }:${  month  }:${  year  }:${  hour  }:${  mins}`)
    }

    return (
        <Card className='card-statistics'>
            <CardHeader>
                <CardTitle tag='h4'>Orders</CardTitle>
                <CardText className='card-text font-small-2 me-25 mb-0'>{today()}</CardText>
            </CardHeader>
            <CardBody className='statistics-body'>
                <Row>{renderData()}</Row>
            </CardBody>
        </Card>
    )
}

export default StatsCard
