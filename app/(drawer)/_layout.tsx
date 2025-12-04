import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: '#4CAF50',
        drawerInactiveTintColor: '#666',
      }}
    >
      <Drawer.Screen
        name="animals"
        options={{
          drawerLabel: 'Animals',
          title: 'Animals',
        }}
      />
    </Drawer>
  );
}
