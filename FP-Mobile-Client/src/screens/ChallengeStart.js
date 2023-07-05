import { useDispatch, useSelector } from "react-redux";
import { selectGetActivitiesById } from "../slice/selector";
import { createActivityLog, getChallengeById } from "../actions/action";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const screen = Dimensions.get("window");

const formatNumber = (num) => (num < 10 ? `0${num}` : `${num}`);

const getRemainingHours = (hours) => {
  const remainingHours = hours % 60;
  return { hours: formatNumber(remainingHours) };
};

const getRemainingMins = (mins) => {
  const remainingMins = mins % 60;
  return { mins: formatNumber(remainingMins) };
};

const getRemainingSecs = (secs) => {
  const remainingSecs = secs % 60;
  return { secs: formatNumber(remainingSecs) };
};

let totalSecs = 0;
export default function ChallengeStart({ route }) {
  const [remainingHours, setRemainingHours] = useState(0);
  const [remainingMins, setRemainingMins] = useState(0);
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [inputHours, setInputHours] = useState("");
  const [inputMins, setInputMins] = useState("");
  const [inputSecs, setInputSecs] = useState("");
  const [isActive, setIsActive] = useState(false);

  const { hours } = getRemainingHours(remainingHours);
  const { mins } = getRemainingMins(remainingMins);
  const { secs } = getRemainingSecs(remainingSecs);

  const { id } = route.params;
  const activity = useSelector(selectGetActivitiesById);
  const dispatch = useDispatch();

  totalSecs += 0.5;
  console.log(totalSecs);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setRemainingHours(inputHours);
    setRemainingMins(inputMins);
    setRemainingSecs(inputSecs);
    setIsActive(false);
    console.log(activity.id, "<<<<< id");
    dispatch(createActivityLog({ timeElapsed: totalSecs, idActivity: activity.id }));
    totalSecs = 0;
  };

  const handleInputSecs = (secs) => {
    setInputSecs(secs);
    setRemainingSecs(secs);
  };

  const handleInputMins = (mins) => {
    setInputMins(mins);
    setRemainingMins(mins);
  };

  const handleInputHours = (hours) => {
    setInputHours(hours);
    setRemainingHours(hours);
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs((prevSecs) => {
          let updatedSecs = prevSecs - 1;
          let updatedMins = remainingMins;
          let updatedHours = remainingHours;

          if (updatedSecs < 0) {
            updatedMins -= 1;
            updatedSecs = 59;
          }
          if (updatedMins < 0) {
            updatedHours -= 1;
            updatedMins = 59;
          }
          if (updatedHours < 0) {
            updatedSecs = 0;
            updatedMins = 0;
            updatedHours = 0;
            setIsActive(false);
          }

          setRemainingHours(updatedHours);
          setRemainingMins(updatedMins);

          return updatedSecs;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, remainingSecs, remainingMins, remainingHours]);

  useEffect(() => {
    dispatch(getChallengeById(id));
  }, []);

  return (
    <>
      <ScrollView>
        <View style={{ flex: 1, padding: 10 }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            {activity.activity}
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 20,
              fontWeight: "500",
              marginTop: 20,
            }}
          >
            Challenges:
          </Text>
          <Text style={{ marginLeft: 15, fontSize: 16 }}>
            {activity.description}
          </Text>
        </View>
        <View style={styles.timerContainer}>
          <StatusBar barStyle="light-content" />
          <Text style={styles.timerText}>{`${hours}:${mins}:${secs}`}</Text>
          <View style={styles.inputContainer}>
            <SelectDropdown
              data={Array.from({ length: 100 }, (_, index) => index.toString())}
              defaultValue="Hours"
              onSelect={(selectedItem) => handleInputHours(selectedItem)}
              buttonStyle={styles.input}
              buttonTextStyle={styles.inputText}
              dropdownStyle={styles.dropdown}
              rowStyle={styles.dropdownRow}
            />
            <SelectDropdown
              data={Array.from({ length: 60 }, (_, index) => index.toString())}
              defaultValue="Minutes"
              onSelect={(selectedItem) => handleInputMins(selectedItem)}
              buttonStyle={styles.input}
              buttonTextStyle={styles.inputText}
              dropdownStyle={styles.dropdown}
              rowStyle={styles.dropdownRow}
            />
            <SelectDropdown
              data={Array.from({ length: 60 }, (_, index) => index.toString())}
              defaultValue="Seconds"
              onSelect={(selectedItem) => handleInputSecs(selectedItem)}
              buttonStyle={styles.input}
              buttonTextStyle={styles.inputText}
              dropdownStyle={styles.dropdown}
              rowStyle={styles.dropdownRow}
            />
          </View>
          <TouchableOpacity onPress={toggle} style={styles.button}>
            <Text style={styles.buttonText}>
              {isActive ? "Pause" : "Start"}
            </Text>
          </TouchableOpacity>
          {isActive && (
            <TouchableOpacity
              onPress={reset}
              style={[styles.button, styles.buttonReset]}
            >
              <Text style={[styles.buttonText, styles.buttonTextReset]}>
                Reset
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    flex: 1,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 10,
    borderColor: "#5A96E3",
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 45,
    color: "#5A96E3",
  },
  timerText: {
    color: "#000000",
    fontSize: 60,
    marginBottom: 20,
  },
  buttonReset: {
    marginTop: 20,
    borderColor: "#E74646",
  },
  buttonTextReset: {
    color: "#E74646",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#080202",
    borderRadius: 5,
    width: 81,
    height: 40,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#000000",
  },
  inputText: {
    fontSize: 16,
    color: "#000000",
  },
  dropdown: {
    borderColor: "#080202",
    borderRadius: 5,
    marginTop: 10,
  },
  dropdownRow: {
    backgroundColor: "#FFFFFF",
  },
});
