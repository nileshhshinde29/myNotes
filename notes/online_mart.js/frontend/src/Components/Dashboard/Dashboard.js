import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authenticationService } from '../../Service/auth.service'
import './dashboard.scss'
import SecondNavbar from '../Navbar/SecondNavbar'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { productService } from '../../Service/product.service'
import { categoryService } from '../../Service/categories.service'
import AddToCartModal from '../AddToCartModal/AddToCartModal'


function Dashboard() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [catagories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")

    useEffect(() => {
        categoryService.getCategories()
            .then(res => { setCategories(res); getCategoryByCat(res[0]?._id) })
            .catch(err => console.log(err))
    }, [])


    useEffect(() => {
        console.log('selectedCategory', selectedCategory)

        if (selectedCategory) {
            getCategoryByCat(selectedCategory)
        }
    }, [selectedCategory])

    const getCategoryByCat = (res) => {

        productService.getProductByCategory({ category: res })

            .then(res => setProducts(res))
            .catch(err => console.log(err))
    }









    const logout = () => {
        authenticationService.logout()
        navigate('/login')
    }
    return (
        <>
            <SecondNavbar {...{ catagories, setSelectedCategory, selectedCategory }} />
            {/* <button className='btn-primary' onClick={() => logout()}>logout</button> */}
            <div style={{ backgroundColor: 'gray', height: '80vh', overflowY: 'scroll', padding: '20px', display: 'flex', justifyContent: 'center' }}>
                <Grid container md={12} spacing={4}>
                    {
                        products?.map((item, index) =>
                            <Grid sm={6} md={4} item key={index}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="120"
                                        image="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.productName}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.productDetails}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button className='btn-primary' size="small">Buy now</Button>

                                        <AddToCartModal item={item} />
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>

            </div>

        </>
    )
}

export default Dashboard