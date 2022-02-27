import React from 'react';
import { View } from "react-native";

export default App = () => {

    return (
        <View
            style = {{
                backgroundColor: 'white',
                flex: 1,
                flexDirection: 'row',
                // flexDirection: 'row-reverse',
                // flexDirection: 'column-reverse',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                alignContent: 'center',
                
            }}>

                <View style = {{
                    backgroundColor: 'dodgerblue',
                    // flex: 10,
                    width: 100,
                    height: 100,
                }}/>
                <View style = {{
                    backgroundColor: 'gold',
                    // flex: 1,
                    width: 100,
                    height: 100,
                }}/>
                <View style = {{
                    backgroundColor: 'tomato',
                    // flex: 1,
                    width: 100,
                    height: 100,
                }}/>
                <View style = {{
                    backgroundColor: 'grey',
                    // flex: 1,
                    width: 100,
                    height: 100,
                }}/>
                <View style = {{
                    backgroundColor: 'greenyellow',
                    // flex: 1,
                    width: 100,
                    height: 100,
                }}/>

            </View>
    );
}