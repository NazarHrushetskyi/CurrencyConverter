import moment from 'moment';
import React, {useState} from 'react';
import {View} from 'react-native';

import DatePicker from 'react-native-date-picker';

import DateBtn from '../DateButton/Button';

export default function MyCalendar({onPress}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const time = moment(date).format('DD/MM/YYYY');

  return (
    <View>
      <DateBtn
        title={time}
        onClick={() => {
          setOpen(true);
        }}
      />
      <DatePicker
        modal
        mode="date"
        maximumDate={new Date()}
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          onPress(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
}
