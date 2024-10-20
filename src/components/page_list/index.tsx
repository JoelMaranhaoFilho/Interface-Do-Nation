import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { S } from "./style";
import { colors } from "@/styles/colors";
import Page from "../page";
type Props = {
    data: {
        id: string,
        title: string,
    }[]
}

export default function PageList({data}: Props){
    return <View style={S.container}>
        <View style={S.header}>
            <Text style={S.title}>Privado</Text>

            <TouchableOpacity>
                <Feather name="plus" size={20} color={colors.gray[300]} />
            </TouchableOpacity>
            
        </View>
        <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Page title={item.title} /> }
        showsVerticalScrollIndicator={false}
        style={S.list}
        ItemSeparatorComponent={() => <View style={S.separator} />}
        scrollEnabled={false}
        /> 
    </View>
}