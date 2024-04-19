import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'

const parseThousands = value => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

const RepositoryStats = props => {
  return (
    <View style={styles.container}>
      <View>
        <StyledText
          align='center'
          fontWeight='bold'
        >Stars
        </StyledText>
        <StyledText align='center'>{parseThousands(props.stargazersCount)}</StyledText>
      </View>
      <View>
        <StyledText
          align='center'
          fontWeight='bold'
        >{parseThousands(props.forksCount)}
        </StyledText>
        <StyledText align='center'>Forks</StyledText>
      </View>
      <View>
        <StyledText
          align='center'
          fontWeight='bold'
        >{props.reviewCount}
        </StyledText>
        <StyledText align='center'>Reviews</StyledText>
      </View>
      <View>
        <StyledText
          align='center'
          fontWeight='bold'
        >{props.ratingAverage}
        </StyledText>
        <StyledText align='center'>Rating Average</StyledText>
      </View>
    </View>
  )
}

export default RepositoryStats
