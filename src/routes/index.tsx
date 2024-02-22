import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "./drowes.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes/>
    </NavigationContainer>
  );
}
