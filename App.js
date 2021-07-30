import React from 'react';
import type { Node } from 'react';
import { SafeAreaView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App: () => Node = () => {

  return (
    <SafeAreaView>
      <FontAwesome5 name={'comments'} size={70}/>
      <FontAwesome5 name={'git'} brand />
    </SafeAreaView>
  );
};

export default App;
