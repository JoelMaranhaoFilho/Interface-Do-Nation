import { FlatList, View, Text } from "react-native";
import { S } from "./style";
import Recent from "../recent";

type Props    = {
    data: {
        id: string
        title: string
        cover?: string
    }[]
}

export default function RecentList({data}: Props){
    return <View style={S.container}>
        <Text style={S.title}>Recentes</Text>

        <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Recent data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={S.content}
        /> 
    </View>
}