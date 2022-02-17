import * as React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import _styles from '@styles'
import { styles } from './HomeStyle'

export interface Props { }

export default function HomeScreen(props: Props): React.ReactElement {

  return (
    <View style={_styles.flx1}>
      <SafeAreaView>
        <Text>Home Screen</Text>
      </SafeAreaView>
    </View>
  )
}

