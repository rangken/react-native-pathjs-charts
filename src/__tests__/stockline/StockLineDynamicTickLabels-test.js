import 'react-native'
import React from 'react'
import StockLine from '../../StockLine'
import renderer from 'react-test-renderer'

let data = [
  [{
    "x": 0,
    "y": 47782
  }, {
    "x": 1,
    "y": 48497
  }, {
    "x": 2,
    "y": 77128
  }, {
    "x": 3,
    "y": 73413
  }]
]
let options = {
  width: 250,
  height: 250,
  color: '#2980B9',
  margin: {
    top: 10,
    left: 35,
    bottom: 30,
    right: 10
  },
  animate: {
    type: 'delayed',
    duration: 200
  },
  axisX: {
    showAxis: true,
    showLines: true,
    showLabels: true,
    showTicks: true,
    zeroAxis: false,
    orient: 'bottom',
    tickValues: [],
    labelFunction: ((v) => {
      let d = moment('2016-10-08 14:00','YYYY-MM-DD HH:mm')
      return d.add((v * 2),'hours').format('MM/DD/YY[\n]h:mm A')
    }),
    label: {
      fontFamily: 'Arial',
      fontSize: 8,
      fontWeight: true,
      fill: '#34495E'
    }
  },
  axisY: {
    showAxis: true,
    showLines: true,
    showLabels: true,
    showTicks: true,
    zeroAxis: false,
    orient: 'left',
    tickValues: [],
    label: {
      fontFamily: 'Arial',
      fontSize: 8,
      fontWeight: true,
      fill: '#34495E'
    }
  }
}

it('renders an example chart correctly', () => {
  let tree = renderer.create(
    <StockLine data={data}
      options={options}/>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
