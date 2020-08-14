import React, { FC, useState, useEffect } from "react";

import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  View
} from "react-native";

import {
  Neumorphic, 
  Header
} from "_common_components";

import {
  COLORS,
  STYLES
} from "_constants";

import ChevronForwardIcon from "_icons/chevron-forward.svg";

interface AddNewTripToProps {
  route: any,
  navigation: any
};

const AddNewTripTo: FC<AddNewTripToProps> = ({ navigation, route }) => {
  
  const { origin } = route.params;

  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState(stops);

  function compare(a: any, b: any): number {
    if (a.name > b.name) return 1;
    if (b.name > a.name) return -1;
    return 0;
  }

  useEffect(() => {
    const results = stops.filter(stop =>
      stop.name.toLowerCase().includes(query.toLowerCase()) && stop.id != origin.id
    );
    results.sort(compare);
    setQueryResults(results);
  }, [query]);

  return (
    <SafeAreaView style={{flex: 1}}>

      <Header navigation={navigation} />

      <View style={STYLES.container}>
        
        <Text style={STYLES.title}> Add a New Trip </Text>
        <Text style={[STYLES.subtitle, {marginTop: 15}]}> To </Text>
        
        <TextInput
          style={S.textbox}
          value={query}
          onChangeText={text => setQuery(text)}
          placeholder="Enter stop, station or address"
          />

      </View>

      <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 25 }}>
      {queryResults.map(result =>
        
        <TouchableOpacity
          key={result.id}
          onPress={() => navigation.navigate("Add New Trip Confirm", { origin: origin, destination: result })}
        >
          
          <Neumorphic
            key={result.id}
            width={375}
            height={55}
            background={COLORS.PRIMARY}
            radius={10}
            style={{marginTop: 15}}
          >
            
            <View style={[STYLES.row, {alignItems: "center"}]}>
              <View style={{left: 20, width: 345}}>
                <Text style={S.title}> {result.name} </Text>
                <Text style={S.subtitle}> {result.suburb} </Text>
              </View>

              <View>
                <ChevronForwardIcon />
              </View>
            </View>
          
          </Neumorphic>
        
        </TouchableOpacity>

      )}

    </ScrollView>

    </SafeAreaView>
  );

}

export default AddNewTripTo;

const S = StyleSheet.create({
  textbox: {
    width: 370,
    height: 40,
    borderRadius: 5,
    backgroundColor: COLORS.LIGHT_GRAY,
    marginTop: 10,
    paddingLeft: 10
  },
  title: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: "black"
  },
  subtitle: {
    fontFamily: "Arial Rounded MT Bold",
    fontSize: 14,
    color: COLORS.GRAY
  }
});

const stops = [
  { id: 0,  name: "Dulwich Hill Light Rail", suburb: "Dulwich Hill" },
  { id: 1,  name: "Dulwich Grove Light Rail", suburb: "Dulwich Hill" },
  { id: 2,  name: "Arlington Light Rail", suburb: "Dulwich Hill" },
  { id: 3,  name: "Waratah Mills Light Rail", suburb: "Dulwich Hill" },
  { id: 4,  name: "Lewisham West Light Rail", suburb: "Lewisham" },
  { id: 5,  name: "Taverners Hill Light Rail", suburb: "Leichhardt" },
  { id: 6,  name: "Marion Light Rail", suburb: "Leichhardt" },
  { id: 7,  name: "Hawthorne Light Rail", suburb: "Leichhardt" },
  { id: 8,  name: "Leichhardt North Light Rail", suburb: "Leichhardt" },
  { id: 9,  name: "Lilyfield Light Rail", suburb: "Lilyfield" },
  { id: 10, name: "Rozelle Bay Light Rail", suburb: "Annandale" },
  { id: 11, name: "Jubilee Park Light Rail", suburb: "Glebe" },
  { id: 12, name: "Glebe Light Rail", suburb: "Glebe" },
  { id: 13, name: "Wentworth Park Light Rail", suburb: "Pyrmont" },
  { id: 14, name: "Fish Market Light Rail", suburb: "Pyrmont" },
  { id: 15, name: "John Street Square Light Rail", suburb: "Pyrmont" },
  { id: 16, name: "The Star Light Rail", suburb: "Pyrmont" },
  { id: 17, name: "Pyrmont Bay Light Rail", suburb: "Pyrmont" },
  { id: 18, name: "Convention Light Rail", suburb: "Sydney" },
  { id: 19, name: "Exhibition Centre Light Rail", suburb: "Sydney" },
  { id: 20, name: "Paddy's Market Light Rail", suburb: "Haymarket" },
  { id: 21, name: "Bridge Street Light Rail", suburb: "Sydney" },
  { id: 22, name: "Wynyard Light Rail", suburb: "Sydney" },
  { id: 23, name: "QVB Light Rail", suburb: "Sydney" },
  { id: 24, name: "Town Hall Light Rail", suburb: "Sydney" },
  { id: 25, name: "Chinatown Light Rail", suburb: "Sydney" },
  { id: 26, name: "Capitol Square Light Rail", suburb: "Haymarket" },
  { id: 27, name: "Haymarket Light Rail", suburb: "Haymarket" },
  { id: 28, name: "Central Grand Course Light Rail", suburb: "Sydney" },
  { id: 29, name: "Central Chalmers Street Light Rail", suburb: "Sydney" },
  { id: 30, name: "Surry Hills Light Rail", suburb: "Surry Hills" },
  { id: 31, name: "Moore Park Light Rail", suburb: "Moore Park" },
  { id: 32, name: "Royal Randwick Light Rail", suburb: "Centennial Park" },
  { id: 33, name: "Wansey Road Light Rail", suburb: "Randwick" },
  { id: 34, name: "UNSW High Street Light Rail", suburb: "Randwick" },
  { id: 35, name: "Randwick Light Rail", suburb: "Randwick" },
  { id: 36, name: "ES Marks Light Rail", suburb: "Kensignton" },
  { id: 37, name: "Kensington Light Rail", suburb: "Kensignton" },
  { id: 38, name: "UNSW Anzac Parade Light Rail", suburb: "Kensignton" },
  { id: 39, name: "Kingsford Light Rail", suburb: "Kingsford" },
  { id: 40, name: "Juniors Kingsford Light Rail", suburb: "Kingsford" }
];