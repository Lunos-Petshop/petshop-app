import { Drawer } from 'expo-router/drawer';
import { View, StyleSheet, ScrollView } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import LunosLogo from '@/components/LunosLogo';
import AccountInfo from '@/components/AccountInfo';

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.logoContainer}>
        <LunosLogo size="medium" />
      </View>
      <AccountInfo 
        name="John Doe" 
        email="john.doe@lunos.com" 
        role="Manager" 
      />
      <View style={styles.menuContainer}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer 
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: '#6366f1',
        drawerInactiveTintColor: '#6b7280',
        drawerStyle: {
          backgroundColor: '#ffffff',
        },
      }}
    >
      <Drawer.Screen
        name="pets"
        options={{
          drawerLabel: 'Pets',
          title: 'Pets',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="paw" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule"
        options={{
          drawerLabel: 'Schedule',
          title: 'Schedule',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="owners"
        options={{
          drawerLabel: 'Owners',
          title: 'Owners',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="races"
        options={{
          drawerLabel: 'Races',
          title: 'Races',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="services"
        options={{
          drawerLabel: 'Services',
          title: 'Services',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cut" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="employees"
        options={{
          drawerLabel: 'Employees',
          title: 'Employees',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="animals"
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  logoContainer: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  menuContainer: {
    flex: 1,
    paddingTop: 10,
  },
});
