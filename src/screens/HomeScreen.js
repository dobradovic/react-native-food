import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const HomeScreen = () => {
  //parent component passing to searchBar so child component can be changed. We can pass a callback from parent down to the child, so child can change that piece of state.
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("term was subb")}
      />
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
