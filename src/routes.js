import React, { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'


const Home = lazy(() => import('./components/home/home'))
const Menu = lazy(() => import('./components/menu/menu'))
const PrivateDinning = lazy(() => import('./components/private-dinning/PrivateDinning'))
const About = lazy(() => import('./components/about/about'))




const AppRouter = () => {


    const routes = useRoutes([
        {path:'/', element:<Home /> },
        {path:'/private-dinning', element:<PrivateDinning /> },
        {path:'/menu', element:<Menu /> },
        {path:'/about', element:<About /> },
      ])

      return routes


   
}

export default AppRouter