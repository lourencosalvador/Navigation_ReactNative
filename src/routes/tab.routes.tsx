import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Feather} from '@expo/vector-icons'

import Feed from '../screens/Feed'
import New from '../screens/New'

const Tap = createBottomTabNavigator()


export default function TabRoutes(){
    return(
        <Tap.Navigator screenOptions={{ headerShown: false}}>
            <Tap.Screen 
              name='feed'
              component={Feed}
              options={
                {
                    tabBarIcon: ({color, size}) => <Feather color={color} size={size}  name='home'/>,
                    tabBarLabel: 'Inicio'
                }
              }
            />
            
            <Tap.Screen 
              name='new'
              component={New}
              options={
                {
                    tabBarIcon: ({color, size}) => <Feather color={color} size={size}   name='plus'/>,
                    tabBarLabel: 'Novo'
                }
              }
            />
        </Tap.Navigator>
    )
}
