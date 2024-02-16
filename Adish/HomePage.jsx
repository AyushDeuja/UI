import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavBar from './HomeComp/NavBar'
import ImageContainer from './HomeComp/ImageContainer'
import BodyContainer from './HomeComp/BodyContainer'
import BodyContainerr from './HomeComp/BodyContainerr'
import LogOut from './HomeComp/LogOut'
import Footer from './HomeComp/Footer'

export default function HomePage() {
  return (
    <View>
        <NavBar
        icon={'arrow-left'}
        text={'Setting'}
        />
        <View style={{bottom:20}}>
        <ImageContainer
        icon={'file-pen'}
        name={'Chris Rock'}
        number={'9807654321'}
        />
        </View>
        <BodyContainer
        text={'Account Info'}
        icon={'greater-than'}
        />
        <View style={{paddingVertical:20}}>
        <BodyContainerr
        text={'Change Password'}
        icon={'greater-than'}
        />
        </View>
        <View style={{paddingVertical:220}}>
        <LogOut
        text={'Log Out'}
        />
        <Footer/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})