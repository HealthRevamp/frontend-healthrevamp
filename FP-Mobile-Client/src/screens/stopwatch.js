import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

const TimerApp = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [duration, setDuration] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (duration > 0 && timeRemaining <= 0) {
      setTimeRemaining(duration);
      intervalRef.current = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setTimeRemaining(0);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTimeRemaining(0);
    setDuration(0);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(timeRemaining)}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter duration in seconds"
        keyboardType="numeric"
        value={duration.toString()}
        onChangeText={text => setDuration(parseInt(text) || 0)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleStart} disabled={timeRemaining > 0}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleStop}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60,
    marginBottom: 50
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#333',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
});

export default TimerApp;
