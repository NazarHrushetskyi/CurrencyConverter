import React, {useState} from 'react';
import {View, Dimensions} from 'react-native';

import {LineChart} from 'react-native-chart-kit';
import {Rect, Text as TextSVG, Svg} from 'react-native-svg';

export default function Chart({dates, curCode, resChart}) {
  const [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    code: curCode,
    value: 0,
  });

  return (
    <View>
      <LineChart
        data={{
          labels: dates,
          datasets: [
            {
              data: resChart,
            },
          ],
        }}
        width={Dimensions.get('window').width - 12}
        height={250}
        verticalLabelRotation={90}
        xLabelsOffset={-20}
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: 'rgba(2,0,36,1)',
          backgroundGradientTo: 'rgba(0,212,235,1)',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '3',
            stroke: 'rgb(2,0,36)',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        decorator={() => {
          return tooltipPos.visible ? (
            <View>
              <Svg>
                <Rect
                  x={tooltipPos.x - 60}
                  y={tooltipPos.y + 10}
                  width="95"
                  height="30"
                  fill="#267690"
                />
                <TextSVG
                  x={tooltipPos.x - 13}
                  y={tooltipPos.y + 30}
                  fill="white"
                  fontSize="14"
                  fontWeight="normal"
                  textAnchor="middle">
                  {`${tooltipPos.code} : ${tooltipPos.value}`}
                </TextSVG>
              </Svg>
            </View>
          ) : null;
        }}
        onDataPointClick={data => {
          const isSamePoint =
            tooltipPos.x === data.x && tooltipPos.y === data.y;

          isSamePoint
            ? setTooltipPos(previousState => {
                return {
                  ...previousState,
                  value: data.value.toFixed(3),
                  code: curCode,
                  visible: !previousState.visible,
                };
              })
            : setTooltipPos({
                x: data.x,
                value: data.value.toFixed(3),
                y: data.y,
                code: curCode,
                visible: true,
              });
        }}
      />
    </View>
  );
}
