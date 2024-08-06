import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Layout from './layout'
import { useGetCategoriesQuery } from './redux/feature/categories/categoriesApi'
import { setCategories } from './redux/feature/categories/categoryAction'

function App() {
  const dispatch = useDispatch()
  const { data: { results = [] } = {} } = useGetCategoriesQuery(undefined)
  

  // set categories in redux store
  useEffect(() => {
    dispatch(setCategories(results))
  }, [dispatch, results])
  return (
    <Layout />
  )
}

export default App
