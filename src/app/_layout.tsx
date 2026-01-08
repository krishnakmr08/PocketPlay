import { Colors } from '@/utils/Constants'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const Root = () => {
    return (
        <>
                <StatusBar
                    style='light'
                    backgroundColor={Colors.tertiary}
                    translucent={false}
                />
                <Stack initialRouteName='index' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='index' />
                    <Stack.Screen
                        name='auth'
                        options={{
                            animation: 'fade',
                            animationDuration: 2000,
                            animationTypeForReplace: 'push'
                        }}
                    />
                    <Stack.Screen
                        name='home'
                        options={{
                            animation: 'fade',
                            animationDuration: 2000,
                            animationTypeForReplace: 'push'
                        }}
                    />
                    <Stack.Screen
                        name='playlist'
                    />
                </Stack>
            
        </>
    )
}

export default Root