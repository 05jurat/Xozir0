import React, {useState, useEffect} from 'react'
import CommonSection from '../components/Ul/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../styles/shop.css'
import ProductList from '../components/Ul/ProductsList'
import useGetData from '../custom-hooks/useGetData'
const Shop = () => {

  const {data: products, loading} = useGetData('products')

  const [productsData , setProductsData] = useState(products)

  const handleFilter = e =>{
    const filterValue = e.target.value
    if(filterValue === 'meat'){
      const filteredProducts =  products.filter(item => item.category === 'meat')
      setProductsData(filteredProducts)
    }

    if(filterValue === 'drinks'){
      const filteredProducts =  products.filter(item => item.category === 'drinks')
      setProductsData(filteredProducts)
    }

    if(filterValue === 'vegetables'){
      const filteredProducts =  products.filter(item => item.category === 'vegetables')
      setProductsData(filteredProducts)
    }

    if(filterValue === 'spices'){
      const filteredProducts =  products.filter(item => item.category === 'spices')
      setProductsData(filteredProducts)
    }

    if(filterValue === 'shampoos'){
      const filteredProducts =  products.filter(item => item.category === 'shampoos')
      setProductsData(filteredProducts)
    }

  }
 
  const handleSearch = e =>{
    const searchTerm = e.target.value

    const searchProducts = products.filter(item=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

     setProductsData( searchProducts )
  }

  const [trendingProduct, setTrendingProduct] = useState([])
  const [bestSalesProduct, setBestSalesProduct] = useState([])
  const [mobileProduct, setMobileProduct] = useState([])
  const [wirelessProduct, setWirelessProduct] = useState([])
  const [popularProduct, setPopularProduct] = useState([])

  useEffect(() =>{
    const filterdTrendingProducts = products.filter(item => item.category === ' meat');

    const filterdBestSalesProducts = products.filter(item => item.category === 'drinks');

    const filterdMobileProducts = products.filter(item => item.category === 'vegetables');

    const filterdWiralessProducts = products.filter(item => item.category === 'spices');

    const filterdPopularProducts = products.filter(item => item.category === 'shampoos');

    setTrendingProduct(filterdTrendingProducts)
    setBestSalesProduct(filterdBestSalesProducts)
    setMobileProduct(filterdMobileProducts)
    setWirelessProduct(filterdWiralessProducts)
    setPopularProduct(filterdPopularProducts)

  }, [products]);



  return <Helmet title='Shop'>
  <CommonSection title = 'Products'/>

  <section>
    <Container>
      <Row>
        <Col lg='3' md='6'>
          <div className="filter__widget">
            <select onChange={handleFilter}>
              <option>Filter By Catagory</option>
              <option value="meat">Meat</option>
              <option value="drinks">Drinks</option>
              <option value="vegetables">Vegetables</option>
              <option value="spices">Spices</option>
              <option value="shampoos">Shampoos</option>
            </select>
          </div>
        </Col>
        <Col lg='3' md='6' className='text-end'>
        <div className="filter__widget">
            <select>
              <option>Sort By</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
        </Col>
        <Col lg='6' md='12'>
          <div className="search__box">
            <input type="text" placeholder='Search.....' onChange={handleSearch}/>
            <span>
              <i className='ri-search-line'></i>
              </span>
          </div>
        </Col>
      </Row>
    </Container>
  </section>

  <section className='pt-0'>
    <Container>
      <Row>
        {/* {
          productsData.length === 0? <h1 className='text-center fs-4'>No products are found!</h1>
          :<ProductList data={productsData}/>
        } */}
         {
            loading ? <h5 className='fw-bold'>Loading.....</h5> :
            <ProductList data={productsData}/>
          }
      </Row>
    </Container>
  </section>
  </Helmet>
}

export default Shop