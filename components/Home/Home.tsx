import { useContext } from 'react'
import { Text, View } from 'react-native'
import Header from '../Header/Header'
import { ThemeContext } from '../ThemeContext/ThemeContext'

const Home = () => {
  const theme = useContext(ThemeContext)
  return (
    <View>
        <Header/>
        <Text style={{color: theme.primary.main}}>Home</Text>
    </View>
  )
}

export default Home
