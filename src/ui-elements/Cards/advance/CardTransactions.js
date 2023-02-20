// ** Custom Components
import Avatar from '@components/avatar'

// ** Icons Imports
import * as Icon from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {loadProductsByRestaurant} from "../../../redux/restaurant/actions"

const CardTransactions = ({selectedRestaurant}) => {

  const miscData = useSelector(state => state.restaurant.miscData)
  const [currentPage] = useState(miscData && miscData.pageIndex ? miscData.pageIndex : 1)
  const [pageSize] = useState(10)
  const [searchValue] = useState('')
  const dispatch = useDispatch()

  const productList = useSelector(state => state.restaurant.productList)
  console.log(productList, "lets see")

  useEffect(() => {
    dispatch(loadProductsByRestaurant(currentPage, pageSize, searchValue, selectedRestaurant))
  }, [selectedRestaurant])

  const transactionsArr = [
    {
      title: 'Wallet',
      color: 'light-primary',
      subtitle: 'Starbucks',
      amount: '- $74',
      Icon: Icon['Pocket'],
      down: true
    },
    {
      title: 'Bank Transfer',
      color: 'light-success',
      subtitle: 'Add Money',
      amount: '+ $480',
      Icon: Icon['Check']
    },
    {
      title: 'Paypal',
      color: 'light-danger',
      subtitle: 'Add Money',
      amount: '+ $590',
      Icon: Icon['DollarSign']
    },
    {
      title: 'Mastercard',
      color: 'light-warning',
      subtitle: 'Ordered Food',
      amount: '- $12',
      Icon: Icon['CreditCard'],
      down: true
    },
    {
      title: 'Transfer',
      color: 'light-info',
      subtitle: 'Refund',
      amount: '+ $98',
      Icon: Icon['TrendingUp']
    }
  ]
  const renderTransactions = () => {

    return transactionsArr.map(item => {
      return (
        <div key={item.title} className='transaction-item'>
          <div className='d-flex'>
            <Avatar className='rounded' color={item.color} icon={<item.Icon size={18} />} />
            <div>
              <h6 className='transaction-title'>{item.title}</h6>
              <small>{item.subtitle}</small>
            </div>
          </div>
          <div className={`fw-bolder ${item.down ? 'text-danger' : 'text-success'}`}>{item.amount}</div>
        </div>
      )
    })
  }

  console.log(selectedRestaurant, "lets see")
  return (
    <Card className='card-transaction'>
      <CardHeader>
        <CardTitle tag='h4'>{productList.length ? "Product by restaurant" : "Transactions"}</CardTitle>
        <Icon.MoreVertical size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>
        {productList.length !== 0 ? productList.map(obj => (
          <div key={obj.name} className='transaction-item'>
            <div className='d-flex'>
              <Avatar className='rounded' color={obj.color}/>
              <div>
                <h6 className='transaction-title'>{obj.name}</h6>
                {/*<small>{item.subtitle}</small>*/}
              </div>
            </div>
            <div>{obj.wholePrice}</div>
          </div>)) : renderTransactions()}
      </CardBody>
    </Card>
  )
}

export default CardTransactions
