import { useDispatch, useSelector } from "react-redux";
import { selectGetActivitiesById } from "../slice/selector";
import { getChallengeById } from "../actions/action";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";

const screen = Dimensions.get("window");

const formatNumber = (number) => `0${number}`.slice(-2);

const getRemaining = (time) => {
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return { mins: formatNumber(mins), secs: formatNumber(secs) };
};

export default function ChallengeStart({ route }) {
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [inputSecs, setInputSecs] = useState("");
  const { mins, secs } = getRemaining(remainingSecs);
  const { id } = route.params;
  const activity = useSelector(selectGetActivitiesById);
  const dispatch = useDispatch();

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setRemainingSecs(inputSecs);
    setIsActive(false);
  };

  const handleInputSecs = (secs) => {
    setInputSecs(secs);
    setRemainingSecs(secs);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs((remainingSecs) => remainingSecs - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (remainingSecs <= 0) {
      clearInterval(interval);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  useEffect(() => {
    dispatch(getChallengeById(id));
  }, []);
  return (
    <>
      <View>
        <Text>{activity?.activity}</Text>
        <Text>{activity?.description}</Text>
        <Text>Level: {activity?.intensityLevel}</Text>
      </View>
      <View>
        <StatusBar barStyle="light-content" />
        <Text>{`${mins}:${secs}`}</Text>
        <View>
          <TextInput
            placeholder="Seconds"
            keyboardType="numeric"
            value={inputSecs}
            onChangeText={handleInputSecs}
          />
        </View>
        <TouchableOpacity onPress={toggle}>
          <Text>{isActive ? "Pause" : "Start"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reset}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
