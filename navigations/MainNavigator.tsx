import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import IMCScreen from "../screens/IMCScreen";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FormularioScreen from "../screens/FormularioScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ListaLocalScreen from "../screens/listas/ListaLocalScreen";
import ListaExternaScreen from "../screens/listas/ListaExternaScreen";
import ListaNueva from "../screens/listas/ListaNueva";

const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Tabs" component={MyTabs} />
        </Stack.Navigator>
    )
}
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Top">
            <Tab.Screen name="Calculadora" component={CalculadoraScreen} />
            <Tab.Screen name="IMC" component={IMCScreen}/>
            <Tab.Screen name="Formulario" component={FormularioScreen}/>
            <Tab.Screen name="Top" component={MyTopTabs} /> 
        </Tab.Navigator>
    )
}
const Top = createMaterialTopTabNavigator();
function MyTopTabs(){ 
    return (
        <Top.Navigator  initialRouteName="Lista Externa">
            <Top.Screen name="Local" component={ListaLocalScreen} />
            <Top.Screen name="Lista Externa" component={ListaExternaScreen}/>
            <Top.Screen name="Lista Nueva" component={ListaNueva}/>
        </Top.Navigator>
    )
}
export default function NavegadorPrincipal() { 
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}

