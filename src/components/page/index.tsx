import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { S } from "./style";
import { colors } from "@/styles/colors";


type Props ={
    title: string,
}
export default function Page({title}: Props){
    return <View style={S.container}>
        
        <Feather name="chevron-right" size={20} color={colors.gray[300]} />
        <Feather name="file-text" size={20} color={colors.gray[300]} />
        
        
        <Text style={S.title}> {title}  </Text>

        <TouchableOpacity>

        <Feather name="plus" size={20} color={colors.gray[300]} />

        </TouchableOpacity>

    </View>
}